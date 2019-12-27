import React from "react"
import ReactAudioPlayer from "react-h5-audio-player-bonobo"
import "../styles/audioplayer.scss"
import moment from "moment"

class ConsciousPlayer extends React.Component {
  state = {
    currentClip: 1,
  }
  render() {
    const clip = this.props.clips[this.state.currentClip - 1]
    const src = clip.audioLink

    return (
      <>
        <div className="rhap_container_outer">
          <div className="rhap_title">{clip.title}</div>
          <ReactAudioPlayer
            ref={c => (this.player = c)}
            src={src}
            startTime={clip.startTime || 0}
            endTime={clip.endTime || 0}
          ></ReactAudioPlayer>
          <div className="rhap_title" style={{ fontSize: "16px" }}>
            {clip.description}
          </div>
        </div>
        <div className="rhap_container_outer_scroll">
          {this.props.clips.map((clip, i) => {
            const selectedClipStyle = i + 1 === this.state.currentClip ? { backgroundColor: "#28abe2" } : {}
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
                {`${clip.title} - ${moment(clip.date).format("DD MMM YYYY")}`}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default ConsciousPlayer
