import contactTypes from './contactTypes';

const { 
    SENT_SUCCESS,
    SENT_FAILD
} = contactTypes;

const initialState = {
    loading: true,
    message: {},
    error: {}
}

const contact = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SENT_SUCCESS:
            return {
                ...state,
                loading: false,
                message: payload
        }
        case SENT_FAILD:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default contact;