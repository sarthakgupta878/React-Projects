// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 10;
  apiKey=process.env.REACT_APP_NEWS_API;
constructor(props) {
  super(props)
  this.state = {
     
     progress:10
  }
}
  

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar height={3} color='red' progress={this.state.progress}/>

          <NavBar />
          <Routes>
          <Route exact path ="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="in" category="general" />}></Route>
          <Route exact path ="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" country="in" category="business" />}></Route>
          <Route exact path ="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />}></Route>
          <Route exact path ="/health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" country="in" category="health" />}></Route>
          <Route exact path ="/science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" country="in" category="science" />}></Route>
          <Route exact path ="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" country="in" category="sports" />}></Route>
          <Route exact path ="/technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" country="in" category="technology" />}></Route>
 
          </Routes>
          
        </Router>
      </div>
    )
  }
}


