import React from 'react';
import MeltySpeech from './MeltySpeech';
import { ReactComponent as MeltyIcon } from '../assets/melty.svg';
import './Melty.css';

export default function Melty (props) {
    return (
        <div className="mb-4 w-auto lg:mb-0 flex flex-col items-center h-128 w-96">
          <MeltySpeech />
          <div className="border-black border-2 h-32">
            <MeltyIcon />
          </div>
        </div>
    )
}
