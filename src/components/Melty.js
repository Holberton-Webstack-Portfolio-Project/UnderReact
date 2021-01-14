import React from 'react';
import { ReactComponent as MeltyIcon } from '../assets/melty.svg';
import './Melty.css';

export default function Melty (props) {
    return (
        <div class="p-1 mb-4 w-auto lg:mb-0 flex items-center h-32 w-32">
          <MeltyIcon />
        </div>
    )
}
