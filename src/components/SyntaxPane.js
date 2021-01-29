import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * A content pane specifically for displaying code samples
 */
export default function SyntaxPane(props) {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={materialDark}
      children={props.content}
      lineProps={{style: {paddingBottom: 0}}}
      wrapLongLines={true}
    />
  );
}
