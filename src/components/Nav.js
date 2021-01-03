import React from 'react';
import logo from '../assets/snowflake_logo_color.svg';
import logo_gray from '../assets/snowflake_logo_gray.svg';
import DarkModeButton from './DarkModeButton';

export default function Nav() {
/*     const darkMode =  window.document.documentElement.classList.contains("dark"); */
    return (
        <div className="
        fixed
        top-0
        bg-teal-2020
        dark:bg-gray-2020
        text-gray-2020
        dark:text-teal-2020
        w-full
        h-24
        p-5
        transition duration-450
        grid
        grid-cols-3
        ">
          <div>
          <img src={logo} className="App-logo w-auto h-12 my-auto" alt="logo" />
          </div>
          <h1 className="m-auto text-3xl text-center">UnderReact</h1>
          <div className="ml-auto my-auto">
            <DarkModeButton />
          </div>
        </div>
    )
}
