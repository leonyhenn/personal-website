import React,{ Component } from 'react';
import styled from 'styled-components'
import { SkillProficiency } from '../Components'
import { DividerLine } from '../Components'
import { SkillsSection } from '../Components'
import { Data } from '../Data/Data.js'
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  align-self:flex-start
`

class Skills extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      focus:null
    }
    this.setFocus=this.setFocus.bind(this)
  }
  setFocus(mastery_level){
    this.setState({focus:mastery_level})
  }
  render(){
    return(
      <Wrapper>
        <SkillProficiency focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Languages" skills={Data.Skills.Languages} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Frontend" skills={Data.Skills.Frontend} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Web Frameworks" skills={Data.Skills.Web_Frameworks} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="DevOps" skills={Data.Skills.DevOps} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Database" skills={Data.Skills.Database} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Tooling" skills={Data.Skills.Tooling} focus={this.state.focus} setFocus={this.setFocus}/>
        <SkillsSection title="Others" skills={Data.Skills.Others} focus={this.state.focus} setFocus={this.setFocus}/>
      </Wrapper>
    )
  
  }
}

export default Skills;

//usage example
// <BigImage url={global.s3 + "big-image.jpg"}/>