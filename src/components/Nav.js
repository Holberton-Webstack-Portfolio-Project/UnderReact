import React from 'react';
import logo from '../assets/snowflake_logo_color.svg';
/* import logo_gray from '../assets/snowflake_logo_gray.svg'; */
import DarkModeButton from './DarkModeButton';

export default function Nav() {
/*     const darkMode =  window.document.documentElement.classList.contains("dark"); */
    return (
        <nav className="
        fixed
        top-0
        bg-r_black-2020
        text-teal-2020
        w-full
        h-24
        p-5
        flex items-center
        justify-between
        transition duration-450
        ">
          <img src={logo} className="App-logo w-auto h-12 my-auto" alt="logo" />
          <h1 className="m-auto text-3xl">UnderReact</h1>
          <DarkModeButton />
        </nav>
    )
}
