import React,{ Component } from 'react';
import styled from 'styled-components'

class DividerLine extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div style={{width:this.props.width,
                   height:this.props.height,
                   backgroundColor:this.props.color,
                   alignSelf:"center",
                   marginBottom:this.props.marginBottom?this.props.marginBottom:"0px",
                   marginTop:this.props.marginTop?this.props.marginTop:"0px"}}>
      </div>
    )
  
  }
  
}

export default DividerLine;
