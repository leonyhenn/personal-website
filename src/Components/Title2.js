import React,{ Component } from 'react';
import styled from 'styled-components'

const Text = styled.p`
  color:#A0A0A0;
  font-size:2vh;
  font-family:Arial;
  font-weight:600;
  padding-bottom:10px;
  margin-bottom:10px;
  white-space:pre;
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
  border-bottom:1px solid #A0A0A0;
`

class Title1 extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Text>{this.props.text + "                    "}</Text>
    )
  
  }
  
}

export default Title1;

//usage example
// <Title2 text="Skills"/>