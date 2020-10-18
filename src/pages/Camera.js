/* eslint-disable no-useless-constructor */
import React, { Component } from "react"
import { Button, message } from "antd"

//约束条件

const constraints = (window.constraints = {
  audio: false,
  video: true,
})

export class Camera extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
  }
  openCamera = async e => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(constraints)
      console.log("success")
      this.handleSuccess(stream)
    } catch (e) {
      this.handleError(e)
    }
  }
  handleSuccess = stream => {
    const video = this.myRef.current
    const videoTracks = stream.getVideoTracks()
    console.log("约束条件", constraints)
    console.log(`使用的视频设备',${videoTracks[0].label}`, videoTracks)
    console.log(stream, "stream")

    window.stream = stream
    video.srcObject = stream
    console.log(video.srcObject)
    video.play()
  }
  handleError = error => {
    if (error.name === "ConstraintNotStatisfieldRrror") {
      const v = constraints.video
      message.error(`宽：${v.width.exact};高：${v.height.exact} 设备不支持`)
    } else if (error.name === "PermissionDeniedError") {
      message.error("没有摄像头和麦克风权限")
    } else {
      message.error(`getUserMedia错误：${error.name}`, error)
    }
  }
  render() {
    return (
      <div className='container'>
        <h1>
          <span>摄像头示例</span>
        </h1>
        <video ref={this.myRef} className='video' playsInline controls></video>
        <Button onClick={this.openCamera}>打开摄像头</Button>
      </div>
    )
  }
}

export default Camera
