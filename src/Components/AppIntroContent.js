import React from 'react';
import styled from 'styled-components'
import TechStack from './ContentTechStack'
import AppIntroMenu from './AppIntroMenu'
import Contribution from './ContentContribution'
import Optimization from './ContentOptimization'
import { background_green } from "../Utilities/Colors.js"
import GeneralIntroduction from './GeneralIntro'
import UXDesignHighlights from './UXDesignHighlights'
import UIDesignRecap from './UIDesignRecap'
import AppQuickRecap from './AppQuickRecap'
import AppDetailedRecapFrontend from './AppDetailedRecapFrontend'
import AppDetailedRecapBackend from './AppDetailedRecapBackend'
import AllPackages from './AllPackages'
const ContentWrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  width:80vw;
  transition:all .8s ease;
`
const Text = styled.p`
  font-size:10vh;
  color:white;
  font-style:italic;
  font-weight:800;
  margin-right:5vw;
`
const ChooseOneWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  align-self:center;
  padding:50px;
`

const ChooseOne = styled.p`
  align-self:center;
  font-size:2vw;
  font-family:Arial;
  font-weight:600;
  color:#b0b0b0;
`

const ChoiceImg = styled.img`
  height:auto;
  width:auto;
  border-radius:5px;
`

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  flex:1;
  width:100vw;
  border-top:1px solid #b0b0b0;
`
const SideBarWrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:100vw; 
`

const Left = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  position: -webkit-sticky;
  position: sticky;
  align-self:flex-start;
  top: 0vh;
  width:20vw;
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:80vw;
`
function AppIntroContent({obj}) {
  if(obj == "HR"){
    var content_panel = <ContentWrapper>
        <GeneralIntroduction role={obj}/>
        <TechStack/>
        <Contribution/>
        <AppQuickRecap />
      </ContentWrapper>
  }else if(obj == "Dev"){
    var content_panel =  <ContentWrapper>
        <GeneralIntroduction role={obj}/>
        <TechStack/>
        <AppDetailedRecapFrontend />
        <AppDetailedRecapBackend />
        <Optimization/>
        <Contribution/>
        <AllPackages/>
      </ContentWrapper>
  }else if(obj == "UX Designer"){
    var content_panel =  <ContentWrapper>
      <GeneralIntroduction role={obj}/>
      <UXDesignHighlights/>
      <UIDesignRecap/>
      </ContentWrapper>
  }else{
    var content_panel =  <ContentWrapper>
        <ChooseOneWrapper><ChooseOne>You are ...? ⬆ Please select from above.⬆</ChooseOne><ChoiceImg src={global.s3 + "choice.gif"}/></ChooseOneWrapper>
      </ContentWrapper>
  }
  return(
    <Wrapper>
      {obj != null?<SideBarWrapper>
        <Left>
          <AppIntroMenu obj={obj}/>
        </Left>
        <Right>
          {content_panel}
        </Right>
      </SideBarWrapper>:content_panel}
    </Wrapper>
  )
}


export default AppIntroContent;
