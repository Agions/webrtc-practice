/* eslint-disable no-useless-constructor */
import React, { Component } from "react"

export class Microphone extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
  }
  componentDidMount() {
    //约束条件
    const constraints = (window.constraints = {
      audio: true,
      video: false,
    })
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(this.handleSuccess)
      .catch(this.handleError)
  }
  // openCamera = async () => {
  //   try {
  //     const stream = await
  //     console.log("success")
  //     this.handleSuccess(stream)
  //   } catch (e) {
  //     this.handleError(e)
  //   }
  // }
  handleSuccess = stream => {
    const audio = this.myRef.current
    const audioTracks = stream.getAudioTracks()
    console.log(`使用的视频设备',${audioTracks[0].label}`, audioTracks)
    console.log(stream, "stream")
    stream.oninactive = () => {
      console.log("stream已经停止")
    }
    window.stream = stream
    audio.srcObject = stream
    console.log(audio.srcObject)
    audio.play()
  }
  handleError = error => {
    console.log(
      "navigator.mediaDevices.getUserMedia error: ",
      error.message,
      error.name
    )
  }
  render() {
    return (
      <div className='container'>
        <h1>
          <span>摄像头示例</span>
        </h1>
        <audio ref={this.myRef} controls></audio>
        <p className='warning'>警告：如果没有头戴式耳机，声音会反馈到扬声器</p>
      </div>
    )
  }
}

export default Microphone
