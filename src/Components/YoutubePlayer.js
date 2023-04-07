import React, { Component } from "react";
import YouTube from 'react-youtube';

class YoutubePlayer extends React.Component {
  render() {
    const opts = {
      height: '720',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        color:"white",
        loop:1,
        playlist:this.props.videoId,
        cc_lang_pref:"eng",
        cc_load_policy:1,
        vq:'hd1080',
        mute:!this.props.unmute?1:0
      },
      
      
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        
      />
    );
  }
}

export default YoutubePlayer;

