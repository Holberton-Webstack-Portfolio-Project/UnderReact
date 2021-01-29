import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

/**
 * A content pane specifically for displaying code samples
 */
function SyntaxPane({ content }) {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={materialDark}
      children={content}
      lineProps={{style: {paddingBottom: 0}}}
      wrapLongLines={true}
    />
  );
}

SyntaxPane.propTypes = {
  /** The code content for the syntax pane */
  content: PropTypes.string
}

export default SyntaxPane;
