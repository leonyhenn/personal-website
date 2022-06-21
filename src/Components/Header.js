import React,{ Component } from 'react';
import styled from 'styled-components'
import { jumpTo } from '../Utilities/utilities.js'
import ScrollTo from "react-scroll-into-view";
import { theme_gray } from "../Utilities/Colors.js"
import { randomThemeColor } from "../Utilities/utilities.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
const Text = styled.p`
  color:${theme_blue};
  border-bottom:0.5vh solid ${theme_yellow};
  font-size:2vh;
  font-family:Arial;
  font-weight:800;
  margin-bottom:2vh;
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
`

const Wrapper = styled.div`
  width:95%;
  padding:0px;
  margin:0px;
  display:flex;
  flex:1;
  flex-direction:row;
  justify-content:flex-start;
  alignItems:center;
`

const ButtonContainer = styled.div`
  margin-left: auto;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  alignItems:center;
`

const Button = styled.p`
  margin-left:40px;
  color:${theme_gray};
  font-size:2vh;
  font-family:Arial;
  font-weight:800;
  margin-bottom:2vh;
  opacity: 0.7;
  &:hover{
    opacity: 1;
    cursor: pointer;
    color:${theme_blue};
    border-bottom:0.5vh solid ${theme_yellow};
    margin-bottom:0vh;
  }
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
  transition:all .3s ease;
`

class Header extends React.Component {
  constructor(props){
    super(props)
    this.buttons = [{"text":"Skills"},
                    {"text":"Education"},
                    {"text":"Projects"},
                    {"text":"Experience"}]
    this.intro_text = "To life, to love, and to those summer days." 
    this.button_click = this.button_click.bind(this)
  }
  button_click(id_tag){
    jumpTo(id_tag)
  }
  render(){
    const display_buttons = this.buttons.map(button => <ScrollTo selector={`#button${button.text}`} smooth={true}><Button>{button.text}</Button></ScrollTo>);
    return(
      <Wrapper><ScrollTo selector={`#none`} smooth={true}><Text>{this.intro_text}</Text></ScrollTo> <ButtonContainer>{display_buttons}</ButtonContainer></Wrapper>
    )
  }
  
}

export default Header;