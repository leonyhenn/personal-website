import React from 'react';
import styled from 'styled-components'
import { getIndent } from '../Utilities/utilities.js'

const IntroNormal = styled.p`
  font-family:Arial;
  font-size:1.5vh;
  color:#707070;
  font-weight:400;
  margin:0;
  padding:0;
  margin-left:${getIndent(4)};
  margin-bottom:1.5vh;
  padding-right:${getIndent(4)};

`

export default IntroNormal