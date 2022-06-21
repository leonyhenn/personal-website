import React from 'react';
import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import DividerLine from "./DividerLine.js"
import { getIndent } from '../Utilities/utilities.js'
import IntroTitle1 from './IntroTitle1.js'
import IntroTitle2 from './IntroTitle2.js'
import IntroTitleWrapper from './IntroTitleWrapper.js'
import IntroTitleIcon from './IntroTitleIcon.js'
import IntroNormal from './IntroNormal.js'
import { jumpTo } from '../Utilities/utilities.js'
import YoutubePlayerContainer from '../Components/YoutubePlayerContainer.js'
import YoutubePlayer from '../Components/YoutubePlayer.js'
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

const ScreenShot = styled.img`
  width:auto;
  height:auto;
  margin-left:${getIndent(4)};
  margin-bottom:2vh;
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
  }
`

function AppQuickRecap(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleAppQuickRecap"><IntroTitle1>App Quick Recap</IntroTitle1><IntroTitleIcon src={global.s3+"youtube.png"}/></IntroTitleWrapper>
      <IntroNormal>Here I will present a functionality presentation of this App, there is also a code-involved detailed version in DEV/ENGINEER section.</IntroNormal>
      <IntroNormal>I only listed 3 component here so you can know what I am capable of building and saves your time.</IntroNormal>
      <IntroTitle2>More components are shown in App Detailed Recap in DEV/ENGINEER section</IntroTitle2>
      <IntroTitle2>More awesome UI/UX design are shown in UI/UX DESIGNER section</IntroTitle2>
      
      <IntroTitle2>👉👉👉Recap 1: Chat functionality</IntroTitle2>
      <IntroNormal>This is my pride and joy. This component is highly funtional while remains a very simple design.</IntroNormal>
      <IntroNormal>After seeing the article, user may want to chat with the author, this is why we have a chat functionality here.</IntroNormal>
      <IntroNormal>There are functionalities such as download received media, which I forget to included in this video.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="dekn9UZ-HtM"/></YoutubePlayerContainer>
      <YoutubePlayerContainer><YoutubePlayer videoId="kCfp6Nxt6Z0"/></YoutubePlayerContainer>

      <IntroTitle2>👉👉👉Recap 2: Content Picker in article post procedure</IntroTitle2>
      <IntroNormal>Also my pride and joy. You will not be able to find a better content creating component anywhere else.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="7jGjDYbPS84"/></YoutubePlayerContainer>

      
      <IntroTitle2>👉👉👉Recap 3: "Reddit" posted on a map</IntroTitle2>
      <IntroNormal>User's main interface.</IntroNormal>
      <IntroNormal>User can swipe on the map to see what "Reddit" post is around him.</IntroNormal>
      <IntroNormal>Map gives user a sense of involvement.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="lzhIGC0nKt0"/></YoutubePlayerContainer>
      
      
    </Wrapper>
  )
}

export default AppQuickRecap;