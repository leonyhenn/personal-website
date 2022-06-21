import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_gray } from "../Utilities/Colors.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { UofT_blue } from "../Utilities/Colors.js"

const Text = styled.a`
  color:${theme_blue};
  border-bottom:0.5vh solid ${theme_yellow};
  font-size:4vh;
  font-family:Arial;
  font-weight:800;
  margin:0;
  padding:0;
  &:hover{
    cursor: pointer;
    color:white;
    border-bottom:0.5vh solid white;
    background-color:${UofT_blue};
    
  }
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
  text-decoration:none;
`

const Wrapper = styled.div`
  padding-top:10px;
  padding-bottom:15px;
  padding-left:30px;
  padding-right:30px;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-right:auto;
  margin-left:8vw;
  &:hover{
    cursor: pointer;
    color:white;
    background-color:${UofT_blue};
  }
  &:hover ${Text}{
    cursor: pointer;
    color:white;
    border-bottom:0.5vh solid white;
    background-color:${UofT_blue};
    
  }
`

class Education extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Wrapper><Text href="https://web.cs.toronto.edu/" target="_blank">{"Bachelor, Computer Science @ University of Toronto St.George '14"}</Text></Wrapper>
      
    )
  
  }
  
}

export default Education;
