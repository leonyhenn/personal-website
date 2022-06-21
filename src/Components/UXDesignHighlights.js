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
import ImageLoader from 'react-load-image';
import YoutubePlayer from '../Components/YoutubePlayer'
import YoutubePlayerContainer from '../Components/YoutubePlayerContainer.js'
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

function Preloader(props) {
  return <img src="../assets/images/spinner.gif" />;
}

function UXDesignHighlights(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleUXDesignHighlights"><IntroTitle1>UX Design Highlights</IntroTitle1><IntroTitleIcon src={global.s3+"ux.png"}/></IntroTitleWrapper>
      <IntroTitle2>I value UX a lot. Also a reader of Don Norman.</IntroTitle2>
      <IntroNormal>I want users to feel satisfied, smooth and easy to use while using this app</IntroNormal>

      <IntroTitle2>👉👉👉Hightlight 1: Chat reply component</IntroTitle2>
      <IntroNormal>This is my pride and joy. This component is highly funtional while remains a very simple design.</IntroNormal>
      <IntroNormal>After seeing the article, user may want to chat with the author, this is why we have a chat functionality here.</IntroNormal>
      <IntroNormal>There are functionalities such as download received media, which I forget to included in this video.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="kCfp6Nxt6Z0"/></YoutubePlayerContainer>
      
      <IntroTitle2>👉👉👉Hightlight 2: Content Picker in article post procedure</IntroTitle2>
      <IntroNormal>Also my pride and joy. You will not be able to find a better content creating component anywhere else.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="7jGjDYbPS84"/></YoutubePlayerContainer>

      <IntroTitle2>Followings are some micro UX designs.</IntroTitle2>

      <IntroTitle2>Hightlight 3: Comment reply component</IntroTitle2>
      <IntroNormal>This is my design. Simple and elegant, show a thumbnail of picture if user has chosen one, and also show the text user typed, so everything is in one place.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="uwTkgWd8jXc"/></YoutubePlayerContainer>

      <IntroTitle2>Hightlight 4: Chat: small window for content double-check before sending</IntroTitle2>
      <YoutubePlayerContainer><YoutubePlayer videoId="FtFpj87bda8"/></YoutubePlayerContainer>
      
      <IntroTitle2>Hightlight 5: Download status window</IntroTitle2>
      <YoutubePlayerContainer><YoutubePlayer videoId="EXuD3ywtcJU"/></YoutubePlayerContainer>
      
      <IntroTitle2>Hightlight 6: Network Indicator</IntroTitle2>
      <YoutubePlayerContainer><YoutubePlayer videoId="rUyqglOBAjk"/></YoutubePlayerContainer>
      
      <IntroTitle2>Hightlight 7: Image manipulation component</IntroTitle2>
      <YoutubePlayerContainer><YoutubePlayer videoId="mDu1ArJwLc4"/></YoutubePlayerContainer>
      
      <IntroTitle2>Hightlight 8: Immediate response for tags</IntroTitle2>
      <YoutubePlayerContainer><YoutubePlayer videoId="jELqaUd2Z2E"/></YoutubePlayerContainer>
    </Wrapper>
  )
}

export default UXDesignHighlights;