import React from 'react';

class ContentPane extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  render() {

    return (
      <div class="p-1 mb-4 lg:w-1/3 lg:mb-0 border-black border-2">
        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
          <p className="dark:text-white">{this.props.content}</p>
        </div>
      </div>
    );
  }
}


export default ContentPane;
