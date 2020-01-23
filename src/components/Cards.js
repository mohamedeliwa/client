import React from 'react'
import {useLocation} from 'react-router-dom'
import {Container, Card, CardColumns} from 'react-bootstrap'
import CoverBook from '../assets/cover_book.jpg'
import CardImg from '../assets/cardImg.jpeg'
import CardsPic from '../assets/cardsPic.jpeg'
import '../styles/List.scss'
export default function Cards() {
    let match=useLocation()
    return (
        // <Container>
            <CardColumns>
            {/* <h1 >{match.pathname}</h1> */}
            <Card className="books-card" onClick={() => alert("Hey, this is books tab")}>
            <Card.Img src={CoverBook} alt="Card image" />
            <Card.ImgOverlay >
              <Card.Title className="overlay-text">Card title</Card.Title>
              <Card.Text className="overlay-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text className="overlay-text">Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-dark books-card" onClick={() => alert("Hey, this is books tab")}>
            <Card.Img src={CardImg} alt="Card image" />
            <Card.ImgOverlay >
              <Card.Title className="overlay-text">Card title</Card.Title>
              <Card.Text className="overlay-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text className="overlay-text">Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-dark books-card" onClick={() => alert("Hey, this is books tab")}>
            <Card.Img src={CardsPic} alt="Card image" />
            <Card.ImgOverlay >
              <Card.Title className="overlay-text">Card title</Card.Title>
              <Card.Text className="overlay-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text className="overlay-text">Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          </CardColumns>
        // </Container>

    )
}
