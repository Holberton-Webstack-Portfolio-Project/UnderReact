import React from 'react';
import Melty from './Melty';
import ContentPane from './ContentPane';
import { getTopic } from '../utils/utils';

const topics = {};

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
    const children = topic.children || [];
    children.map(x => addTopic(x));
    this.state = {selections: [topic.id], content: addTopic(children[0]).content};

    this.handleChange = this.handleChange.bind(this);
    this.render = this.render.bind(this);
  }

  handleChange(e) {

    const index = parseInt(e.target.attributes.id.nodeValue.substring(8));

    let content = addTopic(e.target.value).content;
    const children = addTopic(e.target.value).children;
    if (!content && children) {
      content = addTopic(children[0]).content
    }

    this.setState((state, props) => {
      const newList = [...state.selections].filter((x, ind) => ind <= index);
      if (e.target.value !== 'default') {
        const hasChildren = addTopic(e.target.value).children !== undefined;
        if (hasChildren) {
          newList.push(e.target.value);
        }
      }

      let newCont = "Please make a selection to see info."
      if (content) {
        newCont = content
      }
      return {selections: newList, content: newCont}
    });

    e.preventDefault();
  }

  render() {
    const selections = this.state.selections;
    const content = this.state.content;
    const menu = selections.map((selection, ind) => {
      let children = addTopic(selection).children;
      if (children === undefined) {
        children = [];
      }

      return (
        <select className="flex flex-col appearance-none p-2 m-2 rounded-lg w-full lg:w-56" id={"dropdown"+ind.toString()} onChange={this.handleChange}>
          {children.map((x, ind) => {
            return (<option key={ind + 1} value={x}>{addTopic(x).title}</option>);
          })}
        </select>);
      });
    return (
      <div class="flex flex-col lg:flex-row flex-wrap justify-center m-1 border-black border-2">

        <div class="p-1 mb-6 lg:w-1/3 lg:mb-0 h-80 border-black border-2">
          <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded overflow-y-auto">
            <h3 className="dark:text-white">I would like to:</h3>
            <form>
              {menu}
            </form>
          </div>
        </div>
        <Melty text={content}/>
        <ContentPane content={content} />
      </div>
    );
  }
}


export default DropdownWidget
