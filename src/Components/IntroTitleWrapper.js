import React from 'react';
import styled from 'styled-components'
import { getIndent } from '../Utilities/utilities.js'

const IntroTitleWrapper = styled.div`
  background-color:transparent;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  transition:all .3s ease;
  margin:0px;
  padding:0px;
  margin-left:${getIndent(2)};
`

export default IntroTitleWrapper;