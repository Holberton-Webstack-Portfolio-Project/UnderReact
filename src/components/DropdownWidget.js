import React from 'react';
import Melty from './Melty.js';
import { getTopic } from '../utils/utils';

const topics = {};
let current_content = undefined;

function addTopic(topic_id) {
  if (topics[topic_id]) {
    return topics[topic_id];
  }
  const topic = getTopic(topic_id);
  topics[topic.id] = topic;
  return topic
}

class DropdownWidget extends React.Component {
  constructor(props) {
    super(props);
    const topic = addTopic('');
    this.children = topic.children || [];
    this.children.map(x => addTopic(x));
    this.state = {selections: [topic.id]};

    this.handleChange = this.handleChange.bind(this);
    this.render = this.render.bind(this);
  }

  handleChange(e) {

    const index = parseInt(e.target.attributes.id.nodeValue.substring(8));

    this.setState((state, props) => {
      const newList = [...state.selections].filter((x, ind) => ind <= index);
      if (e.target.value !== 'default') {
        const hasChildren = addTopic(e.target.value).children !== undefined;
        if (hasChildren) {
          newList.push(e.target.value);
        }
      }
      return {selections: newList}
    });

    e.preventDefault();
  }

  render() {
    const selections = this.state.selections;
    const content = addTopic(selections[selections.length - 1]).content;
    const menu = selections.map((selection, ind) => {
      let children = addTopic(selection).children;
      if (children === undefined) {
        children = [];
      }

      return (
        <select id={"dropdown"+ind.toString()} onChange={this.handleChange}>
          <option key="0" selected value="default">Choose an option</option>
          {children.map((x, ind) => {
            return (<option key={ind + 1} value={x}>{addTopic(x).title}</option>);
          })}
        </select>);
      });
    return (
      <React.Fragment>
        <div>
          <form>
            {menu}
          </form>
        </div>
        <div>
          <Melty />
        </div>
        <div>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  }
}


export default DropdownWidget
