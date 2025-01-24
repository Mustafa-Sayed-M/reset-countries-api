import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from './Components/ThemeToggler';

function Header() {
    return (
        <header className='sticky top-0 z-50 shadow-md bg-bg-light-color-1 dark:bg-bg-dark-color-2 transition-colors'>
            <div className='container flex items-center justify-between min-h-[60px]'>
                {/* Logo */}
                <Link to={'/'} className='font-bold text-xl'>Where in the world?</Link>
                {/* Theme Toggler */}
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header;