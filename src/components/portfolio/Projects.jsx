import React from 'react';
import { Link } from 'react-router-dom';

import 'components/portfolio/Projects.scss';
import exemplifai from 'images/exemplifai.jpeg';
import ttt from 'images/ttt.jpg';
import taggedSentence from 'images/taggedsentence.jpg'

const Projects = () => (
  <section className="Portfolio-section">
    <h2 className="Portfolio-section--header">
      Potentially Interesting Projects
    </h2>

    <div className="Projects">
      <Link to="/pos-tagger" className="Projects-item--link">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${taggedSentence})`
            }}
            className="Posts-item--img"
          />
          <h3 className="Posts-item--title">A Bigram HMM Part-Of-Speech Tagger using Viterbi for Decoding</h3>
        </div>
      </Link>

      <a href="https://www.exemplifai.com" className="Projects-item--link">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${exemplifai})`
            }}
            className="Posts-item--img"
          />
        <h3 className="Posts-item--title">Exemplifai (WIP)</h3>
        </div>
      </a>

      <Link to="/tic-tac-toe" className="Projects-item--link">
        <div className="Projects-item">
          <div
            style={{
              backgroundImage: `url(${ttt})`
            }}
            className="Posts-item--img"
          />
          <h3 className="Posts-item--title">Unbeatable Tic Tac Toe AI</h3>
        </div>
      </Link>
    </div>
  </section>
);

export default Projects;
