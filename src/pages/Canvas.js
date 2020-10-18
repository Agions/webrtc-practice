/* eslint-disable no-useless-constructor */
import React, { Component } from "react"
import { Button } from "antd"

export class Canvas extends Component {
  constructor() {
    super()
    this.myRef = React.createRef()
    this.myCanvas = React.createRef()
  }
  componentDidMount() {
    //约束条件
    const constraints = (window.constraints = {
      audio: false,
      video: true,
    })
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(this.handleSuccess)
      .catch(this.handleError)
  }
  takeSnap = async e => {
    let canvas = this.myCanvas.current
    const video = this.myRef.current
    console.log(video.videoWidth, video.videoHeight)
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    console.log(canvas.width, canvas.height)
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)
  }
  handleSuccess = stream => {
    const video = this.myRef.current
    window.stream = stream
    video.srcObject = stream
    console.log(video.srcObject)
    video.play()
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
          <span>截屏示例</span>
        </h1>
        <video ref={this.myRef} className='small-video' playsInline></video>
        <canvas ref={this.myCanvas} className='small-canvas'></canvas>
        <Button onClick={this.takeSnap}>截屏</Button>
      </div>
    )
  }
}

export default Canvas
