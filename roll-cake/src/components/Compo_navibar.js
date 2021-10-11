import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import SearchBar from "./Nav_SearchBar";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navigation = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="#e74333"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="32"
              alt="logo"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/hotdeal">핫딜</Nav.Link>
            </Nav>
            <Nav>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

// 출처
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6
// https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
