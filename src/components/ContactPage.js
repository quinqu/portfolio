import React from 'react';
import Form from 'react-bootstrap/Form'
import Content from './Content';
import Comp from './Comp';
import Button from 'react-bootstrap/Button'

class ContactPage extends React.Component {

  
  render () {
    return (
      <div> 
        <Comp title={this.props.title} subtitle={this.props.subtitle} text={this.props.text}/> 
        <Content> 
          <h5> </h5>
          <h5> </h5>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
