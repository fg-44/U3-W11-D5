import React from "react";

/* BOOSTRAP */

import Button from 'react-bootstrap/Button';
import { House, Book } from "react-bootstrap-icons"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
    <Container fluid="md">
      <Row>
        <Col lg={2}>

          <Navbar
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="container flex-column align-items-start">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/logo/logo.png"
                  alt="Spotify Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <ul>
                    <li>
                      <a
                        className="nav-item nav-link d-flex align-items-center"
                        href="#"
                      >
                        <House size={35} />&nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-item nav-link d-flex align-items-center"
                        href="#"
                      >
                        <Book size={35} />&nbsp; Your Library
                      </a>
                    </li>
                    <li>
                      <form className="input-group mt-3" onsubmit="search(event)">
                        <input
                          type="text"
                          class="form-control"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <Button
                            className="btn btn-outline-secondary btn-sm h-100"
                            type="submit"
                          >
                            GO
                          </Button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="nav-btn">
              <Button className="btn signup-btn" type="button">
                Sign Up
              </Button>
              <Button className="btn login-btn" type="button">
                Login
              </Button>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
