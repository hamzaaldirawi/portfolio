import codeTypes from './codeTypes';

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


const initialState = {
    code: [],
    codes: [],
    isLoading: true,
    codeUpdated: false,
    codeDeleted: false,
    backImageUploaded: false,
    gifUploaded: false,
    error: ''
};

const codes = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case ADD_CODE:
        case UPDATE_CODE:
        case DELETE_IMG:
            return {
                ...state,
                code: payload,
                loading: false,
                codeUpdated: true,
                codeDeleted: false,
                backImageUploaded: false,
                gifUploaded: false
            }
        case UPLOAD_BIMG: 
            return {
                ...state,
                code: payload,
                loading: false,
                codeUpdated: true,
                backImageUploaded: true,
                gifUploaded: false
            }
        case UPLOAD_GIF: 
            return {
                ...state,
                code: payload,
                loading: false,
                codeUpdated: true,
                backImageUploaded: false,
                gifUploaded: true
            }
        case SHOW_CODE: 
            return {
                ...state, 
                code: payload,
                loading: false,
                codeUpdated: false,
                codeDeleted: false,
                imageUploaded: false,
                backImageUploaded: false
            }
        case SHOW_CODES:
            return {
                ...state,
                codes: payload,
                loading: false,
                codeUpdated: false,
                codeDeleted: false,
                imageUploaded: false,
                backImageUploaded: false,
            }
        case REMOVE_CODE:
            return {
                ...state,
                code: [],
                loading: false,
                codeDeleted: true
            }
        case REMOVE_CODE_REDUX: 
            return {
                ...state,
                code: []
            }
        case REMOVE_CODES: 
            return {
                ...state,
                code: [],
                loading: false,
                codeDeleted: true
            }
        case CODE_ERROR: 
            return {
                ...state,
                error: payload
            }
        default: 
            return state
    }
}

export default codes;