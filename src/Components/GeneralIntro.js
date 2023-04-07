import React from 'react';
import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { theme_gray } from "../Utilities/Colors.js"
import DividerLine from "./DividerLine.js"
import { getIndent } from '../Utilities/utilities.js'
import { IntroEmphasisDEVColorDecider } from '../Utilities/utilities.js'
import IntroTitle1 from './IntroTitle1.js'
import IntroTitle2 from './IntroTitle2.js'
import IntroTitleWrapper from './IntroTitleWrapper.js'
import IntroTitleIcon from './IntroTitleIcon.js'
import IntroNormal from './IntroNormal.js'
import IntroEmphasis from './IntroEmphasis.js'
import { jumpTo } from '../Utilities/utilities.js'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ICON_NAME } from "react-icons/gi";

const IntroEmphasisHR = styled.pre`
  font-family:times-new-roman;
  font-size:1.5vh;
  font-weight:400;
  margin:0;
  padding:0;
  margin-bottom:0.5vh;
  color:black;
  border-left:${({ left }) => left?"3px solid " + theme_blue:null};
  white-space:pre;
  border-bottom:${({ copy }) => copy?"3px solid " + theme_yellow:"3px solid transparent"};
  z-index:10;
  &:hover{
    cursor:${({ copy }) => copy?"pointer":"auto"};
    background-color:${({ copy }) => copy?theme_yellow:"transparent"};
    color:${({ copy }) => copy?"white":"black"};
    border-bottom:null;
  };
`


const IntroEmphasisDEV = styled.pre`
  font-family:Arial;
  font-size:3vh;
  font-weight:600;
  margin:0;
  padding:0;
  margin-top:4vh;
  margin-bottom:4vh;
  color:${({ obj }) => IntroEmphasisDEVColorDecider(obj,"black")};
  white-space:pre;
`

const IntroNormalColor = styled.a`
  font-family:Arial;
  font-size:1.5vh;
  color:${({ obj }) => IntroEmphasisDEVColorDecider(obj,"black")};
  font-weight:600;
  margin:0;
  padding:0;
  margin-bottom:1.5vh;

`

const Wrapper = styled.div`
  width:80vw;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  align-self:center;
  background-color:white;
  padding-top:2vh;
  padding-bottom:2vh;
`

const Logo = styled.img`
  margin-top:4vh;
  margin-bottom:4vh;
  object-fit:contain;
  margin-left:5px;
  margin-right:5px;

`

const Link = styled.a`
  font-family:Arial;
  font-size:1.5vh;
  font-weight:400;
  margin:0;
  padding:0;
  margin-bottom:1.5vh;
  color:#0645AD;
  text-decoration:underline
  &:hover{
    cursor:pointer
  };
  z-index: 100;
  position: relative;
`

function GeneralIntroduction({ role }){
  var foward =  <div><IntroTitleWrapper><IntroEmphasisHR left>{"  Please reference this website in your report when you forward it,"}</IntroEmphasisHR></IntroTitleWrapper>
                   <IntroTitleWrapper><IntroEmphasisHR left>{"  It is a great supplementary metarial to your notes about me!"}</IntroEmphasisHR></IntroTitleWrapper>
                   <IntroTitleWrapper><IntroEmphasisHR left>{"  "}</IntroEmphasisHR><a style={{whiteSpace:"pre"}}>{" 👉  "}</a><CopyToClipboard text={"https://hengye.firebaseapp.com/MASKOFF"}><IntroEmphasisHR copy>Click here</IntroEmphasisHR></CopyToClipboard><a style={{whiteSpace:"pre"}}>{"  👈 "}</a><IntroEmphasisHR>{" to copy the website address!"}</IntroEmphasisHR></IntroTitleWrapper></div>
  if(role == "HR"){
    var addInfo =  <IntroTitleWrapper><IntroEmphasisDEV>{"A   "}</IntroEmphasisDEV><IntroEmphasisDEV obj="react-native">{"React Native"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"react-native.png")} height="30" width="30"/><IntroEmphasisDEV>{"  ×  "}</IntroEmphasisDEV><IntroEmphasisDEV obj="python-front">{"Python"}</IntroEmphasisDEV><IntroEmphasisDEV obj="python-back">{" Flask"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"python.png")} height="30" width="30"/><IntroEmphasisDEV>{"  ×  "}</IntroEmphasisDEV><IntroEmphasisDEV obj="aws">{"Amazon Web Service"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"aws.png")} height="30" width="30"/><IntroEmphasisDEV>{"  project"}</IntroEmphasisDEV></IntroTitleWrapper>
  }else if(role == "Dev"){
    var addInfo =  <IntroTitleWrapper><IntroEmphasisDEV>{"A   "}</IntroEmphasisDEV><IntroEmphasisDEV obj="react-native">{"React Native"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"react-native.png")} height="30" width="30"/><IntroEmphasisDEV>{"  ×  "}</IntroEmphasisDEV><IntroEmphasisDEV obj="python-front">{"Python"}</IntroEmphasisDEV><IntroEmphasisDEV obj="python-back">{" Flask"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"python.png")} height="30" width="30"/><IntroEmphasisDEV>{"  ×  "}</IntroEmphasisDEV><IntroEmphasisDEV obj="aws">{"Amazon Web Service"}</IntroEmphasisDEV><Logo src={require("../assets/images/"+"aws.png")} height="30" width="30"/><IntroEmphasisDEV>{"  project"}</IntroEmphasisDEV></IntroTitleWrapper>
  }
  
  return(
    <Wrapper>
      {addInfo}
      {foward}
      <IntroTitleWrapper id="introTitleGeneralIntroduction"><IntroTitle1>General Introdution</IntroTitle1><IntroTitleIcon src={global.s3+"light-bulb.png"}/></IntroTitleWrapper>
      <IntroNormal>MASKOFF was a startup project during my time at Yihe Tech, it was supposed to be "the reddit with a map for China". I dedicated almost 16 month into it, but unfortunately due to the tighting internet regulation in Mainland China, my partner bounced and funds were cut, right after I complete the entire project and before getting on the plane to China. </IntroNormal>
      <IntroNormal>This application is commercial-ready, means it is a butter-smooth App, and it also has a globally scaled server runs both on <IntroNormalColor obj="aws">AWS Beijing</IntroNormalColor>, <IntroNormalColor obj="aws">AWS US</IntroNormalColor>, and <IntroNormalColor obj="aws">AWS Europe</IntroNormalColor>.</IntroNormal>
      <IntroNormal>The entire project is about <IntroEmphasis>~42,000</IntroEmphasis> lines of code, <IntroEmphasis>~32,000</IntroEmphasis> lines of <IntroNormalColor obj="react-native">React Native</IntroNormalColor> frontend and <IntroEmphasis>~10,000</IntroEmphasis> lines of <IntroNormalColor obj="python-front">{"Python "}</IntroNormalColor><IntroNormalColor obj="python-back">Flask</IntroNormalColor> backend. Counting an old version before refactor the entire App, total would exceed 50,000 lines easily.</IntroNormal>
      <IntroTitle2>Github Link: </IntroTitle2>
      <IntroNormal><Link href="https://github.com/leonyhenn/MASKOFF" target="_blank" >https://github.com/leonyhenn/MASKOFF</Link></IntroNormal>
    </Wrapper>
  )
}

export default GeneralIntroduction;