import React from 'react';
import Form from 'react-bootstrap/Form'
import Content from './Content';
import Comp from './Comp';
import Button from 'react-bootstrap/Button'

class ContactPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "", 
      email: "", 
      message: "", 
      disabled: false, 
      emailSent: null, 
    }
  }

  handleChange = (event) => {

    const target = event.target; 
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value, 
    })
  }

  handleSubmit = (event) => {
    // prevent the default refresh, disable once message is sent 
    event.preventDefault();
    this.setState({
      disabled: true
    });


  }

  render () {
    return (
      <div> 
        <Comp title={this.props.title} subtitle={this.props.subtitle} text={this.props.text}/> 
        <Content> 
          <Form onSubmit={this.handleSubmit}> 
            <Form.Group>
              <Form.Label htmlFor="full-name"> Full Name </Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/> 
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email"> Email </Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message"> Message </Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/> 
            </Form.Group>
            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}> 
              Send 
            </Button>
            {this.state.emailSent == true && <p className="d-inline success-msg"> Email Sent Successfully!</p>}
            {this.state.emailSent == false && <p className="d-inline err-msg"> Something went wrong...</p>}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
