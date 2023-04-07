import React,{ Component } from 'react';
import styled from 'styled-components'
import { handleMasteryColorLevel } from '../Utilities/utilities.js'

const Wrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-right:auto;
  margin-left:8vw;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Text = styled.p`
  color: ${({ props }) => props.focus == props.mastery_level + "-profiency"?handleMasteryColorLevel(props.mastery_level):"white"};
  background-color:${({ props }) => props.focus == props.mastery_level + "-profiency"?"white":handleMasteryColorLevel(props.mastery_level)};
  border-bottom:${({ props }) => props.focus == props.mastery_level + "-profiency"?"4px solid "+ handleMasteryColorLevel(props.mastery_level):"4px solid " + handleMasteryColorLevel(props.mastery_level)};
  font-weight:900;
  font-size:${({ props }) => handleFontSize(props.mastery_level)};
  margin:10px;
  padding:20px;
  padding-bottom:5px;
  padding-top:5px;
  font-family:Arial;
  &:hover{
    color:${({ props }) => handleMasteryColorLevel(props.mastery_level)};
    background-color:white;
  }
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
`

function handleFontSize(mastery_level){
  switch(mastery_level){
    case "proficient":
      return "3vh";
    case "intermediate":
      return "3vh";
    case "basic":
      return "3vh"
  }

}




class SkillProficiency extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Wrapper>
        
          <Text props={{mastery_level:"proficient",focus:this.props.focus}} onMouseOver={()=>this.props.setFocus("proficient")} onMouseOut={()=>this.props.setFocus(null)}>{"Profient"}</Text>
        
        
          <Text props={{mastery_level:"intermediate",focus:this.props.focus}} onMouseOver={()=>this.props.setFocus("intermediate")} onMouseOut={()=>this.props.setFocus(null)}>{"Intermediate"}</Text>
        
        
          <Text props={{mastery_level:"basic",focus:this.props.focus}} onMouseOver={()=>this.props.setFocus("basic")} onMouseOut={()=>this.props.setFocus(null)}>{"Basic"}</Text>
        
      </Wrapper>
    )
  }
  
}

export default SkillProficiency;

//usage example
// <BigImage url={global.s3 + "big-image.jpg"}/>