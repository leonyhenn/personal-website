import React from 'react';
import styled from 'styled-components'
import { getIndent } from '../Utilities/utilities.js'

const IntroTitle2 = styled.p`
  font-family:Arial;
  font-size:2vh;
  color:black;
  font-weight:600;
  margin:0;
  padding:0;
  margin-left:${getIndent(3)}
  margin-top:1vh;
  margin-bottom:1vh;
`

export default IntroTitle2;