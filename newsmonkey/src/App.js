import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import TopLoadingBar from './components/TopLoadingBar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      progress : 0
    }
  }

  setProgress = (setprogressval) => {
    this.setState({
        progress: setprogressval
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <TopLoadingBar progress={this.state.progress}/>
          <div>
            <Routes>
              <Route exact path="/"  element={<News setProgress={this.setProgress}  key="General" country="in" category="General" color="danger"/>} />
              <Route exact path="/Business" element={<News setProgress={this.setProgress}  country="in"  key="Business" category="Business" color="primary"/>} />
              <Route exact path="/Sports"  element={<News setProgress={this.setProgress}  country="in" key="Sports" category="Sports" color="success"/>} />
              <Route exact path="/Entertainment"  element={<News setProgress={this.setProgress}  country="in" key="Entertainment" category="Entertainment" color="info"/>} />
              <Route exact path="/Science" element={<News setProgress={this.setProgress}  country="in" key="Science" category="Science" color="warning"/>} />
              <Route exact path="/Technology"  element={<News setProgress={this.setProgress}  country="in" key="Technology" category="Technology" color="warning"/>} />
              <Route exact path="/Health"  element={<News setProgress={this.setProgress}  country="in" key="Health" category="Health" color="dark"/>} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}