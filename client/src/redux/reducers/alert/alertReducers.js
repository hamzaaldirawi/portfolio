import alertTypes from './alertTypes';

const initialState = [];

const { SET_ALERT, REMOVE_ALERT } = alertTypes;

const alert = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_ALERT:
            return [
                ...state,
                payload
            ];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}

export default alert;