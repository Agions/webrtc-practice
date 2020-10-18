/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { List } from "antd"
import { Link } from "react-router-dom"

const Home = () => {
  const data = [
    {
      tittle: "首页",
      path: "/",
    },
    {
      tittle: "摄像头示例",
      path: "/camera",
    },
    {
      tittle: "音频示例",
      path: "/microphone",
    },
    {
      tittle: "截屏示例",
      path: "/canvas",
    },
  ]
  return (
    <List
      header={<div>webrtc 示例</div>}
      footer={<div>Footer</div>}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Link to={item["path"]}>{item["tittle"]}</Link>
        </List.Item>
      )}
    />
  )
}
export default Home
