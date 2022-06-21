import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
const Text = styled.p`
  color:${theme_blue};
  border-bottom:0.5vh solid ${theme_yellow};
  font-size:5vh;
  font-family:Arial;
  font-weight:800;
  margin-right:auto;
  margin-left:4vw;
  opacity: 1;
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
`

class Title1 extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Text id={`button${this.props.text}`}>{this.props.text}</Text>
    )
  }
}

export default Title1;

//usage example
// <Title1 text="Skills"/>