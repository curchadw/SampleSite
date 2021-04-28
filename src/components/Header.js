import React, {Component} from 'react'
import '../styles/header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component{
  
  
  render(){
   
    return(
      <div>
        <header className='main_header'>
          
          <Navbar sticky="top" collapseOnSelcet expand='lg' bg='dark' variant='dark'>

            <Navbar.Brand href="#home" className='brand'>Curtis Chadwell</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about_me">About Me</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
           
          </Navbar>
          
        <div className='name'>

        </div>
        </header>
      </div>
    )
  }
}

export default Header;