import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/"  element={<News key="General" country="in" category="General" color="danger"/>} />
              <Route exact path="/Business" element={<News country="in"  key="Business" category="Business" color="primary"/>} />
              <Route exact path="/Sports"  element={<News country="in" key="Sports" category="Sports" color="success"/>} />
              <Route exact path="/Entertainment"  element={<News country="in" key="Entertainment" category="Entertainment" color="info"/>} />
              <Route exact path="/Science" element={<News country="in" key="Science" category="Science" color="warning"/>} />
              <Route exact path="/Technology"  element={<News country="in" key="Technology" category="Technology" color="warning"/>} />
              <Route exact path="/Health"  element={<News country="in" key="Health" category="Health" color="dark"/>} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}