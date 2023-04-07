import styled from 'styled-components'
import { theme_blue } from "../Utilities/Colors.js"
import { theme_yellow } from "../Utilities/Colors.js"
const IntroEmphasis = styled.a`
  font-family:Arial;
  font-size:1.5vh;
  font-weight:800;
  margin:0;
  padding:0;
  margin-bottom:0.5vh;
  color:${theme_blue};
  border-bottom:3px solid ${theme_yellow}
`

export default IntroEmphasis