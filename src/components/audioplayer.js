import React from "react"
import ReactAudioPlayer from "react-h5-audio-player-bonobo"
import "./audioplayer.scss"

class AudioPlayer extends React.Component {
  render() {
    return (
      <ReactAudioPlayer
        ref={c => (this.player = c)}
        src={this.props.src}
        startTime={this.props.startTime}
        endTime={this.props.endTime}
      ></ReactAudioPlayer>
    )
  }
}

export default AudioPlayer
