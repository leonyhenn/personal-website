import React from 'react';
import styled from 'styled-components'
import { handleMasteryColorLevel } from '../Utilities/utilities.js'

function handleFontSize(mastery_level){
  switch(mastery_level){
    case "proficient":
      return "2vh";
    case "intermediate":
      return "2vh";
    case "basic":
      return "2vh"
  }
}

function handleFocusToColor(focus,mastery_level){
  switch(true){
    case focus == null:
      return {"color":handleMasteryColorLevel(mastery_level),"background-color":"white"}
    case focus == mastery_level:
      return {"color":"white","background-color":handleMasteryColorLevel(mastery_level)}
    case focus != mastery_level:
      return {"color":handleMasteryColorLevel(mastery_level),"background-color":"white"}
  }
}
// color: ${({ props }) => handleFocusToColor(props.focus,props.mastery_level)["color"]};
//   background-color: ${({ props }) => handleFocusToColor(props.focus,props.mastery_level)["background-color"]};
const Text = styled.p`
  color: ${({ props }) => handleFocusToColor(props.focus,props.mastery_level)["color"]};
  background-color: ${({ props }) => handleFocusToColor(props.focus,props.mastery_level)["background-color"]};
  font-weight:900;
  font-size:${({ props }) => handleFontSize(props.mastery_level)};;
  margin:0.5vh;
  margin-left:0.5vw;
  margin-right:1.5vw;
  font-family:Arial;
  &:hover{
    background-color:${({ props }) => handleMasteryColorLevel(props.mastery_level)};
    color:white;
  }
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
`


class Skill extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Text props={this.props} onMouseOver={()=>this.props.setFocus(this.props.mastery_level+"-profiency")} onMouseOut={()=>this.props.setFocus(null)}>{this.props.name}</Text>
    )
  }
}

export default Skill;

// usage example
// <Skill props={{mastery_level:"basic",name:"Python",logo_url:global.s3 + "python_logo.png"}}/>