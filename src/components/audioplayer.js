import React from "react"
import ReactAudioPlayer from "react-h5-audio-player-bonobo"
import "../styles/audioplayer.scss"

class AudioPlayer extends React.Component {
  state = {
    currentClip: 1,
  }
  render() {
    const clip = this.props.clips[this.state.currentClip - 1]
    const src = clip.startTime
      ? `${
          clip.audioLink
        }#t=${clip.startTime.toString()},${clip.endTime.toString()}`
      : clip.audioLink

    return (
      <div className="rhap_audio_box">
        <div className="rhap_container_outer_left">
          <div className="rhap_title">{clip.title}</div>
          <ReactAudioPlayer
            ref={c => (this.player = c)}
            src={src}
            startTime={clip.startTime || 0}
            endTime={clip.endTime || 0}
          ></ReactAudioPlayer>
        </div>
        <div className="rhap_container_outer_right">
          {this.props.clips.map((clip, i) => {
            const selectedClipStyle =
              i + 1 === this.state.currentClip
                ? { backgroundColor: "#28abe2" }
                : {}
            const style = {
              ...{ fontFamily: "Lato", fontSize: "12px" },
              ...selectedClipStyle,
            }
            return (
              <div
                onClick={() => this.setState({ currentClip: i + 1 })}
                key={clip.title}
                style={style}
                className="rhap_small_box"
              >
                {clip.title}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AudioPlayer
