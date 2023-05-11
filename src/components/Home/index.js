// Write your code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-route-container">
        <Header />
        <div className="home-image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
            className="sm-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
            className="lg-image"
          />
        </div>
      </div>
    )
  }
}

export default Home
