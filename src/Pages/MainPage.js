import React from "react";
import { Header } from '../Components';
import { BigImage } from '../Components';
import { Skills } from '../Pages';
import { Title1 } from '../Components';
import { Education } from '../Pages';
import { Projects } from '../Pages';
import { Profile } from '../Pages';
import { Experience } from '../Pages';
import { Footer } from '../Pages';
import styled from 'styled-components';
import {withRouter} from 'react-router';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  flex:1;
`
const SideBarWrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:100%; 
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
  width:20%;
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:80%;
`

function MainPage(){
  return(
    <Wrapper>
      <Header/>
      <BigImage />
      <SideBarWrapper>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Title1 text="Skills" id="Skills"/>
          <Skills />
          <Title1 text="Education" id="Education"/>
          <Education />
          <Title1 text="Projects" id="Projects"/>
          <Projects />
          <Title1 text="Experience" id="Experience"/>
          <Experience/>
        </Right>
      </SideBarWrapper>
      <Footer />
    </Wrapper>
  )
}

export default withRouter(MainPage);