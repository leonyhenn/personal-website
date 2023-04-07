import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_gray } from "../Utilities/Colors.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { UofT_blue } from "../Utilities/Colors.js"

const CompanyLogo = styled.img`
  height:6vh;
  width:auto;
  transition:all .3s ease;
`

const CompanyName = styled.p`
  color:${theme_blue};
  font-size:2vh;
  border-bottom:2px solid ${theme_yellow};
  margin:0vw;
  margin-bottom:0vh;
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
`

const Title = styled.p`
  color:${theme_blue};
  margin:0vw;
  margin-bottom:8px;
  font-size:2vh;
  border-bottom:2px solid ${theme_yellow};
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
`

const WrapperOut = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
  border-radius:3px;
  padding:10px;
  margin:0px;
  &:hover ${CompanyLogo}{
    height:12vh;
  }
  &:hover ${Title}{
    font-size:4vh;
  }
  transition:all .3s ease;
`

const WrapperPictureText = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  border-radius:3px;
  padding:0px;
  margin:0px;
  padding:5px;
  margin-right:1vw;
  width:15vw;
`

const WrapperTextText = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  border-radius:3px;
  padding:0px;
  margin:0px;
`

const WrapperResponsibilities = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  border-radius:3px;
  padding:0px;
  padding:5px;
  margin-left:1vw;
`


const TimeElapse = styled.p`
  color:${theme_gray};
  font-size:1.5vh;
  margin-top:10px;
  margin-bottom:10px;
  font-family:Arial;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align:left;
  transition:all .3s ease;
`

const Responsibility = styled.p`
  color:${theme_gray};
  font-size:1.5vh;
  margin:0px;
  line-height: 150%;
  font-family:Arial;
  word-wrap: break-word;
  white-space: pre;
  text-align:left;
  transition:all .3s ease;
`
// const 

class ExperienceBar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.CompanyLogo)
    let res = [];
    for(var i=0;i<this.props.responsibilities.length;i++){
      res.push(<Responsibility key={i*2}>{this.props.responsibilities[i]}</Responsibility>)
    }
    return(
      <WrapperOut>
        <WrapperPictureText>
          <WrapperTextText>
            <CompanyName>{this.props.CompanyName}</CompanyName>
            <TimeElapse>{this.props.startTime+" -- "+this.props.endTime}</TimeElapse>
            
          </WrapperTextText>
          <CompanyLogo src={this.props.CompanyLogo}/>
        </WrapperPictureText>
        <WrapperResponsibilities>
          <Title>{this.props.title}</Title>
          {res}
        </WrapperResponsibilities>
      </WrapperOut>
      
    )
  
  }
  
}

export default ExperienceBar;
// usage example
// <ExperienceBar 
//     CompanyLogo={global.s3 + "yihe1.PNG"}
//     title={"Full Stack Developer"}
//     CompanyName={"Yihe Tech"}
//     startTime={"May, 2018"}
//     endTime={"Aug, 2019"}
//     responsibilities={
//     [
//      "Scrum environment",
//      "Developing a React website and a React Native App Includes GraphQL and Redux",
//      "Also taking Angular jobs from another group",
//      "Developing a C# backend on .NET framework",
//      "Maintaining an Elixir backend on Phoenix framework With GraphQL integrated"
//     ]}
//   />