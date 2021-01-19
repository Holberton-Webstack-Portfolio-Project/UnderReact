import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as MeltyBubble } from '../assets/melty_speech.svg';
import './Melty.css';



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
        if (this.props.text !== this.state.text) {
            this.setState({animation: "bubble", text: this.props.text});
        }
        return (
            <div className="speechContainer flex items-center h-48 w-52">
                <div className={`${this.state.animation} p-1`} onAnimationEnd={this.animationEnd}>
                    <MeltyBubble />
                </div>
                <div className="w-44 h-28 p-1 overflow-auto" style={{position: "absolute", top: 18, left: 14}}>
                    <p className="bubbleText break-words">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default MeltySpeech;
