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

let token = localStorage.getItem('token');
if(localStorage.token) {
    token = localStorage.token;
}

const initialState = {
    token: token,
    loading: true,
    admin: null,
    selectedAdmin: null,
    admins: null,
    isAuth: false,
    adminDeleted: false,
    adminRegistered: false
}

const auth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADMIN_LOADED: 
            return {
                ...state,
                loading: false,
                admin: payload,
                isAuth: true,
                adminDeleted: false,
                adminRegistered: false
        }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                token: payload,
                loading: false,
                adminRegistered: false
        }
        case LOGIN_FAILD:
            return {
                ...state,
                token: null,
                loading: false,
                admin: null,
                isAuth: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                token: payload,
                loading: false,
                adminRegistered: true
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedAdmin: payload,
                adminDeleted: false
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: false,
                adminDeleted: true
            };
        case SHOW_ADMINS: {
            return {
                ...state,
                loading: false,
                admins: payload,
                adminDeleted: false
            }
        }
        case SHOW_ADMIN: {
            return {
                ...state,
                loading: false,
                selectedAdmin: payload,
            }
        }
        case ADMINS_ERROR:
        case DELETE_ERROR:
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                adminRegistered: false
            }
        case LOGOUT: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                loading: false,
                admin: null,
                selectedAdmin: null,
                admins: null
            };
        default:
            return state;
    }
}

export default auth;