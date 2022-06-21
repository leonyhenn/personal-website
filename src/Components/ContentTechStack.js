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
function TechStack(){
  return(
    <Wrapper>
      <IntroTitleWrapper><IntroTitle1 id={"introTitleTechStackofthisApp"}>Tech Stack of this App</IntroTitle1><IntroTitleIcon src={global.s3+"stackoverflow.png"}/></IntroTitleWrapper>
      <IntroTitle2>Frontend</IntroTitle2>
      <IntroNormal>React Native, Redux, React-navigation2, SQLite, ExpoKit</IntroNormal>
      <IntroTitle2>Backend</IntroTitle2>
      <IntroNormal>Python3, Flask, ElasticSearch, DynamoDB</IntroNormal>
      <IntroTitle2>DevOps</IntroTitle2>
      <IntroNormal>AWS stack: EC2, Lambda, S3, DynamoDB, IAM, ElasticSearch, CloudWatch, Route 53</IntroNormal>
      <IntroTitle2>Tooling</IntroTitle2>
      <IntroNormal>Android Studio, Xcode, Expo, React Native Cli</IntroNormal>
    </Wrapper>
  )
}

export default TechStack;