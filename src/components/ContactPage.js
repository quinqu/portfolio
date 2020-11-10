import React from 'react';
import Form from 'react-bootstrap/Form'
import Content from './Content';
import Comp from './Comp';
import Button from 'react-bootstrap/Button'

class ContactPage extends React.Component {

  
  render () {
    return (
      <div> 
       

        <Comp className="contact-header" title={this.props.title} subtitle={this.props.subtitle} text={this.props.text}/> 

        <Content > 
        <div className="contact-title">
        <img className="contact-img" src={"https://i.pinimg.com/originals/ef/a9/53/efa9539f444c95598e8fc1202d8397f4.jpg"} alt="avatar"/>
        <div className="contact-buttons">
          
          <a className="btn btn-primary" href="https://linkedin.com/in/quinq">LinkedIn</a>

          <a className="btn btn-secondary git" href="https://github.com/quinqu">Github</a>

          <a className="btn btn-secondary spot" href="https://open.spotify.com/user/quinruby">Spotify</a>

          <a className="btn btn-secondary" href="mailto:quinruby0@gmail.com"> Email </a>

          </div>
          </div>

        </Content>
      </div>
    );
  }
}

export default ContactPage;
