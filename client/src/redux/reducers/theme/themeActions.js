import themeTypes from './themeTypes';

const { 
    CHANGE_THEME_DARK,
    CHANGE_THEME_LIGHT,
    CHANGE_DISPLAY
} = themeTypes;


export const changeThemeDark = () => dispatch => {
    dispatch({
        type: CHANGE_THEME_DARK
    })
    localStorage.removeItem('themeLight')
    localStorage.setItem('themeDark', true)
    document.documentElement.setAttribute('theme', 'dark');
}

export const changeThemeLight = () => dispatch => {
    dispatch({
        type: CHANGE_THEME_LIGHT
    })
    localStorage.removeItem('themeDark')
    localStorage.setItem('themeLight', true)
    document.documentElement.setAttribute('theme', 'light');
}

export const changeDisplay = () => dispatch => {
    dispatch({
        type: CHANGE_DISPLAY
    })
}