import React from 'react';
import Melty from './Melty';
import ContentPane from './ContentPane';
import { getTopic } from '../utils/utils';

/** a local cache of topic objects */
const topics = {};

/**
 * Fetches a topic if not in the local cache, puts it in the cache, and returns it.
 */
function fetchTopic(topic_id) {
  if (topics[topic_id]) {
    return topics[topic_id];
  }
  const topic = getTopic(topic_id);
  topics[topic.id] = topic;
  return topic
}

/**
 * A dynamically changing decision tree in the form of a list of dropdowns.
 * The content generated as a result of decisions chosen is passed into the
 * ContentPane and Melty children in the render method.
 */
class DropdownWidget extends React.Component {
  constructor(props) {
    super(props);
    const topic = fetchTopic('');
    const children = topic.children || [];
    children.map(x => fetchTopic(x));
    this.state = {selections: [topic.id], content: fetchTopic(children[0]).content, meltySays: "Choose a series of topics to see information about how to do stuff."};

    this.handleChange = this.handleChange.bind(this);
    this.render = this.render.bind(this);
  }

  handleChange(e, index) {

    let content = fetchTopic(e.target.value).content;
    let melty_says = fetchTopic(e.target.value).melty_says;
    const children = fetchTopic(e.target.value).children;
    if (!content && children) {
      content = fetchTopic(children[0]).content
    }
    if (!melty_says && children) {
      melty_says = fetchTopic(children[0]).melty_says
    }

    this.setState((state, props) => {
      const newList = [...state.selections].filter((x, ind) => ind <= index);
      if (e.target.value !== 'default') {
        const hasChildren = fetchTopic(e.target.value).children !== undefined;
        if (hasChildren) {
          newList.push(e.target.value);
        }
      }

      let newCont = "Please make a selection to see info."
      if (content) {
        newCont = content
      }
      return {selections: newList, content: newCont, meltySays: melty_says}
    });

    e.preventDefault();
  }

  render() {
    const selections = this.state.selections;
    const content = this.state.content;
    const meltySays = this.state.meltySays;
    const menu = selections.map((selection, ind) => {
      let children = fetchTopic(selection).children;
      if (children === undefined) {
        children = [];
      }

      return (
        <select id="dropdown-bar" key={ind + 1} className="flex flex-col appearance-none p-2 m-2 mx-auto rounded-lg w-full lg:w-56 border-gray-2020 border-2" onChange={(x) => this.handleChange(x, ind)}>
          {children.map((x, ind) => {
            return (<option key={ind + 1} value={x}>{fetchTopic(x).title}</option>);
          })}
        </select>);
      });
    return (
      <div className="flex flex-col lg:flex-row flex-wrap justify-center m-1">

        <div className="p-1 mb-6 w-full lg:w-1/3 lg:mb-0 h-80">
          <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded overflow-y-auto">
            <label for="dropdown-bar">
              <h2 className="dark:text-white">I would like to:</h2>
              </label>
            <form>
              {menu}
            </form>
          </div>
        </div>
        <Melty text={meltySays}/>
        <ContentPane content={content} />
      </div>
    );
  }
}

export default DropdownWidget
