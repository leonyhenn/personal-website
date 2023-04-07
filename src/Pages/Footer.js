import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_gray } from "../Utilities/Colors.js"

const Wrapper = styled.div`
  padding-top:100px;
  padding-bottom:20px;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  align-self:center;
  border-top:1px solid ${theme_gray};
  width:100%;
  padding-top:20px
`
const Text = styled.p`
  color:${theme_gray};
  font-size:1.5vh;
  margin:5px;
  padding:0;
  font-family:Arial;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align:left;
  transition:all .3s ease;
`
class Education extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Wrapper>
        <Text>{"@ 2020 Heng Ye"}</Text>
        <Text>{"All Rights Reserved"}</Text>
      </Wrapper>
      
    )
  
  }
  
}

export default Education;
