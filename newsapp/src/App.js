// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route exact path ="/"  element={<News pageSize={10} key="general" country="in" category="general" />}></Route>
          <Route exact path ="/business"  element={<News pageSize={10} key="business" country="in" category="business" />}></Route>
          <Route exact path ="/entertainment"  element={<News pageSize={10} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path ="/health"  element={<News pageSize={10} key="health" country="in" category="health" />}></Route>
          <Route exact path ="/science"  element={<News pageSize={10} key="science" country="in" category="science" />}></Route>
          <Route exact path ="/sports"  element={<News pageSize={10} key="sports" country="in" category="sports" />}></Route>
          <Route exact path ="/technology"  element={<News pageSize={10} key="technology" country="in" category="technology" />}></Route>
 
          </Routes>
          
        </Router>
      </div>
    )
  }
}


