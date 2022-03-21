import axios from 'axios';
import { setAlert } from '../alert/alertActions';
import codeTypes from './codeTypes';
import setAuthToken from '../../../utils/setAuthToken';

const {
    ADD_CODE,
    UPLOAD_BIMG,
    UPLOAD_GIF,
    UPDATE_CODE,
    REMOVE_CODE_REDUX,
    REMOVE_CODE,
    REMOVE_CODES,
    DELETE_IMG,
    SHOW_CODE,
    SHOW_CODES,
    CODE_ERROR
} = codeTypes;

export const showCodes = () => async dispatch => {
    try {
        const res = await axios.get('/api/codes');

        dispatch({
            type: SHOW_CODES,
            payload: res.data,
        })
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'danger'))
    }
}


export const showCode = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/codes/${id}`)

        dispatch({
            type: SHOW_CODE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'warning'))
    }
}

export const removeCodeRedux = () => dispatch => {
    dispatch({
        type: REMOVE_CODE_REDUX
    })
    sessionStorage.removeItem('CodeID')
}

export const addCode = ({codeName, codeUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({codeName, codeUrl})

    try {
        const res = await axios.post('/api/codes', body, config);

        dispatch({
            type: ADD_CODE,
            payload: res.data
        });
        sessionStorage.setItem('CodeID', res.data._id)
        dispatch(setAlert('Code Added', 'success'));
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data
        })
        const errors = err.response.data.errors;
        const error = err.response.data;

        if(errors) {
            return errors.map(error => dispatch(setAlert(error.msg, 'danger')));
        }

        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Code', 'warning'));
            }  
        }  

        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const updateCode = (id,
    {codeName, codeUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({codeName, codeUrl})


    try {
        const res = await axios.put(`/api/codes/${id}`, body, config)

        dispatch({
            type: UPDATE_CODE,
            payload: res.data
        })
        dispatch(setAlert('Code Updated', 'success'))
    } catch(err) {

        dispatch({
            type: CODE_ERROR,
            payload: err.response.data
        })

        const errors = err.response.data.errors;
        if(errors) {
           return errors.map(error => dispatch(setAlert(error.msg, 'danger')))
        }
        const error = err.response.data;
        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Code', 'danger'));
            }
        }
        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const uploadCodeBImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/codes/upload/bimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_BIMG,
            payload: res.data
        })
        dispatch(setAlert('Background Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;  
        dispatch(setAlert(error, 'danger'))
    }
}

export const uploadCodeGif = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/codes/upload/gifimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_GIF,
            payload: res.data
        })
        dispatch({
            type: REMOVE_CODE_REDUX
        })
        sessionStorage.removeItem('CodeID');
        dispatch(setAlert('Gif Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })

        dispatch(setAlert('Please Select an Image', 'danger'))
    }
}

export const updateCodeBImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/codes/upload/bimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_BIMG,
            payload: res.data
        })
        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;
        dispatch(setAlert(error, 'warning'))
    }
}

export const updateCodeGifImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/codes/upload/gifimg/${id}`, file, config)

        dispatch({
            type: UPLOAD_BIMG,
            payload: res.data
        })

        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })

        dispatch(setAlert('Please Select an Image', 'warning'))
    }
}


export const deleteCode = (id) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.delete(`/api/codes/${id}`)

        dispatch({
            type: REMOVE_CODE,
            payload: res.data
        })
        dispatch(setAlert('Code Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteCodes = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }        

    try {
        const res = await axios.delete('/api/codes/')

        dispatch({
            type: REMOVE_CODES,
            payload: res.data
        })
        dispatch(setAlert('Codes Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteCodeBImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/codes/bimg/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteCodeGifImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/codes/gifimg/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: CODE_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}