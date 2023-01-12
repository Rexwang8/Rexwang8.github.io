import { Navbar, Container, Col, Nav, NavDropdown, Dropdown, Form, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import DropdownModifier from "./ModifierDropdown";



function ModifierNavbar(props) {

  const handleClick = (e) => {
    e.preventDefault();
    props.toggleDark();
  };

  let darkModeText = props.dark ? "Dark Mode" : "Light Mode";
  let darkModestr = props.dark ? 'dark' : 'light';
  return (
    <div>
      <Navbar bg={darkModestr} expand='lg'>
        <Container>
          <Col xs={3}><Link
            to={{
              pathname: "/resource/ai/",
            }}>
            <Navbar.Brand> <p className="darkModeText">Modifiers</p></Navbar.Brand>
          </Link></Col>

            <Col xs={5}><DropdownModifier value={props.ddval} handleSelect={props.handleSelect}></DropdownModifier></Col>
          <Col><Button className="darkModeButton" onClick={handleClick}>{darkModeText}</Button></Col>
          

        </Container>
      </Navbar>
    </div>
  );
}

export default ModifierNavbar;
