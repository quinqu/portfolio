import React from 'react'
import echo from '../assets/echo.jpg';
import tempo from '../assets/tempo.jpg';
import rideshare from '../assets/rideshare.jpg';
import Card from './Card'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


class Circular extends React.Component {

  constructor(props) {
    super(props);
  

    this.state = {
      items : [
        {
          id: 0,
          title: "Tempo",
          subtitle:"A playlist curator based on your running or walking speed. Build with Swift, UIKit, & Ruby on Rails.",
          imgsrc: tempo,
          link: "https://github.com/quinqu/tempo",
          selected: true,

        },
        {
          id: 1,
          title: "Echo Server",
          subtitle: "A pure Go concurrent echo server with client. Encryption using TLS to secure traffic through the network, with authentication implemented.",
          imgsrc: echo,
          link: "https://github.com/quinqu/echo-server",
          selected: true,

        },
        {
          id: 2,
          title: "Rideshare Rails",
          subtitle: "A rideshare app (fake uber). Crafted effective RESTful routing, practiced Agile methodology, used Ruby on Rails.",
          imgsrc: rideshare,
          link: "https://rideshare-app-2020.herokuapp.com/",
          selected: true,
          },
        ]
      }

  }

  makeItems = (items) => {
      return items.map(item => {
        return <Card  key={item.id} item={item} /> 
    })
  }

  render() {
    return (
        <Container fluid={true}>
          <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
          </Row>
        </Container>
    );
  }
}

export default Circular;