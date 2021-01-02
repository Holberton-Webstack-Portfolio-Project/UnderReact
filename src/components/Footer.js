import React from 'react';

import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer () {
    return (
        <div className="
        fixed 
        bottom-0 
        w-full p-5 
        bg-teal-500
       dark:bg-black
        dark:text-white
        transition duration-450
        ">
          <p>{`© Mighty Ducks ${getFullYear()}`}</p>
        </div>
    )
}