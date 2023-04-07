import React from 'react';
import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import ScrollTo from "react-scroll-into-view";
import { jumpTo } from '../Utilities/utilities.js'
import { getIndent } from '../Utilities/utilities.js'
import { IntroEmphasisDEVColorDecider } from '../Utilities/utilities.js'


const TextColor = styled.a`
  font-family:Arial;
  font-size:2vh;
  color:${({ obj }) => IntroEmphasisDEVColorDecider(obj,"black")};
  
  &:hover{
    color:black;
    
  }
  font-weight:600;
  margin:0;
  padding:0;
  margin-top:0.5vh;
  margin-bottom:0.5vh;
  transition:all .3s ease;
  word-wrap: break-word;
`

const Item = styled.p`
  font-family:Arial;
  font-size:2vh;
  color:#a0a0a0;
  
  &:hover{
    color:black;
  }
  &:hover ${TextColor}{
    color:black;
  }
  font-weight:600;
  margin:0;
  padding:0;
  margin-top:0.5vh;
  margin-bottom:0.5vh;
  transition:all .3s ease;
  word-wrap: break-word;
  width:12vw;
`


const Wrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  transition:all .3s ease;
  margin:0px;
  padding:0px;
  margin-top:10px;
  margin-bottom:10px;
  width:80vw;
  align-self:center;
  position:absolute; 
  left:2vw; 
  top:10vh; 
`

const WrapperIn = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  transition:all .3s ease;
  margin:0px;
  padding:0px;
  margin-left:${getIndent(2)};
  &:hover{
    cursor:pointer
  };
`

const Menu = styled.p`
  font-family:times-new-roman;
  font-size:3vh;
  color:black;
  font-weight:600;
  margin:0;
  padding:0;
  margin-left:${getIndent(2)};
  margin-top:1vh;
  margin-bottom:1vh;
`

const Icon = styled.img`
  height:2.5vh;
  width:2.5vh;
  border-radius:5px;
  margin-right:10px;
`
const Titles = {
  // "HR":["Tech Stack of this App","My contribution to React Native Community","App Quick Recap"],
  "HR":[{icon:"light-bulb.png",text:"General Introduction"},{icon:"stackoverflow.png",text:"Tech Stack of this App"},{icon:"github.png",text:"My contribution to React Native Community"},{icon:"youtube.png",text:"App Quick Recap"}],
  "Dev":[{icon:"light-bulb.png",text:"General Introduction"},{icon:"stackoverflow.png",text:"Tech Stack of this App"},{icon:"youtube.png",text:"App Detailed Recap Frontend",special1:" (React",special2:" Native) ",type1:"react-native",type2:"react-native"},{icon:"youtube.png",text:"App Detailed Recap Backend",special1:" (Python ",special2:" Flask) ",type1:"python-front",type2:"python-back"},{icon:"opt.png",text:"My Optimization Work Recap"},{icon:"github.png",text:"All Packages"}],
  "UX Designer":[{icon:"light-bulb.png",text:"General Introduction"},{icon:"ux.png",text:"UX Design Highlights"},{icon:"ui.png",text:"UI Design Recap"}]
}

function AppIntroMenu({ obj }){
    return(
      <Wrapper>
      <Menu>Menu</Menu>
      {Titles[obj].map(title =><WrapperIn><Icon src={global.s3+title.icon}/><Item onClick={()=>{jumpTo("introTitle"+title.text.replace(/\s/g, ""))}}>{title.text}{title.special1?<TextColor obj={title.type1}>{title.special1}</TextColor>:null}{title.special2?<TextColor obj={title.type2}>{title.special2}</TextColor>:null}</Item></WrapperIn>)}
      </Wrapper>
    )
    

}

export default AppIntroMenu;