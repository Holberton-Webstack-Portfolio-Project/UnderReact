import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

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
