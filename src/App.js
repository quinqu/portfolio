import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import MusicPage from './components/MusicPage'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'

import NavbarBrand from 'react-bootstrap/NavbarBrand';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Jane Quintero", 
      headerLinks: [ 
          {title: "projects", path: "/projects"}, 
          {title: "music", path: "/music"}, 
          {title: "contact", path: "/contact"}, 
          {title: "home", path: "/"}, 
      ],

      home: {
        title: "Engineer/ Musician/ Artist/",
        subtitle: "Welcome to my portfolio",
        text: ""
      },
      projects: {
        title: "Projects",
        subtitle: "Ruby, Golang, Javascript, and More",
        text: ""
      },
      music: {
        title: "Music",
        subtitle: "Indie tunes, synths, guitars, keys, bedroom studio",
        text: ""
      },
      contact: {
        title: "Let's Connect",
        subtitle: "",
        text: ""
      },

    }
  }
  render() {
    return (
      <Router> 
        <Container className="p-0" fluid={true}> 
          <Navbar className="border-bottom header-color" bg="#E9967A" expand="lg"> 
            <Navbar.Brand className="display-3"> Jane Quintero </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0"/> 
            <Navbar.Collapse id="navbar-toggle"> 
            <Nav className="ml-auto navig-link" > 
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/music">Music</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
            </Navbar.Collapse>
 
          </Navbar>
            <Route exact path="/" render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>} /> 
            <Route  path="/contact" render={() => <ContactPage title={this.state.contact.title} subtitle={this.state.contact.subtitle} text={this.state.contact.text}/>} /> 
            <Route  path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subtitle={this.state.projects.subtitle} text={this.state.projects.text}/>} /> 
            <Route  path="/music" render={() => <MusicPage title={this.state.music.title} subtitle={this.state.music.subtitle} text={this.state.music.text}/>} /> 
          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
