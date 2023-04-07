import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

global.s3 = "https://maskoff.s3.ca-central-1.amazonaws.com/"

const WrapperOut = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`

const BackGround = styled.div`
  background-color:#2da158;
  width:60vw;
  height:100vh;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`
const Phone = styled.img`
  height:75%;
  width:auto;
  transition:all .8s ease;
`
const Wrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:auto;
  &:hover ${Phone}{
    height:85%;
    width:auto;
  }
  transition:all .8s ease;
`
const Text = styled.p`
  font-size:10vh;
  color:white;
  font-style:italic;
  font-weight:800;
  
  margin-right:5vw;
`
function App() {
  return (
    <WrapperOut>
      <BackGround>
        <Text>MASKOFF</Text>
        <Wrapper>
          <Phone src={global.s3 + "no-background.png"} />
        </Wrapper>
      </BackGround>
    </WrapperOut>
  );
}

export default App;
