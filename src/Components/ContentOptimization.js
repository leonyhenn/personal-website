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
import IntroEmphasis from './IntroEmphasis.js'
import { jumpTo } from '../Utilities/utilities.js'

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

function ContentOptimization(){
  return(
    <Wrapper>
      <IntroTitleWrapper><IntroTitle1 id={"introTitleMyOptimizationWorkRecap"}>My Optimization Work Recap</IntroTitle1><IntroTitleIcon src={global.s3+"opt.png"}/></IntroTitleWrapper>
      <IntroNormal>Anyone can write a working React Native App. What makes the difference of having commercial value or not is how smooth the App runs. Optimization in React Native is not easy, with a smartphone's capability and React Native's poor dual-threading and memory management, sometimes it's like dancing in handcuffs. Followings are some examples of optimization work that I have done to deliver the butter-smooth user experience.</IntroNormal>
      <IntroTitle2>Multi-threading</IntroTitle2>
      <IntroNormal>I understand the craft of software development and utilize best practices, and I am a total geek when it comes to performance, especially speed. </IntroNormal>
      <IntroNormal>For example, there was one component in my backend that requires making a dozens API calls to DynamoDB, due to Python and Flask is designed to be synchronized, I ended up spending a day on developing a multi-threaded module to perform high-speed group-fetching, optimizing a <IntroEmphasis>14</IntroEmphasis> seconds fetching to <IntroEmphasis>0.48</IntroEmphasis> second, which is <IntroEmphasis>29</IntroEmphasis> times faster. </IntroNormal>
      <IntroNormal>Also due to the multi-threaded module, on the perspective of DevOps, I have to migrate servers from AWS Lambda to AWS EC2 due to Lambda has a timeout limit and does not support multi-threading. Any multi-threading module will run as single thread on Lambda.</IntroNormal>
      <IntroNormal>Following is a code snippet of multi-threading module</IntroNormal>
      <ScreenShot src={global.s3+"multi-threading-screenshot-4.png"}></ScreenShot>
      <ScreenShot src={global.s3+"multi-threading-screenshot-5.png"}></ScreenShot>
      <IntroTitle2>Redux</IntroTitle2>
      <IntroNormal>Redux is basically a must-have in any React-related App. It takes a day to setup, but once it is setup properly, it works like a charm. Technically it does not improve any user experience, I list it here due to it reduces developing time and bugs. I use redux A LOT, you can see from the screenshot below.</IntroNormal>
      <IntroNormal>I Was gonna put a screenshot but it is just too long.<Link href="https://github.com/leonyhenn/MASKOFF/blob/master/ejected/store/reducers.js" target="_blank">Code is here.</Link></IntroNormal>
      <IntroTitle2>Frontend Optimization</IntroTitle2>
      <IntroNormal>I also did front end performance optimization work like the one mentioned <Link onClick={()=>{jumpTo("introTitleEmojiOpt")}}>below</Link></IntroNormal>
    </Wrapper>
  )
}

export default ContentOptimization;