import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import { setAlert } from '../alert/alertActions';
import authTypes from './authTypes';

const { 
    ADMIN_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAILD,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_SUCCESS,
    SHOW_ADMINS,
    SHOW_ADMIN,
    ADMINS_ERROR,
    DELETE_SUCCESS,
    DELETE_ERROR,
    LOGOUT
} = authTypes;


export const loadAdmin = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/dash/admin')
        
        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
          });
    } catch (err) {
        dispatch({
            type: LOGIN_FAILD
        })
    }
}

export const signin = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/dash/admin/signin', body, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadAdmin())
    } catch(err) {   
        dispatch({
            type: LOGIN_FAILD,
        })

        const error = err.response.data.message;
        dispatch(setAlert(error, 'warning'))
    }
}

export const register = ({ name, email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })


    try {
        const res = await axios.post('/api/dash/admin/register', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Admin Registered', 'success'))
    } catch(err) {

        dispatch({
            type: REGISTER_FAIL
        })
        const errors = err.response.data.errors;
        const error = err.response.data.message

        if (errors) {
           return  errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        if (error) {
            return dispatch(setAlert(error, 'danger'))
        }

        dispatch(setAlert(err.message, 'danger'))
    }
}

export const updateAdmin = (id, { email, oldpassword, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, oldpassword, password })


    try {
        const res = await axios.put(`/api/dash/admin/${id}`, body, config)

        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Admin Updated', 'success'))
    } catch(err) {

        dispatch({
            type: REGISTER_FAIL,
        })
        const errors = err.response.data.errors;
        const error = err.response.data.message

        if (errors) {
            return errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        if (error) {
            return dispatch(setAlert(error, 'danger'))
        }

        dispatch(setAlert(err.message, 'danger'))
    }
}

export const showAdmins = () => async dispatch => {
    try {
        const res = await axios.get('/api/dash/admins') 
        let resArray = res.data.pop();

        dispatch({
            type: SHOW_ADMINS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADMINS_ERROR
        })
    }
}

export const showAdmin = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/dash/admin/${id}`) 

        dispatch({
            type: SHOW_ADMIN,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADMINS_ERROR,
        })
    }
}

export const deleteAdmin = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.delete(`/api/dash/admin/${id}`, config)

        dispatch({
            type: DELETE_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert('Admin Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: DELETE_ERROR
        })

        const errors = err.response.data.errors

        const error = err.response.data

        if (errors) {
            return errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        if (error) {
            return dispatch(setAlert(error.message, 'danger'))
        }
    }
} 

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}