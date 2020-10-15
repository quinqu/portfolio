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
        <Content > 
  
        <div className="contact-buttons">
          <h3 className="display-5 font-weight-light"> Connect on LinkedIn</h3>
          <a className="btn btn-primary" href="https://linkedin.com/in/quinq">LinkedIn</a>

          <h3 className="display-5 font-weight-light"> Follow me on Github </h3>
          <a className="btn btn-secondary git" href="https://github.com/quinqu">Github</a>

          <h3 className="display-5 font-weight-light"> Follow me on Spotify</h3>
          <a className="btn btn-secondary spot" href="https://open.spotify.com/user/quinruby">Spotify</a>

          <h3 className="display-5 font-weight-light"> Email me for everything else </h3>
          <a className="btn btn-secondary" href="mailto:quinruby0@gmail.com"> Email </a>

          </div>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
