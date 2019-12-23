import React from "react"
import ReactAudioPlayer from "react-h5-audio-player-bonobo"
import "../styles/audioplayer.scss"

class AudioPlayer extends React.Component {
  state = {
    currentClip: 1,
  }
  render() {
    const clip = this.props.clips[this.state.currentClip - 1].node
    const src = `${
      clip.audio_link
    }#t=${clip.start_time.toString()},${clip.end_time.toString()}`
    return (
      <>
        <div className="rhap_container_outer">
          <div className="rhap_title">{clip.title}</div>
          <ReactAudioPlayer
            ref={c => (this.player = c)}
            src={src}
            startTime={clip.start_time}
            endTime={clip.end_time}
          ></ReactAudioPlayer>
        </div>
        <div>
          {this.props.clips.map((clip, i) => {
            return (
              <div
                onClick={() => this.setState({ currentClip: i + 1 })}
                key={clip.node.title}
                style={{fontFamily: 'Montserrat'}}
              >
                {clip.node.title}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default AudioPlayer
