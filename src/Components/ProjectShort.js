import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_gray } from "../Utilities/Colors.js"
import { theme_yellow_dark } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { Link } from "react-router-dom";

const Title = styled.p`
  color:${theme_blue};
  font-size:2.5vh;
  margin:0vw;
  margin-left:1vw;
  margin-bottom:0vh;
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
  text-decoration:none;
  white-space:pre;
`

const Type = styled.p`
  color:${theme_yellow};
  font-size:1vh;
  margin:0vw;
  margin-left:1vw;
  margin-bottom:1.5vh;
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
  &:hover{
    font-size:3vh;
  }
  text-decoration:none;
`

const Tech = styled.p`
  color:${theme_gray};
  font-size:1.5vh;
  width:26.5vw;
  height:auto;
  margin:0vw;
  margin-bottom:1.5vh;
  margin-left:1vw;
  font-family:Arial;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align:left;
  &:hover {
    width:26.5vw;
    height:auto;
  }
  transition:all .3s ease;
  text-decoration:none;
`

const Line = styled.div`
  width: 10vw;
  height: 3px;
  border-top:3px dotted #f39c12;
  background-color:transparent;
  top:30vh;
  right
`

const BorderA = styled.a`
  height:auto;
  width:28vw;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  &:hover{
    height:auto;
    width:30vw;
    cursor:pointer;
    
  }

  &:hover ${Tech}{
    margin-left:3vw
  }
  &:hover ${Title}{
    margin-left:0.1vw
  }
  &:hover ${Type}{
    margin-left:0.1vw;
    font-size:3vh;
  }

  transition:all .3s ease;
  text-decoration:none;
`

const BorderP = styled.a`
  height:auto;
  width:28vw;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  &:hover{
    height:auto;
    width:30vw;
    cursor:pointer;
    
  }

  &:hover ${Tech}{
    margin-left:3vw
  }
  &:hover ${Title}{
    margin-left:0.1vw
  }
  &:hover ${Type}{
    margin-left:0.1vw;
    font-size:3vh;
  }

  transition:all .3s ease;
  text-decoration:none;
`

const ImgContainer = styled.div`
  height:25vw;
  width:25vw;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  align-self:center;
  transition:all .3s ease;
`
//  border:1px solid black;
const Image = styled.img`
  background-size:cover;
  width:100%;
  height:auto;
  border-radius:10px
  transition:all .3s ease;
`

const WrapperIn = styled.div`
  height:auto;
  width:30vw;
  padding-top:10px;
  padding-bottom:10px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position: relative;
  &:hover{
    height:auto;
    width:32vw;
  }

  &:hover ${Tech}{
    margin-left:3vw
  }

  &:hover ${BorderA}{
    height:auto;
    width:30vw;
  }
  &:hover ${BorderP}{
    height:auto;
    width:30vw;
  }
  &:hover ${Title}{
    margin-left:0.1vw
  }
  &:hover ${Type}{
    margin-left:0.1vw;
    font-size:3vh;
  }
  &:hover ${ImgContainer}{
    height:30vw;
    width:30vw;
  }

  transition:all .3s ease;
`
const WrapperOut = styled.div`
  height:auto;
  width:30vw;
  padding-top:10px;
  padding-bottom:10px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position: relative;
  &:hover{
    height:auto;
    width:42vw;
  }
  &:hover ${Line}{
    border-top:0px dotted #f39c12;
  }
  transition:all .3s ease;

`



class ProjectShort extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gif_url:this.props.gif_moving
    }
    this.gif_static = this.props.gif_static;
    this.gif_moving = this.props.gif_moving;
    this.handleGIFToggle = this.handleGIFToggle.bind(this);
  }

  handleGIFToggle(value){
    if(value == true){
      this.setState({gif_url:this.gif_moving})
    }else{
      this.setState({gif_url:this.gif_static})
    }
  }

  render(){
    var techs = ""
    for (var i=0;i<this.props.tech.length;i++){
      if(i == 0 && this.props.tech.length > 1){
        techs += (this.props.tech[i] + "  /")
      }else if(i < this.props.tech.length-1){
        techs += (" " + this.props.tech[i] + "  /")
      }else{
        techs += (" " + this.props.tech[i])
      }
    }
    return (
      <WrapperOut props={this.props}>
        <WrapperIn props={this.props}>
          {this.props.href?<BorderA onMouseEnter={()=>this.handleGIFToggle(true)} onMouseLeave={()=>this.handleGIFToggle(false)} props={this.props}  href={this.props.href} target="_blank">
            <ImgContainer>
              <Image src={this.state.gif_url}/>
            </ImgContainer>
            <Title>{this.props.title}</Title>
            <Type>{this.props.type}</Type>
            <Tech>{this.props.year}</Tech>
            <Tech>{techs}</Tech>
          </BorderA>:<BorderP onMouseEnter={()=>this.handleGIFToggle(true)} onMouseLeave={()=>this.handleGIFToggle(false)} props={this.props}  href={this.props.href} target="_blank">
            <ImgContainer>
              <Image src={this.state.gif_url}/>
            </ImgContainer>
            <Title>{this.props.title}</Title>
            <Type>{this.props.type}</Type>
            <Tech>{this.props.year}</Tech>
            <Tech>{techs}</Tech>
          </BorderP>}
        </WrapperIn>
      </WrapperOut>
    )  
  }
}

export default ProjectShort;

// usage example
// <ProjectShort 
//   gif_moving={global.s3 + "bitcoin-geral-thumbnail.png"}
//   gif_static={global.s3 + "bitcoin-geral-thumbnail.png"}
//   title={"MASKOFF"}
//   type={"Mobile App"}
//   tech={["React Native","Python3","Flask","Redux","Xcode","Android Studio","AWS Lambda","AWS EC2","ElasticSreach","DynamoDB"]}
//   display_location="left"
// />