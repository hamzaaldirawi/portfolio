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


const initialState = {
    blog: [],
    blogs: [],
    isLoading: true,
    blogUpdated: false,
    blogDeleted: false,
    imageUploaded: false,
    error: ''
};

const blogs = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case ADD_BLOG:
        case UPDATE_BLOG:
        case DELETE_IMG:
            return {
                ...state,
                blog: payload,
                loading: false,
                blogUpdated: true,
                blogDeleted: false,
                imageUploaded: false
            }
        case UPLOAD_IMG: 
            return {
                ...state,
                blog: payload,
                loading: false,
                blogUpdated: true,
                imageUploaded: true
            }
        case SHOW_BLOG: 
            return {
                ...state, 
                blog: payload,
                loading: false,
                blogUpdated: false,
                blogDeleted: false,
                imageUploaded: false
            }
        case SHOW_BLOGS:
            return {
                ...state,
                blogs: payload,
                loading: false,
                blogUpdated: false,
                blogDeleted: false,
                imageUploaded: false
            }
        case REMOVE_BLOG:
            return {
                ...state,
                blog: [],
                loading: false,
                blogDeleted: true
            }
        case REMOVE_BLOG_REDUX: 
            return {
                ...state,
                blog: []
            }
        case REMOVE_BLOGS: 
            return {
                ...state,
                blog: [],
                loading: false,
                blogDeleted: true
            }
        case BLOG_ERROR: 
            return {
                ...state,
                error: payload
            }
        default: 
            return state
    }
}

export default blogs;