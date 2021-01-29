import React from 'react';
import SyntaxPane from './SyntaxPane';
import PropTypes from 'prop-types';

/**
 * A content pane containing text, links, or code
 */
class ContentPane extends React.Component {

  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
  }

  render() {
    let { content } = this.props;
    const widgets = content.map((x, ind) => {
      if (x === "") {
        return ("");
      }
      if (x.indexOf && (x.indexOf('http') === 0)) {
        return (
          <React.Fragment>
            <p>
              <a className="underline dark:text-teal-2020 text-gray-2020" href={x}>{x}</a>
            </p>
            <br/>
          </React.Fragment>
        );
      }
      if (ind % 2 === 0) {
        return (
          <React.Fragment>
            <p className="dark:text-white">{x}</p>
            <br/>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <SyntaxPane content={x} />
          <br/>
        </React.Fragment>
      );
    });

    return (
      <div class="p-1 mb-0 w-full lg:w-1/3 lg:h-80">
        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded lg:overflow-y-auto">
          {widgets}
        </div>
      </div>
    );
  }
}

ContentPane.propTypes = {
  /** text, links, and code content for the content pane to display */
  content: PropTypes.string
}

export default ContentPane;
