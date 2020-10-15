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
          subtitle:"A playlist curator based on your pace",
          imgsrc: tempo,
          link: "",
          selected: true,

        },
        {
          id: 1,
          title: "Echo Server",
          subtitle: "A concurrent echo server with client",
          imgsrc: echo,
          link: "",
          selected: true,

        },
        {
          id: 2,
          title: "Ridshare Rails",
          subtitle: "A rideshare app (like uber)",
          imgsrc: rideshare,
          link: "",
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