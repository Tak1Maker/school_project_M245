import React from "react";
import { Container, } from "react-bootstrap";
import Particle from "../Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <div id="All">
          <div className="row">
            <h1 id="contact">Contactez-nous ! </h1>
          </div>
          <div className="row">
            <h4 >Nous nous ferons un plaisir de vous répondre</h4>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Nom/Prénom</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="email" name="email" required />
                <label form="email">Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Numéro</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <a href="mailto:mouttakisalim@gmail.com" className="btn-lrg submit-btn" >Envoyer</a>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;
