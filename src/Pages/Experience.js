import React,{ Component } from 'react';
import styled from 'styled-components'
import { ExperienceBar } from '../Components'
import { Data } from '../Data/Data.js'
const Wrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin-right:auto;
  margin-left:8vw;
`

class Education extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var exs = []
    for(var i=Data.Experience.length - 1;i>-1;i--){
      exs.push(<ExperienceBar 
          CompanyLogo={Data.Experience[i].CompanyLogo}
          title={Data.Experience[i].title}
          CompanyName={Data.Experience[i].CompanyName}
          startTime={Data.Experience[i].startTime}
          endTime={Data.Experience[i].endTime}
          responsibilities={Data.Experience[i].responsibilities}
        />)
    }
    return(
      <Wrapper>
        {exs}
      </Wrapper>
      
    )
  
  }
  
}

export default Education;
