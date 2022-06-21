import React,{ Component } from 'react';
import styled from 'styled-components'
import { theme_gray } from "../Utilities/Colors.js"
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
import { UofT_blue } from "../Utilities/Colors.js"
import { ProjectShort } from "../Components"
import { Data } from '../Data/Data.js'
import { Link } from "react-router-dom";

const WrapperIn = styled.div`
  padding-top:10px;
  padding-bottom:15px;
  padding-left:30px;
  padding-right:30px;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`
const WrapperOut = styled.div`
  padding-top:10px;
  padding-bottom:15px;
  padding-left:30px;
  padding-right:30px;
  background-color:transparent;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`

class Projects extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <WrapperOut>
          <WrapperIn>
            <Link to="/MASKOFF" style={{ textDecoration: 'none' }}>
              <ProjectShort 
                gif_moving={Data.Projects[0].gif_moving}
                gif_static={Data.Projects[0].gif_static}
                title={Data.Projects[0].title}
                type={Data.Projects[0].type}
                tech={Data.Projects[0].tech}
                
                year={Data.Projects[0].year}
              />
            </Link>
            <ProjectShort 
              gif_moving={Data.Projects[1].gif_moving}
              gif_static={Data.Projects[1].gif_static}
              title={Data.Projects[1].title}
              type={Data.Projects[1].type}
              tech={Data.Projects[1].tech}
              href={Data.Projects[1].href}
              year={Data.Projects[1].year}
            />
          </WrapperIn>
          <WrapperIn>
            <ProjectShort 
              gif_moving={Data.Projects[2].gif_moving}
              gif_static={Data.Projects[2].gif_static}
              title={Data.Projects[2].title}
              type={Data.Projects[2].type}
              tech={Data.Projects[2].tech}
              href={Data.Projects[2].href}
              year={Data.Projects[2].year}
            />
            <ProjectShort 
              gif_moving={Data.Projects[3].gif_moving}
              gif_static={Data.Projects[3].gif_static}
              title={Data.Projects[3].title}
              type={Data.Projects[3].type}
              tech={Data.Projects[3].tech}
              href={Data.Projects[3].href}
              year={Data.Projects[3].year}
            />
          </WrapperIn>
        </WrapperOut>
    )
  }
  
}




export default Projects;
