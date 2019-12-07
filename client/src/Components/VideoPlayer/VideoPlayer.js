import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class VideoPlayer extends Component {
  render () {
    return <ReactPlayer pip={true} controls url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' playing />
  }
}

export default VideoPlayer;