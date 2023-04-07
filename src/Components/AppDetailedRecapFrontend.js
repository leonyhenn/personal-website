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
import IntroEmphasis from './IntroEmphasis.js'
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

function AppDetailedRecapFrontend(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleAppDetailedRecapFrontend"><IntroTitle1>App Detailed Recap (Frontend - React Native)</IntroTitle1><IntroTitleIcon src={global.s3+"youtube.png"}/></IntroTitleWrapper>
      <IntroNormal>Here I will present a functionality presentation of this App</IntroNormal>
      <IntroNormal>Frontend Github Link:  <Link href="https://github.com/leonyhenn/MASKOFF/tree/master/ejected" target="_blank">https://github.com/leonyhenn/MASKOFF/tree/master/ejected</Link></IntroNormal>
      <IntroTitle2>Frontend File structure introduction</IntroTitle2>
      <IntroNormal>Frontend is huge and complicated. I already filed an introduction in Github so I will save some space for the other visual goodies.</IntroNormal>
      <IntroNormal>Please refer to this link for frontend structure👉👉👉<Link href="https://github.com/leonyhenn/MASKOFF/blob/master/README.md" target="_blank">https://github.com/leonyhenn/MASKOFF/blob/master/README.md</Link></IntroNormal>

      <IntroTitle2>👉👉👉Recap 1: Comment Section</IntroTitle2>
      <IntroNormal>This is where <Link onClick={()=>jumpTo("introTitleMyOptimizationWorkRecap")}>Performance Optimization Example--Multi-threading</Link> is used for. When a new article is opened, each fetch will bring 15(chronographical order)+5(most liked) parent comments, each parent comment contains 15 subcomments. So if we use a single thread with for loop it would be in total 22 times HTTPS request.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"multi-threading-code-1.png")}/>
      <ScreenShot src={require("../assets/images/"+"multi-threading-code-2.png")}/>
      <ScreenShot src={require("../assets/images/"+"multi-threading-code-3.png")}/>
      <IntroNormal>This is why multi-threading is specially helpful here. With multi-threading I improve this task from <IntroEmphasis>14</IntroEmphasis> seconds to <IntroEmphasis>0.98</IntroEmphasis> seconds, which is <IntroEmphasis>29x faster</IntroEmphasis>.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="W9BnDR2Faf0"/></YoutubePlayerContainer>

      <IntroTitle2>👉👉👉Recap 2: Search people functionality</IntroTitle2>
      <IntroNormal>Search is done by a search engine on the backend. We search for any person's name or contact method that has a match then return the degree of likeliness.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"search-algo-1.png")}/>
      <IntroNormal>I was going to use Hamming distance for vague evaluation, turns out in the end we make user to specify "accurate info" such as phone number. This will greatly improve user's search accuracy. Imagine how many "Matt David" would be in our database.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"search-algo-2.png")}/>
      <IntroNormal>This is the Mosaic method we use on person's name. We make sure we handle English name and Chinese name differently with a Chinese unicode dictionary, and for English names we make sure we only show the initials. For Chinese name it would be a part of family name and a part of given name.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"search-algo-4.png")}/>
      <IntroNormal>For similarity algorithm, we used Hamming Distance. We tried a couple, it is the most straight forward one.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"search-algo-3.png")}/>
      <YoutubePlayerContainer><YoutubePlayer videoId="12iVhadNj1M"/></YoutubePlayerContainer>

      <IntroTitle2>👉👉👉Recap 3: Chinese/English version change</IntroTitle2>
      <IntroNormal>A dictionary was used for global version. Like react-i18next, but I did not know this library back then.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"lans-3.png")}/>
      <IntroNormal>I implemented something quite similar with t function on my own.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"lans-2.png")}/>
      <ScreenShot src={require("../assets/images/"+"lans-1.png")}/>
      <YoutubePlayerContainer><YoutubePlayer videoId="qbJzQOJWToA" unmute/></YoutubePlayerContainer>


      <IntroTitle2>Recap 4: Chat functionality</IntroTitle2>
      <IntroNormal>This is my pride and joy. This component is highly funtional while remains a very simple design.</IntroNormal>
      <IntroNormal>After seeing the article, user may want to chat with the author, this is why we have a chat functionality here.</IntroNormal>
      <IntroNormal>There are functionalities such as download received media, which I forget to included in this video.</IntroNormal>
      <IntroNormal><IntroEmphasis>👉👉👉Please turn the following Youtube Videos to the highest quality.</IntroEmphasis></IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="dekn9UZ-HtM"/></YoutubePlayerContainer>
      <YoutubePlayerContainer><YoutubePlayer videoId="kCfp6Nxt6Z0"/></YoutubePlayerContainer>

      <IntroTitle2>Recap 5: Content Picker in article post procedure</IntroTitle2>
      <IntroNormal>Also my pride and joy. You will not be able to find a better content creating component anywhere else.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="7jGjDYbPS84"/></YoutubePlayerContainer>


      <IntroTitle2>Recap 6: "Reddit" posted on a map</IntroTitle2>
      <IntroNormal>User's main interface.</IntroNormal>
      <IntroNormal>User can swipe on the map to see what "Reddit" post is around him.</IntroNormal>
      <IntroNormal>Map gives user a sense of involvement.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="lzhIGC0nKt0"/></YoutubePlayerContainer>
      
      <IntroTitle2>Recap 7: Comment reply component</IntroTitle2>
      <IntroNormal>This is my design. Simple and elegant, show a thumbnail of picture if user has chosen one, and also show the text user typed, so everything is in one place.</IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="uwTkgWd8jXc"/></YoutubePlayerContainer>

      
      <IntroTitle2>Recap 8: Image manipulator</IntroTitle2>
      <IntroNormal>Allows user to annotate(quote) or crop(remove excessive part) the image, so his comment can have more point to other people. </IntroNormal>
      <YoutubePlayerContainer><YoutubePlayer videoId="mDu1ArJwLc4"/></YoutubePlayerContainer>
      
            
      
      
      
      

      
      
    </Wrapper>
  )
}

export default AppDetailedRecapFrontend;