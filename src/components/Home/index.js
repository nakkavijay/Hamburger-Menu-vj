// Write your code here
import Header from '../Header'

import {
  MobileHomeImage,
  DesktopHomeImage,
  HomeContainer,
  HomeImageContainer,
} from './styledComponents'

const About = () => (
  <HomeContainer>
    <Header />
    <HomeImageContainer>
      <MobileHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <DesktopHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </HomeImageContainer>
  </HomeContainer>
)

export default About
