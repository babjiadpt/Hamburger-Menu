// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-route-container">
    <Header />
    <div className="about-image-container ">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-image"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-image"
      />
    </div>
  </div>
)

export default About
