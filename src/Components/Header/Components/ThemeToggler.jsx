import React, { useState } from 'react';
import { getThemeLocalStorage } from '../../../Utils/helpers';

function ThemeToggler() {
    // Theme State:
    const [theme, setTheme] = useState('light');

    // Check if found theme value in local storage:
    React.useEffect(() => {
        setTheme(getThemeLocalStorage());
    }, []);

    // Handle Click:
    const handleClick = () => {
        const appEle = document.querySelector('.App');
        appEle.classList.toggle('dark');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <button
            title=''
            type='button'
            className='flex items-center gap-1'
            onClick={handleClick}
            aria-label='Theme Toggler'
        >
            <span className='relative block w-6 h-6'>
                <i className={`fa-regular fa-moon fa-fw scale-0 ${theme === 'light' && 'scale-100'} transition-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></i>
                <i className={`fa-regular fa-sun fa-fw scale-0 ${theme === 'dark' && 'scale-100'} transition-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></i>
            </span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
        </button>
    )
}

export default ThemeToggler;