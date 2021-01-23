import React from 'react';
import SyntaxPane from './SyntaxPane';

class ContentPane extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  render() {

    return (
      <div class="p-1 mb-0 lg:w-1/3 lg:h-80">
        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded lg:overflow-y-auto">
          <p className="dark:text-white">{this.props.content}</p>
          <SyntaxPane />
        </div>
      </div>
    );
  }
}


export default ContentPane;
