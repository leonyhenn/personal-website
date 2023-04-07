import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_gray } from "../Utilities/Colors.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { UofT_blue } from "../Utilities/Colors.js"

const Wrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  position:absolute; 
  left:5vw; 
  top:15vh; 
`
const WrapperIn = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:20px
`

const ProfilePicture = styled.img`
  height:25vh;
  width:auto;
  border-radius:3px;
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
`

const Logo = styled.img`
  height:20px;
  width:20px;
  border-radius:3px;
  margin-right:8px;
`
const LineWrapper = styled.a`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-top:8px;
  margin-bottom:8px;
  margin-left:10px;
  &:hover{
    cursor:pointer
  };
  text-decoration:none
`
const Text = styled.p`
  color:${theme_gray};
  font-size:1.5vh;
  margin:0px;
  font-family:Arial;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align:left;
  transition:all .3s ease;
  -webkit-user-select:none; 
  -webkit-touch-callout:none; 
  -moz-user-select:none; 
  -ms-user-select:none; 
  user-select:none;  
`
class Profile extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Wrapper>
        <ProfilePicture src={global.s3 + "pw_profile_ai.jpg"}/>
        <WrapperIn>
          <LineWrapper href="https://www.google.com/maps/place/Toronto,+ON/@43.7218652,-79.4629023,11.68z/data=!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843" target="_blank"><Logo src={global.s3 + "location-logo.png"} /><Text>Toronto, ON, Canada</Text></LineWrapper>
          <LineWrapper href="https://www.linkedin.com/in/heng-ye-275b17114/" target="_blank" ><Logo src={global.s3 + "linkedin-logo.png"} /><Text>LinkedIn</Text></LineWrapper>
          <LineWrapper href="https://github.com/leonyhenn" target="_blank" ><Logo src={global.s3 + "github-logo.png"} /><Text>Github</Text></LineWrapper>
          <LineWrapper href="mailto:leonyhenn@gmail.com"><Logo src={global.s3 + "gmail-logo.png"} /><Text>Email</Text></LineWrapper>
          <LineWrapper href="https://docs.google.com/document/d/1VI2sA1PDgx3Qwm3IufR5PDZ4hmXjAnEWfzo35u1M6oc/edit?usp=sharing" target="_blank"><Logo src={global.s3 + "google-drive.png"} /><Text>Resume</Text></LineWrapper>
          <LineWrapper href="https://docs.google.com/document/d/1VI2sA1PDgx3Qwm3IufR5PDZ4hmXjAnEWfzo35u1M6oc/export?format=pdf"><Logo src={global.s3 + "download-icon.png"} /><Text>Resume Download</Text></LineWrapper>
        </WrapperIn>
      </Wrapper>
      
    )
  
  }
  
}

export default Profile;
