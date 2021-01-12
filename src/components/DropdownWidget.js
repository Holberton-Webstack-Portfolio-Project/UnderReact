import React from 'react';
import Melty from './Melty.js';
import { getTopic } from '../utils/utils';

const topics = {};
let current_topic = undefined;

function addTopic(topic_id) {
  if (topics[topic_id]) {
    return topics[topic_id];
  }
  const topic = getTopic(topic_id);
  topics[topic.id] = topic;
  return topic
}

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      const topic = addTopic(props.selection);
      this.children = topic.children || [];
      this.children.map(x => addTopic(x));
      this.state = {children: this.children, next: undefined};
      if (topic.content) {
        current_topic = topic;
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      console.log(e)
      if (e.target.value !== 'default') {
        console.log('settingState')
        this.setState({next: e.target.value});
        console.log(this.state)
      } else {
        this.setState({next: undefined});
      }
      e.preventDefault();
    }

    render() {
      const menu = (
        <select onChange={this.handleChange}>
          <option key="0" selected value="default">Choose an option</option>
          {this.state.children.map((x, ind) => {
            return (<option key={ind + 1} value={x}>{topics[x].title}</option>);
          })}
        </select>
      );
      return (
        <React.Fragment>
            {(this.state.children.length !== 0) ? menu : ''}
            {(this.state.next) ? <Dropdown selection={this.state.next} /> : ''}
        </React.Fragment>
      );
    }
}

class DropdownWidget extends React.Component {
  constructor(props) {
    super(props);
    this.firstTopic = addTopic('');
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <form>
          <Dropdown selection={this.firstTopic.id} />
        </form>
      </div>
      <div>
        <Melty />
      </div>
      <div>
        <p>{current_topic}</p>
      </div>
      </React.Fragment>
    );
  }
}

export default DropdownWidget
