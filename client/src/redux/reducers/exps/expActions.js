import axios from 'axios';
import { setAlert } from '../alert/alertActions';
import expTypes from './expTypes';
import setAuthToken from '../../../utils/setAuthToken';

const {
    ADD_EXP,
    UPLOAD_IMG,
    UPLOAD_BIMG,
    UPLOAD_GIF,
    UPDATE_EXP,
    REMOVE_EXP_REDUX,
    REMOVE_EXP,
    REMOVE_EXPS,
    DELETE_IMG,
    SHOW_EXP,
    SHOW_EXPS,
    EXP_ERROR
} = expTypes;

export const showExps = () => async dispatch => {
    try {
        const res = await axios.get('/api/exps');
        const work = await axios.get('/api/work');
        dispatch({
            type: SHOW_EXPS,
            payload: res.data,
            workAt: work.data.workAt,
            workLink: work.data.workLink
        })
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'danger'))
    }
}


export const showExp = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/exps/${id}`)
        const work = await axios.get('/api/work');
        dispatch({
            type: SHOW_EXP,
            payload: res.data,
            workAt: work.data.workAt,
            workLink: work.data.workLink
        })
    } catch (err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'warning'))
    }
}

export const showExpByLink = (link) => async dispatch => {
    try {
        const res = await axios.get(`/api/exps/link/${link}`)
        const work = await axios.get('/api/work');
        dispatch({
            type: SHOW_EXP,
            payload: res.data,
            workAt: work.data.workAt,
            workLink: work.data.workLink
        })
    } catch (err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'warning'))
    }
}

export const removeExpRedux = () => dispatch => {
    dispatch({
        type: REMOVE_EXP_REDUX
    })
    if(sessionStorage.ExperienceID) {
        sessionStorage.removeItem('ExperienceID')
    }
}

export const addExp = ({expHead, expDesc, expDetails, expRule, expSkills, expUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({expHead, expDesc, expDetails, expRule, expSkills, expUrl})

    try {
        const res = await axios.post('/api/exps', body, config)

        dispatch({
            type: ADD_EXP,
            payload: res.data
        });
        sessionStorage.setItem('ExperienceID', res.data._id)
        dispatch(setAlert('Experience Added', 'success'));
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data
        })
        const errors = err.response.data.errors;
        const error = err.response.data;

        if(errors) {
            return errors.map(error => dispatch(setAlert(error.msg, 'danger')))
        }

        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Experience', 'warning'))
            }  
        }  

        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const updateExp = (id,
    {expHead, expHeadLink, expDesc, expDetails, expRule, expSkills, expUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ expHead, expHeadLink, expDesc, expDetails, expRule, expSkills, expUrl })


    try {
        const res = await axios.put(`/api/exps/${id}`, body, config)

        dispatch({
            type: UPDATE_EXP,
            payload: res.data
        })
        dispatch(setAlert('Experience Updated', 'success'))
    } catch(err) {

        dispatch({
            type: EXP_ERROR,
            payload: err.response.data
        })

        const errors = err.response.data.errors;
        if(errors) {
           return errors.map(error => dispatch(setAlert(error.msg, 'danger')))
        }
        const error = err.response.data;
        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Experience', 'danger'));
            }
        }
        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const uploadExpImg = (id, files) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/exps/upload/${id}`, files, config)

        dispatch({
            type: UPLOAD_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;  
        dispatch(setAlert(error, 'danger'))
    }
}

export const uploadExpBImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/exps/upload/bimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_BIMG,
            payload: res.data
        })
        dispatch(setAlert('Background Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })

        dispatch(setAlert('Please Select an Image', 'danger'))
    }
}

export const uploadExpGifImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/exps/upload/gifimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_GIF,
            payload: res.data
        })
        dispatch({
            type: REMOVE_EXP_REDUX
        })
        sessionStorage.removeItem('ExperienceID');
        dispatch(setAlert('Gif Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })

        dispatch(setAlert('Please Select an Image', 'danger'))
    }
}

export const updateExpImg = (id, files) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/exps/upload/${id}`, files, config)

        dispatch({
            type: UPLOAD_IMG,
            payload: res.data
        })
        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;
        dispatch(setAlert(error, 'warning'))
    }
}

export const updateExpBImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/exps/upload/bimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_BIMG,
            payload: res.data
        })

        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })

        dispatch(setAlert('Please Select an Image', 'warning'))
    }
}

export const updateExpGifImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/exps/upload/gifimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_GIF,
            payload: res.data
        })

        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert('Please Select an Image', 'warning'))
    }
}

export const deleteExp = (id) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.delete(`/api/exps/${id}`)

        dispatch({
            type: REMOVE_EXP,
            payload: res.data
        })
        dispatch(setAlert('Experience Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteExps = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }        

    try {
        const res = await axios.delete('/api/exps/')

        dispatch({
            type: REMOVE_EXPS,
            payload: res.data
        })
        dispatch(setAlert('Experiences Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteExpImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/exps/img/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteExpBImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/exps/bimg/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteExpGifImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/exps/gifimg/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: EXP_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}