import React from 'react';
import MeltySpeech from './MeltySpeech';
import { ReactComponent as MeltyIcon } from '../assets/melty.svg';
import '../styles/Melty.css';
import PropTypes from 'prop-types';

/**
 * Your friendly neighborhood css-animated svg snowman (complete with text bubble)
 */
function Melty ({ text }) {
    return (
        <div className="mb-4 w-auto lg:mb-0 flex flex-col items-center h-128 w-96">
          <MeltySpeech text={text}/>
          <div className="h-32 w-52">
            <MeltyIcon />
          </div>
        </div>
    )
}

Melty.propTypes = {
  /** Text for Melty to say */
  text: PropTypes.string
}

export default Melty;
