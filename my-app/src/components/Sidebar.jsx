import React from "react";

/* BOOSTRAP */
import Button from "react-bootstrap/Button";
import { House, Book, Search } from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

/*IMPORTA COMPONENTI */

import SearchBar from "./SearchBar";

function Sidebar() {
  return (
    <Container fluid="md">
      <Row>
        <Col lg={2}>
          <Nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="container flex-column align-items-start">
              <Container className="navbar-brand text-light " href="index.html">
                <Row>
                  <Col xs={6} md={4}>
                    <Image src="../assets/logo/logo.png" alt="Spotify Logo" />
                  </Col>
                </Row>
              </Container>

              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <Search />
                </span>
              </Button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex flex-column justify-content-center">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" href="#">
                      {" "}
                      <House size={30} />
                      &nbsp; Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" href="#">
                      {" "}
                      <Book size={30} />
                      &nbsp; Your Library
                    </Nav.Link>
                  </Nav.Item>

                  {/*--------------- SEARCH BAR ---------------*/}

                  <Col>
                    <SearchBar />
                  </Col>

                  {/*-------------------------- ---------------*/}
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <Button className="btn signup-btn btn-light rounded-pill">
                Sign Up
              </Button>
              <Button className="btn login-btn btn-outline-light bg-transparent rounded-pill">
                Login
              </Button>
              <div>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </div>
            </div>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
