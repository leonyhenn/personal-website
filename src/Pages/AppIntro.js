import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { background_green } from "../Utilities/Colors.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { AppIntroContent } from "../Components"
import Footer from './Footer'
import { jumpTo } from '../Utilities/utilities.js'
import { TiHome } from "react-icons/ti";

const Container = styled.div`
  background-color:transparent;
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`

const BackGround = styled.div`
  background-color:transparent;
  width:100vw;
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`


const Phone = styled.img`
  height:75%;
  width:auto;
  transition:all .3s ease;
  &:hover{
    height:95%;
    width:auto;
  };
`

const Wrapper = styled.div`
  background-color:${ background_green };
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:92vh;
  width:100vw;

`

const ReaderWrapper = styled.div`
  background-color:white;
  display:flex;
  flex-direction:row;
  width:80vw;
  justify-content:space-between;
  align-items:center;
  align-self:end;
  padding-left:10vw;
  padding-right:10vw;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  height:7.5vh;
  padding-bottom:0.5vh;
`

const BackButton = styled.a`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  position:fixed;
  bottom:1vh;
  z-index:9;
  left:1vh;
  &:hover{
    cursor:pointer
  }
`


const Text = styled.p`
  font-size:10vh;
  color:white;
  font-style:italic;
  font-weight:800;
  margin-right:5vw;
  white-space:pre;
`
const ReaderText = styled.p`
  color:${theme_blue};
  font-weight:800;
  margin:0;
  padding:0;
  font-family:helvetica;
  margin-top:1vh;
  opacity:${({ click, obj }) => click == obj?"1.0":"0.8"};;
  border-bottom:${({ focus, click, obj }) => ((focus == obj)||(click == obj))?"0.5vh solid "+theme_yellow:"0.5vh solid transparent"};
  font-size:${({ click, obj }) => click == obj?"2vw":"2vw"};
  &:hover{
    opacity:1.0;
    cursor:pointer;
    font-size:2vw;
    color:${theme_blue};
    border-bottom:0.5vh solid ${theme_yellow};
  };
  transition:all .3s ease;


`
class AppIntro extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      focus:null,
      click:null
    }
    this.changeFocus=this.changeFocus.bind(this)
    this.changeClick=this.changeClick.bind(this)
  }
  changeFocus(obj){
    this.setState({focus:obj})
  }
  changeClick(obj){
    this.setState({click:obj}) 

    jumpTo(obj)

  }
  handleContent(obj){
    if(obj == "HR"){
      return "HR"
    }else if(obj == "Dev"){
      return "Dev"
    }else if(obj == "UX Designer"){
      return "UX Designer"
    }else{
      return "Choose One"
    }

  }
  render(){
    var content = this.handleContent(this.state.click)
    return (
      <Container>
        <BackButton href="https://hengye.firebaseapp.com">
          <TiHome size={"50"} color={background_green}/>
        </BackButton>
        <BackGround>
          <Wrapper>
            <Text>MASKOFF</Text>
            <Phone src={global.s3 + "no-background.png"} />
          </Wrapper>
          <ReaderWrapper>
            <ReaderText id={"HR"}
                        focus={this.state.focus}
                        click={this.state.click} 
                        obj="HR" 
                        onClick={() => this.changeClick("HR")} 
                        onMouseOver={() => this.changeFocus("HR")} 
                        onMouseOut={() => this.changeFocus(null)}>HR/RECRUITER</ReaderText>
            <ReaderText id={"Dev"}
                        focus={this.state.focus} 
                        click={this.state.click} 
                        obj="Dev" 
                        onClick={() => this.changeClick("Dev")} 
                        onMouseOver={() => this.changeFocus("Dev")} 
                        onMouseOut={() => this.changeFocus(null)}>DEV/ENGINEER</ReaderText>
            <ReaderText id={"UX Designer"}
                        focus={this.state.focus} 
                        click={this.state.click} 
                        obj="UX Designer" 
                        onClick={() => this.changeClick("UX Designer")} 
                        onMouseOver={() => this.changeFocus("UX Designer")} 
                        onMouseOut={() => this.changeFocus(null)}>UI/UX DESIGNER</ReaderText>
          </ReaderWrapper>
          <AppIntroContent obj={this.state.click}/>
        </BackGround>
        <Footer/>
      </Container>
    );
  }
}

export default withRouter(AppIntro);
