/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import BarMobile from '../../../components/Bar/BarMobile';

import selfEmployed from '../../../assets/images/selfEmployed.png';
import ericsson from '../../../assets/images/Ericsson.png';
import white from '../../../assets/images/white.png';

import comments from '../../../assets/images/comments.svg';
import retweet from '../../../assets/images/retweet.svg';
import like from '../../../assets/images/like.svg';

export default function Exp() {
  return (
    <>
      <BarMobile tab="exp" />
      <section className="timeline">
        <nav>
          <Link to="/cv/experience" className="active">
            Work experience
          </Link>
          <Link to="/cv/education">Education</Link>
          <Link to="/cv/portfolio">Portfólio</Link>
        </nav>

        <ul className="tweets">
          <li>
            <img src={selfEmployed} alt="selfEmployed" />
            <div className="tweet">
              <strong>
                FullStack Web Developer
                <span>
                  {' '}
                  <br />
                  Jul 2019 - Present
                  <br />
                  Brazil
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
                Creating Websites and Android/Iphone Apps with Advanced JavaScript language (Node.js as back-end, ReactJS as front-end and React-Native as mobile.
                <br/>
                <br/>
                Also using:<br/><br/>
                - Git<br/>
                - Github<br/>
                - Kubernetes<br/>
                - Docker/Container<br/>
                - Jenkins<br/>
                - Npm<br/>
                - Yarn<br/>
                - CSS<br/>
                - CSS flexbox<br/>
                - SSR<br/>
                - Flux<br/>
                - React-hooks<br/>
                - AdonisJS<br/>
                - SaaS<br/>
                - Server-side rendering<br/>
                - Ui-Proto<br/>
                - Payment Methods with Node.js<br/>
                - Geo location and maps<br/>
              </p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 3
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 4
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 5
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={ericsson} alt="Ericsson" />
            <div className="tweet">
              <strong>
                Ericsson
                <span>
                  <br />8 Years 4 months
                </span>
              </strong>
              <p />
            </div>
          </li>
          <li>
            <img src={white} alt="White" />
            <div className="tweet">
              <strong>
                QA Automation Developer/Engineer <br />
                <span>
                  {' '}
                  Dec 2012 – Abr 2019 Duration 6 years 5 months <br />
                  São Paulo, Brazil
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
                  Acting as coreloop driver on devops environment guaranteeing quality, performance and good
                  results, creating daily/weekly report for daily/weekly meeting. <br/>
                  <br/>
                  In constant communication with working sites around the world like as Campinas and
                  São Jose dos Campos, in Brazil, Frankfurt, in Germany, Chennai, in India, and few others working sites.<br/>
                  <br/>
                  Providing training, driving concepts, opening trouble reports and acting as reviewer
                  of automation code on Gerrit platform. <br/>
                  </p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 3
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 4
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 5
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={white} alt="white" />
            <div className="tweet">
              <strong>
                QA Tester Engineer <br />
                <span>
                  {' '}
                  Dec 2012 – Mar 2014 Duration 1 year 4 months <br />
                  São Paulo, Brazil
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
              Working with different agile teams and performing integration test, e2e test and automation test
              on CBIO/BSCS interface (on the following languages: C++, C#, java, Python) where CBIO/BSCS
              were implemented from Fullstack to Customer projects around the world.
                  </p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 3
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 4
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 5
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={white} alt="White" />
            <div className="tweet">
              <strong>
                Trainee <br />
                <span>
                  {' '}
                  Jan 2011 – Dec 2012 Duration 2 years <br />
                  São Paulo, Brazil
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
                  To make the difference, above all. <br/><br/>
                  Worked with different billing softwares on different areas over Ericsson in Brazil. <br/>
                  Tested given releases with most powerful software of the market and give
                  maintenance when necessary to all customer releases with efficiency and agility.<br/>
                  Empowering the project with my knowledge to improve the time slice
                  against the clock and the major requests of the managers.
                  </p>
              <div className="actions">
                <a href="#">
                  <img src={comments} alt="Comments" /> 3
                </a>
                <a href="#">
                  <img src={retweet} alt="retweet" /> 4
                </a>
                <a href="#">
                  <img src={like} alt="like" /> 5
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
