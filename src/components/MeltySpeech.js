import React from 'react';
import { ReactComponent as MeltyBubble } from '../assets/melty_speech.svg';
import './Melty.css';

export default function MeltySpeech (props) {
    return (
        <div className="speechContainer border-black border-2 flex items-center h-48 w-52">
          <div className="bubble p-1" >
            <MeltyBubble />
          </div>
          <div className="border-black border-2 w-40 h-28 p-1 overflow-auto" style={{position: "absolute", top: 18, left: 22}}>
            <p className="bubbleText">asdfa sdfasdf asdf sdfs asdfa sdfasd fasdfasdfa sdfas dfasd asdfasdfas asdf sdafas sfasdff</p>
          </div>
        </div>
    )
}
