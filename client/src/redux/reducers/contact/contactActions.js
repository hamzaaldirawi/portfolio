import axios from 'axios';
import { setAlert } from '../alert/alertActions';
import contactTypes from './contactTypes';

const { 
    SENT_SUCCESS,
    SENT_FAILD
} = contactTypes;


export const sendMessage = ({ userName, userEmail, userMessage }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ userName, userEmail, userMessage });

    try {
        const res = await axios.post('/api/contact', body, config);
        
        dispatch({
            type: SENT_SUCCESS,
            payload: res.data
        })

    } catch(err) {   
        dispatch({
            type: SENT_FAILD,
            payload: err.response.data
        })

        const error = err.response.data.message;
        dispatch(setAlert(error, 'SENT FAILD'))
    }
}