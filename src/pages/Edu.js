import React from 'react';
import { Link } from 'react-router-dom';

// import selfEmployed from '../assets/images/selfEmployed.png';
// import ericsson from '../assets/images/Ericsson.png';
import white from '../assets/images/white.png';

import comments from '../assets/images/comments.svg';
import retweet from '../assets/images/retweet.svg';
import like from '../assets/images/like.svg';
import message2 from '../assets/images/message2.svg';

import rocketseat from '../assets/images/rocketseat.jpg';
import udemy from '../assets/images/udemy.png';
import unip from '../assets/images/unip.png';
import usp from '../assets/images/usp.jpg';
import axis from '../assets/images/axis_school.svg';
import saga from '../assets/images/saga.png';
import istqb from '../assets/images/istqb.png';

export default function Express() {
  return (
    <section className="timeline">
      <nav>
        <Link to="/cv/">Experiência</Link>
        <Link to="/cv/education" className="active">
          Educação
        </Link>
        <Link to="/cv/portfolio">Portfólio</Link>
      </nav>

      <ul className="tweets">
        <li>
          <img src={rocketseat} alt="Rocketseat" />
          <div className="tweet">
            <strong>
              Rocketseat
              <span>
                {' '}
                Melhoramento Pessoal - Tecnologia da Informação
                <br />
                Jun 2019 - Presente
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>
            Aprendendo JavaScript (Node.js, ReactJS, React-Native, Flux, React Hooks ) - CSS com Flexbox, SSR com ReactJS, Proto UI, Animação com ReactNative, metodo de pagamento com Node.js, Geo e Mapas, Kubernetes, OmniStack SaaS, AdonisJS, Offline-First, Testes, Testes automatizados.
                  </p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 23
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 12
              </a>
              <a href="/">
                <img src={like} alt="like" /> +999
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 1
              </a>
            </div>
          </div>
        </li>

        <li>
          <img src={udemy} alt="Udemy" />
          <div className="tweet">
            <strong>
              Udemy alumni <br />
              <span>
                {' '}
                Self-improvement - Self-Awareness and Personal Assessment <br />
                Mar 2019 – Mai 2019
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>Learning Java at Udemy from basic to expert.Learning Java at Udemy from basic to expert.</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 4
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 22
              </a>
              <a href="/">
                <img src={like} alt="like" /> 66
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 4
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={unip} alt="UNIP" />
          <div className="tweet">
            <strong>
              Universidade Paulista <br />
              <span>
                {' '}
                Bacharel in Information System - Gestão de Sistemas de
                Informação <br />
                2010 – 2013
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>Bacharel em sistema de informação</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 1
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 7
              </a>
              <a href="/">
                <img src={like} alt="like" /> 42
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 1
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={usp} alt="USP" />
          <div className="tweet">
            <strong>
              Universidade de São Paulo <br />
              <span>
                {' '}
                SDN/Cloud Computing - Computação Científica
                <br />
                2014 – 2014
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>Curso de melhoramento técnico com certificado</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 1
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 0
              </a>
              <a href="/">
                <img src={like} alt="like" /> 7
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 2
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={axis} alt="Axis Art" />
          <div className="tweet">
            <strong>
              Axis School of Visual effects <br />
              <span>
                {' '}
                Computer Games and Programming Skills
                <br />
                2015 – 2016
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>3 cursos tecnicos foram feitos nesse periodo <br/>
            1 - Modelagem de personagens com Maya <br/>
            2 - Montagem de cenários com Unreal 4 <br/>
            3 - Do zero ao avançado em Unreal</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 3
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 4
              </a>
              <a href="/">
                <img src={like} alt="like" /> 99
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 0
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={saga} alt="Saga art" />
          <div className="tweet">
            <strong>
              Saga school of art and visual effect <br />
              <span>
                {' '}
                Game and Interactive Media Design
                <br />
                2015 – 2016
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>Curso para iniciantes (photoshop, Maya, Unreal, etc)</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 2
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 1
              </a>
              <a href="/">
                <img src={like} alt="like" /> 3
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 4
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={istqb} alt="ISTQB" />
          <div className="tweet">
            <strong>
              CTFL - Foundation Test Certification <br />
              <span>
                {' '}
                ISTQB - International Software Testing Qualifications Board
                <br />
                Emitido Set 2015 - Issued Sep 2015
              </span>
            </strong>
            {/* prettier-ignore */}
            <p>Certificação internacional de tester, sem validade final</p>
            <div className="actions">
              <a href="/">
                <img src={comments} alt="Comments" /> 2
              </a>
              <a href="/">
                <img src={retweet} alt="retweet" /> 1
              </a>
              <a href="/">
                <img src={like} alt="like" /> 3
              </a>
              <a href="/">
                <img src={message2} alt="message" /> 4
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={white} alt="white" />
          <div className="tweet" />
        </li>
      </ul>
    </section>
  );
}
