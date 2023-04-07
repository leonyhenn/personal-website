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

function UIDesignRecap(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleUIDesignRecap"><IntroTitle1>UI Design Recap</IntroTitle1><IntroTitleIcon src={global.s3+"ui.png"}/></IntroTitleWrapper>
      <IntroNormal>I have to be honest here, UI work was not done by me alone. There was an game illustrator involved to help with the color scheme.</IntroNormal>
      <IntroTitle2>Recap 1: Map color scheme design</IntroTitle2>
      <IntroNormal>We chose City grey(buildings), light green(grasslands) and shining yellow(highways) to be our main color. Also in the default zoom ratio we keep the 3D buildings. Both designs considered this App will mainly be used by people in cities, so we are trying to create a "modern city vibe" here.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="XQQvuz2NpHo"/></YoutubePlayerContainer>
      <IntroTitle2>Recap 2: App logo design</IntroTitle2>
      <IntroNormal>The App is called MASKOFF, means expose someone's mask. So I designed a abstract shape (two triangles head-to-head) to represent a mask. In our original design we tried to use the infinite symbol to refer the Rashomon effect, but this one works better.</IntroNormal>
      <IntroNormal>A lot later I discovered our logo is exactly like the Monarch institute in Movie Godzilla. I was totally shocked on my seat in the darkness with a bunch people cheering Mothra's birth.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"app-logo.png")}/>
      <IntroTitle2>Recap 3: Map "searching circle" design</IntroTitle2>
      <IntroNormal>I once heard of a story, like a placebo effect in UI design. Users complain the App is "loading very slow", so UI designers increase the loading spinner's spinning speed to solve this complaint.</IntroNormal>
      <IntroNormal>The search circle here works the same. It fills the gap between opening App, wait for server response and actually showing stuff on the map. So user have the knowledge of what the App is doing, and they also have the knowledge that if there are no post around their location(no pins after the searching circle disappear)</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="AM7Cmav66A0"/></YoutubePlayerContainer>
    </Wrapper>
  )
}

export default UIDesignRecap;