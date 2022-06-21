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
  };
  z-index:10
`

function AppDetailedRecapFrontend(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleAppDetailedRecapBackend"><IntroTitle1>App Detailed Recap (Backend - Python Flask)</IntroTitle1><IntroTitleIcon src={global.s3+"youtube.png"}/></IntroTitleWrapper>
      <IntroNormal>Here I will present a functionality presentation of this App's backend.</IntroNormal>
      
      <IntroTitle2>Why Python?</IntroTitle2>      
      <IntroNormal>1. Before start writing it, I had it evaluated that the backend is going to be a mainly CRUD backend, so C++ speed is not necessary here. Julia is cute, but is not mature enought.</IntroNormal>
      <IntroNormal>2. Python is easy to write, and I had beed training extensively in Python. </IntroNormal>
      <IntroNormal>3. As a glue language, every service(such as AWS, ElasticSearch,.etc) has a python SDK.</IntroNormal>
      
      <IntroTitle2>Lambda? EC2?</IntroTitle2>      
      <IntroNormal>This backend runs on AWS Lambda, we use serverless structure(sls). Reason I chose Lambda instead of EC2 were first by then I had zero experience on how to handle load balancing and I had no time to learn how to, so auto-load balancing of Lambda is a big relief to me. Second, my App is basically a CRUD App, all things can be done without knowing the state of user, I just need to know their uid.</IntroNormal>
      <IntroNormal>We chose to switch back to EC2 in the end due to we have a <Link onClick={()=>jumpTo("introTitleMyOptimizationWorkRecap")}>multi-threading optimization</Link>  module and Lambda has function timeout and doesn't support threading.</IntroNormal>
      <IntroNormal>Backend Github Link:  <Link href="https://github.com/leonyhenn/MASKOFF/tree/master/backend/lambda" target="_blank">https://github.com/leonyhenn/MASKOFF/tree/master/backend/lambda</Link></IntroNormal>

      <IntroTitle2>Recap 1: API Design</IntroTitle2>
      <IntroNormal>Due to the App's API is not supposed to be exposed to public, so URL construction is not necessary, here I chose to use RESTful API design. A sample snippet here:</IntroNormal>
      <IntroNormal>Thinking back, GraphQL can be a better choice.</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"api-design.png")}/>
      <IntroNormal>API design file can be found here: <Link href="https://github.com/leonyhenn/MASKOFF/blob/master/backend/lambda/app.py" target="_blank">https://github.com/leonyhenn/MASKOFF/blob/master/backend/lambda/app.py</Link></IntroNormal>

      <IntroTitle2>Recap 2: File Structure</IntroTitle2>
      <IntroNormal>My backend uses a flat design, it's basically CRUD operations, so I created a file for each class. For example, Articles' CRUD are all in <Link href="https://github.com/leonyhenn/MASKOFF/blob/master/backend/lambda/articles.py" target="_blank">articles.py</Link></IntroNormal>
      <IntroNormal>The file structure looks like below:</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"file-struc.png")}/>
      <IntroNormal> <Link href="https://github.com/leonyhenn/MASKOFF/blob/master/backend/lambda/app.py" target="_blank">app.py</Link> is the API, with each class file to handle CRUD operations. File like <Link href="https://github.com/leonyhenn/MASKOFF/blob/master/backend/lambda/utility.py" target="_blank">utility.py</Link> is a supporting file, includes cross-file functions.</IntroNormal>

      <IntroTitle2>Recap 3: Authorization</IntroTitle2>
      <IntroNormal>Authorization is done by two parts: A HS256-encrypted JWT token that contains a uid and an access level and a Http request call to DynamoDB to check this uid exists.</IntroNormal>
      <IntroNormal>Then I use the <IntroEmphasis>feature of Flask</IntroEmphasis>, a token_required wrapper function, to check each http request that needs some authorization.</IntroNormal>
      <IntroNormal>Following is the code snippet of the token_requried function</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"token-required.png")}/>
      <IntroNormal>Authorization file can be found <Link href="https://github.com/leonyhenn/MASKOFF/blob/d96d1885a65cc6f622d03d5e7e549e102e4b22ed/backend/lambda/utility.py#L78" target="_blank">here</Link></IntroNormal>
      
      <IntroNormal>I prefer to include variables in http request body instead of in the URL, due to backend was still in developing, it is more fault-proof to change the JSON variable in the front-end than to do it in the URL way.</IntroNormal>
      <IntroNormal>Here is a snippet of checking JSON contains correct variables</IntroNormal>
      <ScreenShot src={require("../assets/images/"+"checking-JSON.png")}/>
      <IntroNormal></IntroNormal>
      
    </Wrapper>
  )
}

export default AppDetailedRecapFrontend;