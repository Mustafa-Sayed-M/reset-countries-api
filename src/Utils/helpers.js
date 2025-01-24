export const getThemeLocalStorage = () => {
    return window.localStorage.getItem('theme') || 'light';
};