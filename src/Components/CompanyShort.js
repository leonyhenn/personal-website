import React,{ Component } from 'react';
import styled from 'styled-components'


const Title = styled.p`
  color:black;
  font-size:2.5vh;
  margin:0vw;
  margin-left:1vw;
  margin-bottom:0vh;
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
`

const Type = styled.p`
  color:#f39c12;
  font-size:1vh;
  margin:0vw;
  margin-left:1vw;
  margin-bottom:1.5vh;
  font-family:Arial;
  font-weight:600;
  transition:all .3s ease;
`

const Tech = styled.p`
  color:#909090;
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
`

const Line = styled.div`
  width: 10vw;
  height: 3px;
  border-top:3px dotted #f39c12;
  background-color:transparent;
  top:30vh;
  right
`

const Border = styled.div`
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
  }

  &:hover ${Tech}{
    margin-left:3vw
  }
  &:hover ${Title}{
    margin-left:0.1vw
  }
  &:hover ${Type}{
    margin-left:0.1vw
  }

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
  border-left:${({ props }) => props.display_location == "right"?"3px solid #f39c12":"0px solid black"};
  border-right:${({ props }) => props.display_location == "left"?"3px solid #f39c12":"0px solid black"};
  &:hover{
    height:auto;
    width:32vw;
  }

  &:hover ${Tech}{
    margin-left:3vw
  }

  &:hover ${Border}{
    height:auto;
    width:30vw;
  }
  &:hover ${Title}{
    margin-left:0.1vw
  }
  &:hover ${Type}{
    margin-left:0.1vw
  }

  transition:all .3s ease;
`
const WrapperOut = styled.div`
  height:auto;
  width:40vw;
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
//  border:1px solid black;
const ImageStyle = {
  borderTopLeftRadius:"15px",
  borderTopRightRadius:"15px"
}

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
      if(i == 0){
        techs += (this.props.tech[i] + "  /")
      }else if(i < this.props.tech.length-1){
        techs += (" " + this.props.tech[i] + "  /")
      }else{
        techs += (" " + this.props.tech[i])
      }
    }
    return (
      <WrapperOut props={this.props}>
        {this.props.display_location == "right"?<Line props={this.props}/>:null}
        <WrapperIn props={this.props}>
          <Border onMouseEnter={()=>this.handleGIFToggle(true)} onMouseLeave={()=>this.handleGIFToggle(false)} props={this.props}>
            <img src={this.state.gif_url} width="100%" height="auto"/>
            <Title>{this.props.title}</Title>
            <Type>{this.props.type}</Type>
            <Tech>{techs}</Tech>
          </Border>
        </WrapperIn>
        {this.props.display_location == "left"?<Line props={this.props}/>:null}
      </WrapperOut>
    )  
  }
}

export default ProjectShort;