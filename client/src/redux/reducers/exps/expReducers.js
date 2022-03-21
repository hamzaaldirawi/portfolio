import expTypes from './expTypes';

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


const initialState = {
    experience: false,
    experiences: [],
    loading: true,
    expUpdated: false,
    expDeleted: false,
    imageUploaded: false,
    backImageUploaded: false,
    gifUploaded: false,
    workAt: '',
    workLink: '',
    error: ''
};

const experiences = (state = initialState, action) => {
    const { type, payload, workAt, workLink } = action;

    switch(type){
        case ADD_EXP:
        case UPDATE_EXP:
        case DELETE_IMG:
            return {
                ...state,
                experience: payload,
                loading: false,
                expUpdated: true,
                expDeleted: false,
                imageUploaded: false,
                backImageUploaded: false
            }
        case UPLOAD_IMG: 
            return {
                ...state,
                experience: payload,
                loading: false,
                expUpdated: true,
                imageUploaded: true,
                backImageUploaded: false,
                gifUploaded: false
            }
        case UPLOAD_BIMG: 
            return {
                ...state,
                experience: payload,
                loading: false,
                expUpdated: true,
                imageUploaded: false,
                backImageUploaded: true,
                gifUploaded: false
            }
        case UPLOAD_GIF: 
            return {
                ...state,
                experience: payload,
                loading: false,
                expUpdated: true,
                imageUploaded: false,
                backImageUploaded: false,
                gifUploaded: true
            }
        case SHOW_EXP: 
            return {
                ...state, 
                experience: payload,
                loading: false,
                expUpdated: false,
                expDeleted: false,
                imageUploaded: false,
                backImageUploaded: false,
                workAt: workAt,
                workLink: workLink
            }
        case SHOW_EXPS:
            return {
                ...state,
                experiences: payload,
                loading: true,
                expUpdated: false,
                expDeleted: false,
                imageUploaded: false,
                backImageUploaded: false,
                workAt: workAt,
                workLink: workLink,
            }
        case REMOVE_EXP:
            return {
                ...state,
                experience: [],
                loading: false,
                expDeleted: true
            }
        case REMOVE_EXP_REDUX: 
            return {
                ...state,
                experience: [],
                loading: true
            }
        case REMOVE_EXPS: 
            return {
                ...state,
                experience: [],
                loading: false,
                expDeleted: true
            }
        case EXP_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state
    }
}

export default experiences;