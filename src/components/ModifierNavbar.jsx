import { Navbar, Container, Col, Nav, NavDropdown, Dropdown, Form, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import DropdownModifier from "./ModifierDropdown";



function ModifierNavbar(props) {

  


  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Col><Link
            to={{
              pathname: "/resource/ai/",
            }}>
            <Navbar.Brand>Modifiers</Navbar.Brand>
          </Link></Col>
            <Col><DropdownModifier value={props.ddval} handleSelect={props.handleSelect}></DropdownModifier></Col>
          
          

        </Container>
      </Navbar>
    </div>
  );
}

export default ModifierNavbar;
