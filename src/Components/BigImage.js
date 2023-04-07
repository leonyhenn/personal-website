import React,{ Component } from 'react';
import styled from 'styled-components'

const img_style = {
  marginBottom:"10px"
}

class BigImage extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <img src={require("../assets/images/" + "big-image.jpg")} width="100%" height="auto" style={img_style}/>
    )
  
  }
  
}

export default BigImage;

//usage example
// <BigImage url={global.s3 + "big-image.jpg"}/>