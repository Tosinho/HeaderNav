import React from 'react'
import Slider from "react-slick";
import HeaderNav from './Components/Assets/HeaderNav';
import HomeScreen from "./Components/"
import {BrowserRouter ,Switch, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav/>
      <Switch>
      <Route path = "/"exact component= {HomeScreen}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
