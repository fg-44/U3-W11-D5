import React from 'react';

/* IMPORTA DA BOOSTRAP */

import Button from 'react-bootstrap/Button';

/* IMPORTA DA ICONE */

import { ArrowRight } from 'react-bootstrap-icons';


function SongBar() {
  return (
    <div class="container-fluid fixed-bottom bg-container pt-1">
    <div class="row h-100">
      <div class="col-lg-10 offset-lg-2">
        <div
          class="row h-100 flex-column justify-content-center align-items-center"
        >
          <div class="col-6 col-md-4 playerControls">
            <div class="d-flex">
            <a href="#">
     <Button className="btn btn-primary" ><ArrowRight color="royalblue" size={96} /></Button>
</a>

              <a href="#">
                <img src="assets/playerbuttons/prev.png" alt="prev" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/play.png" alt="play" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/next.png" alt="next" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/repeat.png" alt="repeat" />
              </a>
            </div>
            <div class="progress mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SongBar