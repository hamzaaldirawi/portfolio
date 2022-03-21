import axios from 'axios';
import { setAlert } from '../alert/alertActions';
import setAuthToken from '../../../utils/setAuthToken';
import blogTypes from './blogTypes';

const {
    ADD_BLOG,
    UPLOAD_IMG,
    UPDATE_BLOG,
    REMOVE_BLOG_REDUX,
    REMOVE_BLOG,
    REMOVE_BLOGS,
    DELETE_IMG,
    SHOW_BLOG,
    SHOW_BLOGS,
    BLOG_ERROR
} = blogTypes;

export const showBlogs = () => async dispatch => {
    try {
        const res = await axios.get('/api/blogs');

        dispatch({
            type: SHOW_BLOGS,
            payload: res.data,
        })
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'danger'))
    }
}


export const showBlog = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/blogs/${id}`)

        dispatch({
            type: SHOW_BLOG,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data
        })
        const error = err.response.data;
        dispatch(setAlert(error.message, 'warning'))
    }
}

export const removeBlogRedux = () => dispatch => {
    dispatch({
        type: REMOVE_BLOG_REDUX
    })
    sessionStorage.removeItem('BlogID')
}

export const addBlog = ({blogText, blogName, blogUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({blogText, blogName, blogUrl})

    try {
        const res = await axios.post('/api/blogs', body, config);

        dispatch({
            type: ADD_BLOG,
            payload: res.data
        });
        sessionStorage.setItem('BlogID', res.data._id)
        dispatch(setAlert('Blog Added', 'success'));
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data
        })
        const errors = err.response.data.errors;
        const error = err.response.data;

        if(errors) {
            return errors.map(error => dispatch(setAlert(error.msg, 'danger')));
        }

        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Blog', 'warning'));
            }  
        }  

        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const updateBlog = (id,
    {blogText, blogName, blogUrl}) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({blogText, blogName, blogUrl})


    try {
        const res = await axios.put(`/api/blogs/${id}`, body, config)

        dispatch({
            type: UPDATE_BLOG,
            payload: res.data
        })
        dispatch(setAlert('Blog Updated', 'success'))
    } catch(err) {

        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data
        })

        const errors = err.response.data.errors;
        if(errors) {
           return errors.map(error => dispatch(setAlert(error.msg, 'danger')))
        }
        const error = err.response.data;
        if(error) {
            if(error.includes('duplicate')) {
                return dispatch(setAlert('Duplicate Blog', 'danger'));
            }
        }
        dispatch(setAlert('Server Error', 'danger'));
    }
}

export const uploadBlogImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post(`/api/blogs/upload/${id}`, file, config)

        dispatch({
            type: UPLOAD_IMG,
            payload: res.data
        })
        dispatch({
            type: REMOVE_BLOG_REDUX
        })
        sessionStorage.removeItem('BlogID');
        dispatch(setAlert('Image Uploaded', 'success'))
    } catch(err) {

        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;  
        dispatch(setAlert(error, 'danger'))
    }
}

export const updateBlogImg = (id, file) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try {
        const res = await axios.put(`/api/blogs/upload/${id}`, file, config)

        dispatch({
            type: UPLOAD_IMG,
            payload: res.data
        })
        dispatch(setAlert('Update Image Successfully', 'success'))
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data.message
        })
        const error = err.response.data.message;
        dispatch(setAlert(error, 'warning'))
    }
}

export const deleteBlog = (id) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.delete(`/api/blogs/${id}`)

        dispatch({
            type: REMOVE_BLOG,
            payload: res.data
        })
        dispatch(setAlert('Blog Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteBlogs = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }        

    try {
        const res = await axios.delete('/api/blogs/')

        dispatch({
            type: REMOVE_BLOGS,
            payload: res.data
        })
        dispatch(setAlert('Blogs Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}

export const deleteBlogImg = (id, filename) => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
 
    try {
        const res = await axios.delete(`/api/delete/blogs/img/${id}/${filename}`)

        dispatch({
            type: DELETE_IMG,
            payload: res.data
        })
        dispatch(setAlert('Image Deleted', 'success'))
    } catch(err) {
        dispatch({
            type: BLOG_ERROR,
            payload: err.response.data.message
        })
        dispatch(setAlert(err.response.data.message, 'danger'))
    }
}