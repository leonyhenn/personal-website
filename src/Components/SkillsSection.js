import React,{ Component } from 'react';
import styled from 'styled-components'
import Skill from './Skill.js'
import Title2 from './Title2.js'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin-right:auto;
  margin-left:8vw;
`
const Wrapper = styled.div`
  width:auto;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
class SkillsSection extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var sks = []
    for(var i=0;i<this.props.skills.length;i++){
      sks.push(<Skill mastery_level={this.props.skills[i].mastery_level} name={this.props.skills[i].name} focus={this.props.focus} setFocus={this.props.setFocus}/>)
    }
    return(
      <Container>
        <Title2 text={this.props.title}/>
        <Wrapper>
          {sks}
        </Wrapper>
      </Container>
    )
  
  }
  
}

export default SkillsSection;
