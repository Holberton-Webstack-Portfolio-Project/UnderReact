import React from 'react';
import { ReactComponent as MeltyBubble } from '../assets/melty_speech.svg';
import './Melty.css';

export default function MeltySpeech (props) {
    return (
        <div className="border-black border-2 flex items-center h-48 w-60">
          <MeltyBubble />
          <p></p>
        </div>
    )
}
