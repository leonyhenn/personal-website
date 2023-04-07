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

function AllPackages(){
  return(
    <Wrapper>
      <IntroTitleWrapper id="introTitleAllPackages" ><IntroTitle1>All Packages</IntroTitle1><IntroTitleIcon src={global.s3+"github.png"}/></IntroTitleWrapper>
     <ScreenShot src={require("../assets/images/"+"all-packages.png")}/>
    </Wrapper>
  )
}

export default AllPackages;