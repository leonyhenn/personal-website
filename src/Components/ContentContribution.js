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
  &:hover{
    cursor:pointer
  }
`

function Contribution(){
  return(
    <Wrapper>
      <IntroTitleWrapper><IntroTitle1 id={"introTitleMycontributiontoReactNativeCommunity"}>My contribution to React Native Community</IntroTitle1><IntroTitleIcon src={global.s3+"github.png"}/></IntroTitleWrapper>
      <IntroTitle2>Original Problem Solving Example</IntroTitle2>
      <IntroNormal>React Native is known for its high-speed growth, which means there are problems in this community that solutions have not been written yet, which makes original problem solving skill quite vital.</IntroNormal>
      <IntroNormal>One of such examples is the hieroglyphic languages cannot be emptied in a React Native TextInput Component problem: In React Native TextInput component, hieroglyphic languages, such as Chinese, Japanese or Thai cannot be emptied by any method React Native provide.</IntroNormal>
      <IntroNormal><Link href="https://github.com/facebook/react-native/issues/18767#issuecomment-403685280" target="_blank">I am the first one who solves this problem and shares my solution which bugged a lot of Asian developers deeply.</Link></IntroNormal>
      <ScreenShot src={global.s3+"github-screenshot-1.png"}/>
      <IntroNormal>And I am getting a lot Likes and even Hearts for the workaround!</IntroNormal>
      <IntroTitle2 id={"introTitleEmojiOpt"}>Performance Optimization Example</IntroTitle2>
      <IntroNormal>React Native is popular due to its widely available community support, numerous developers share and maintaince their own components on Github, which is a great thing, but sometimes can also be frustrating due to sometimes a third party component is not performing as well as you might expect.</IntroNormal>
      <IntroNormal>The example here is an emoji picker component, which is also the only one that I find among third party components that is adequate in term of performance. Though it is adequate, the performance problem, especially on out dated iPhone, is still noticable. The main symptom is that on a page that uses this component, it takes 4-5 seconds to load the page even in production environment, which is unacceptable for user experience reasons.</IntroNormal>
      <IntroNormal>After a bit of playing around and digging for the problem, I find the root cause is that this component renders too much emojis at the beginning. The file IO operation is what causes the 5-seconds delay. <Link href="https://github.com/sskhandek/react-native-emoji-input/issues/36#issuecomment-491528249" target="_blank">Then I shared my solution to the repo owners and they happily accepted a merge.</Link></IntroNormal>
      <ScreenShot src={global.s3+"github-screenshot-2.png"}/>
      <ScreenShot src={global.s3+"github-screenshot-3.png"}/>
      <IntroNormal>Above are just examples of my little contribution for this community. I have to say thanks to React Native Community and Github, without them there is no way that I am able to build what it is now in such a short time. There are numerous thank-you letters that I received and sent in my Mail about topics like above, those are a part of my motivation to go further.</IntroNormal>
    </Wrapper>
  )
}

export default Contribution;