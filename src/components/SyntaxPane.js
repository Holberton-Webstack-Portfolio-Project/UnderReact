import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SyntaxPane() {
  const codeString = `
  import React from "react";
  import uniquePropHOC from "./lib/unique-prop-hoc";
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  class Expire extends React.Component {
      constructor(props) {
          super(props);
          this.state = { component: props.children }
      }
      componentDidMount() {
          setTimeout(() => {
              this.setState({
                  component: null
              });
          }, this.props.time || this.props.seconds * 1000);
      }
      render() {
          return this.state.component;
      }
  }
  
  export default uniquePropHOC(["time", "seconds"])(Expire);
  `;
  return (
    <SyntaxHighlighter 
      language="jsx" 
      style={materialDark} 
      children={codeString}
      lineProps={{style: {paddingBottom: 0}}}
      wrapLongLines={true}
      >
    </SyntaxHighlighter>
  );
}
