import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComputerVision from '../computer-vision/computer-vision'
import Home from "../home/Home";
import Nlp from "../nlp/nlp";

const navigation = [
    {name: "home", href: "/", current:true},
    {name: "computer_vision", href: "/computer_vision", current:false},
    {name: "nlp", href: "/nlp", current:false},
]

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {navigation.map((item, idx) => (
                  <Nav.Link as={Link} to={item.href} key={idx}>
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Add your routes here */}
        <Routes>
        <Route exact path="/" element={<Home/>}/ >
            {/* Your home component */}
 
  
          <Route path="/computer_vision" element={<ComputerVision/>}/ >
   
          <Route path="/nlp" element={<Nlp/>} />
     
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
