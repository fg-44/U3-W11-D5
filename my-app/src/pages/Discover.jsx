import React from 'react'

/* IMPORTA BOOSTRAP */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";

/* IMPORTA COMPONENT */

import SongCard from '../components/SongCard'

const Discover = () => {
    return (
      <Container fluid="md">
        <Row>
          <Col md={9} className="offset-md-3 mainPage my-3">
            <Row>
              <Col md={9} lg={11} className="mainLinks d-none d-md-flex">
                <Col>
                  <Link to="#" className="link">
                    TRENDING
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="link">
                    PODCAST
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="link">
                    MOODS AND GENRES
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="link">
                    NEW RELEASES
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="link">
                    DISCOVER
                  </Link>
                </Col>
              </Col>
            </Row>
  
            {/*------------------------------------- WRAP MUSICA -------------------------------------*/}
  
            <Row>
              <Col md={10}>
                <Row id="rock">
                  <h2>Rock Classics</h2>
                  <Col
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  >
                    {[1, 2, 3, 4 ].map((song, i) => (
                      <SongCard key={song.key} song={song} i={i} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
  
            <Row>
              <Col md={10}>
                <Row id="pop">
                  <h2>Pop Culture</h2>
  
                  <Col
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  >
                    {[1, 2, 3, 4 ].map((song, i) => (
                      <SongCard key={song.key} song={song} i={i} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
  
            <Row>
              <Col md={10}>
                <Row id="hiphop">
                  <h2>#HipHop</h2>
                  <Col
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  >
                    {[1, 2, 3, 4 ].map((song, i) => (
                      <SongCard key={song.key} song={song} i={i} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
  
            {/*------------------------------------- WRAP MUSICA -------------------------------------*/}

            
          </Col>
        </Row>
      </Container>
    );
  };

export default Discover
