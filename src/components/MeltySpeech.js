import React from 'react';
import { ReactComponent as MeltyBubble } from '../assets/melty_speech.svg';
import '../styles/Melty.css';
import PropTypes from 'prop-types';

/**
 * A speech bubble that bounces when new text is given to be displayed.
 */
class MeltySpeech extends React.Component{

    constructor(props) {
        super(props);

        this.state = {animation: "bubble", text: props.text}

        this.render = this.render.bind(this);
        this.animationEnd = this.animationEnd.bind(this);
    }

    animationEnd() {
        this.setState({animation: ""})
    }

    render() {
        let { text } = this.props;
        if (text !== this.state.text) {
            this.setState({animation: "bubble", text: text});
        }
        return (
            <div className="speechContainer flex items-center h-48 w-52">
                <div className={`${this.state.animation} p-1`} onAnimationEnd={this.animationEnd}>
                    <MeltyBubble />
                </div>
                <div className="w-44 h-28 p-1 overflow-auto" style={{position: "absolute", top: 18, left: 14}}>
                    <p className="bubbleText break-words">{text}</p>
                </div>
            </div>
        )
    }
}

MeltySpeech.propTypes = {
  /** The text for Melty to speak */
  text: PropTypes.string
}

export default MeltySpeech;
