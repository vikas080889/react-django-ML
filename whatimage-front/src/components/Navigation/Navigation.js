import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">WhatImage</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/history">ImagesHistory</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
