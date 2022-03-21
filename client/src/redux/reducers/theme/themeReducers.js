import themeTypes from './themeTypes';

const { 
    CHANGE_THEME_DARK,
    CHANGE_THEME_LIGHT,
    CHANGE_DISPLAY
} = themeTypes;

if(!localStorage.themeDark && !localStorage.themeLight) {
    document.documentElement.setAttribute('theme', 'dark');
} else if (localStorage.themeDark) {
    document.documentElement.setAttribute('theme', 'dark');
} else if (localStorage.themeLight) {
    document.documentElement.setAttribute('theme', 'light');
}

let displaying = false;

const initialState = {
    dark: true,
    light: false,
    display: displaying,
}

const auth = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case CHANGE_THEME_DARK:
            return {
                ...state,
                dark: true,
                light: false
        }
        case CHANGE_THEME_LIGHT:
            return {
                ...state,
                dark: false,
                light: true
        }
        case CHANGE_DISPLAY:
            if (!displaying) {
                displaying = true;
            } else {
                displaying = false;
            }             
            return {
                display: displaying
            }
        default:
            return state;
    }
}

export default auth;