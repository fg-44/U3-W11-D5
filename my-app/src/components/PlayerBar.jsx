import React from "react";
import Button from "react-bootstrap/Button";

/* IMPORTA BOOSTRAP */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* ICONE BOOSTRAP */
import {
  PlayFill,
  Shuffle,
  RewindFill,
  FastForwardFill,
  Repeat,
} from "react-bootstrap-icons";

function PlayerBar() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <Button className="bg-transparent border-0">
                  <Shuffle color="gray" size={20} />
                </Button>

                <Button className="bg-transparent border-0">
                  <RewindFill color="gray" size={20} />
                </Button>

                <Button className="bg-transparent border-0">
                  <PlayFill color="gray" size={33} />
                </Button>

                <Button className="bg-transparent border-0">
                  <FastForwardFill color="gray" size={20} />
                </Button>

                <Button className="bg-transparent border-0">
                  <Repeat color="gray" size={20} />
                </Button>
              </div>
              <div class="progress mt-3">
                <div role="progressbar" color="gray"></div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PlayerBar;
