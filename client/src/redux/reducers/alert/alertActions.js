import alertTypes from './alertTypes';
import { v4 as uuidv4 } from 'uuid';

const { 
    SET_ALERT,
    REMOVE_ALERT 
} = alertTypes;

export const setAlert = (message, alertType) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: {
            message,
            alertType,
            id
        }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000)
}
