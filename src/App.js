import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Camera from "./pages/Camera"
import Microphone from "./pages/Microphone"
import Canvas from "./pages/Canvas"
import "antd/dist/antd.css"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/camera'>
          <Camera />
        </Route>
        <Route path='/microphone'>
          <Microphone />
        </Route>
        <Route path='/canvas'>
          <Canvas />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
