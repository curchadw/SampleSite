import React, {Component} from 'react'
import '../styles/header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Education from './Education';

class Header extends Component{
  
  
  render(){
   
    return(
    <Router>
      <div>
        <header className='main_header'>
          
          <Navbar sticky="top" collapseOnSelcet expand='lg' bg='dark' variant='dark'>

            <Navbar.Brand href="#home" className='brand'>Curtis Chadwell</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Me</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
              </Nav>
            </Navbar.Collapse>
           
          </Navbar>
         
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default Header;