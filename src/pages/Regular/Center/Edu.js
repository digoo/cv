/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import BarMobile from '../../../components/Bar/BarMobile';

import white from '../../../assets/images/white.png';
import rocketseat from '../../../assets/images/rocketseat.jpg';
import udemy from '../../../assets/images/udemy.png';
import unip from '../../../assets/images/unip.png';
import usp from '../../../assets/images/usp.jpg';
import axis from '../../../assets/images/axis_school.svg';
import saga from '../../../assets/images/saga.png';
import istqb from '../../../assets/images/istqb.png';

import comments from '../../../assets/images/comments.svg';
import retweet from '../../../assets/images/retweet.svg';
import like from '../../../assets/images/like.svg';

export default function Edu() {
  return (
    <>
      <BarMobile tab="edu" />
      <section className="timeline">
        <nav>
          <Link to="/cv/experience">Work experience</Link>
          <Link to="/cv/education" className="active">
            Education
          </Link>
          <Link to="/cv/portfolio">Portfólio</Link>
        </nav>

        <ul className="tweets">
          <li>
            <a
              href="https://rocketseat.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rocketseat} alt="Rocketseat" />
            </a>
            <div className="tweet">
              <strong>
                <a
                  href="https://rocketseat.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rocketseat
                </a>
                <span>
                  {' '}
                  <br />
                  Self-improvement - Information Technology
                  <br />
                  Jun 2019 - Present
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
              Learning JavaScript (Node.js, ReactJS, React-Native, Flux, React Hooks ) <br/><br/>
              - CSS with Flexbox, SSR with ReactJS, Proto UI, Animation with RN, Payment Methods with Node.js, Geo and Maps, Kubernetes, OmniStack SaaS, AdonisJS, Offline-First, Testing, Automated Tests.
                  </p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 23
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 12
                </a>
                <a href="#">
                  <img src={like} alt="like" /> +999
                </a>
              </div>
            </div>
          </li>

          <li>
            <a
              href="https://www.udemy.com/course/java-the-complete-java-developer-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={udemy} alt="Udemy" />
            </a>
            <div className="tweet">
              <strong>
                <a
                  href="https://www.udemy.com/course/java-the-complete-java-developer-course/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udemy
                </a>{' '}
                <br />
                <span>
                  {' '}
                  Self-improvement - Self-Awareness and Personal Assessment{' '}
                  <br />
                  Mar 2019 – Mai 2019
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Learning Java at Udemy from basic to expert.</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 4
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 22
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 66
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
                  Bacharel in Information System <br />
                  2010 – 2013
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Bacharel in Information System</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 1
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 7
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 42
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
                  SDN/Cloud Computing
                  <br />
                  2014 – 2014
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>self-improving program.</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 1
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 0
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 7
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
              <p>Three tecnical programs were made: <br/>
            1 - Character model modeling with maya. <br/>
            2 - Scenario modeling with Unreal 4. <br/>
            3 - From zero to hero in Unreal 4.</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 3
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 4
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 99
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
              <p>From scratch program (photoshop, Maya, Unreal, etc)</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 2
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 1
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 3
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
                  Issued Sep 2015
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>International tester certification, no expiry date.</p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 2
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 1
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 3
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
    </>
  );
}
