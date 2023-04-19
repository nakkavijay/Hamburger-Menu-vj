// Write your code here
import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundImageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundContent>
      <NotFoundImageContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <NotFoundHeading>Lost Your Way?</NotFoundHeading>
        <NotFoundDescription>
          Sorry, we cannot find that page, You will find lots to explore on the
          home page
        </NotFoundDescription>
      </NotFoundImageContainer>
    </NotFoundContent>
  </NotFoundContainer>
)

export default NotFound
