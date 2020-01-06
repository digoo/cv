/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import BarMobile from '../../../components/Bar/BarMobile';

import white from '../../../assets/images/white.png';
import comments from '../../../assets/images/comments.svg';
import retweet from '../../../assets/images/retweet.svg';
import like from '../../../assets/images/like.svg';
import message2 from '../../../assets/images/message2.svg';

export default function Port() {
  return (
    <>
      <BarMobile tab="edu" />
      <section className="timeline">
        <nav>
          <Link to="/cv/experience">Work experience</Link>
          <Link to="/cv/education">Education</Link>
          <Link to="/cv/portfolio" className="active">
            Portfólio
          </Link>
        </nav>

        <ul className="tweets">
          <li>
            <img src={white} alt="" />
            <div className="tweet">
              <strong>
                <a
                  href="https://github.com/digoo/Introduction-to-NodeJS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction To NodeJS
                </a>
                <span>
                  {' '}
                  <br />
                  NodeJS - Express
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>
              Modulo 01 from bootcamp from rocketseat.com.br<br /><br />

With this module I learned about:<br /><br />

Node JS -&gt; Express JS -&gt;<br /><br />

create a CRUD (Create, read, update(put) and delete)<br /><br />

Create middlewares with use function<br /><br />

    using default middleware (server.use(function() or command))<br />
    using middleware as parameter of a method<br /><br />

JSON as default protocol<br /><br />

route &gt; route params &gt; query params<br /><br />

Manipulate an array and an array object in real time with http methods (POST, GET, PUT, DELETE)<br /><br />

Learned about common HTTP code 1xx(Informational), 2xx(Success), 3xx(Redirection), 4xx(Client error), 5xx(Server error) 200: success 201: created 301: moved perm 302: moved 400: bad request 401: unauth 404: not found 500: internal server error<br /><br />
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
                <a href="#">
                  <img src={message2} alt="message" /> 33
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={white} alt="" />
            <div className="tweet">
              <strong>
                <a
                  href="https://github.com/digoo/Introduction-to-ReactJS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction To ReactJS
                </a>
                <span>
                  {' '}
                  <br />
                  Babel - Webpack - React - React-dom - prop-types
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Module 04 - Introduction to ReactJS
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
                <a href="#">
                  <img src={message2} alt="message" /> 33
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={white} alt="" />
            <div className="tweet">
              <strong>
                <a
                  href="https://github.com/digoo/Introduction-to-ReactJS-Challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction To ReactJS - Challenge
                </a>
                <span>
                  {' '}
                  <br />
                  Babel - Webpack - React - React-dom - prop-types - Figma
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Module 04 - Challenge - Create an interface like facebook based on a sketch file</p>
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
                <a href="#">
                  <img src={message2} alt="message" /> 33
                </a>
              </div>
            </div>
          </li>
          <li>
            <img src={white} alt="" />
            <div className="tweet">
              <strong>
                <a
                  href="https://github.com/digoo/Introduction-to-React-Native"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction To React-Native
                </a>
                <span>
                  {' '}
                  <br />
                  React-Native (Libraries) - prop-types - jetifier -
                  Async-Storage - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Simple introduction to react-native, navigation through pages, holding information, etc</p>
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
                <a href="#">
                  <img src={message2} alt="message" /> 33
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
