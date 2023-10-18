import React, { useState } from "react";
import {Container } from "react-bootstrap";
import Background from '../../Assets/Background.mp4'
import Typewriter from 'typewriter-effect'

function Home() {
  const [props] = useState({
    title: 'Welcome to ',
  })
  return (
      <Container fluid className="home-section" id="home">
        <video autoPlay loop muted src={Background} />
        <div id='TypeWriter'>
          <h1 id="title">{props.title}
            <Typewriter options={{
              autoStart: true,
              loop: true,
              strings: ["General Motors", "Passion", "Perfection", "Work"]
            }} />
          </h1>
        </div>
      </Container>
  );
}

export default Home;
