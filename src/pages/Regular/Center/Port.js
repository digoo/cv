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
            Portfolio
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
              Module 01 from bootcamp from rocketseat.com.br<br /><br />
              With this module I learned about:<br /><br />
              Node JS -&gt; Express JS -&gt;<br />
              create a CRUD (Create, read, update(put) and delete)<br />
              Create middlewares with use function<br />
              using default middleware (server.use(function() or command))<br />
              using middleware as parameter of a method JSON as default protocol route &gt; route params &gt; query params<br /><br />
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
          <li>
            <img src={white} alt="" />
            <div className="tweet">
              <strong>
                <a
                  href="https://github.com/digoo/BarberApp-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BarberApp - BackEnd
                </a>
                <span>
                  {' '}
                  <br />
                  NodeJS - sequelize - yup - express - date-fns - eslint -
                  sucrase - etc
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Backend from an application to barbers in javascript</p>
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
                  href="https://github.com/digoo/BarberApp-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BarberApp - FrontEnd
                </a>
                <span>
                  {' '}
                  <br />
                  React - immer - polished - date-fns - styled-components -
                  redux - redux-saga - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>FrontEnd application to barbers</p>
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
                  href="https://github.com/digoo/MeetApp-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MeetApp - backend
                </a>
                <span>
                  <br />
                  NodeJS - sequelize - yup - express - date-fns - eslint -
                  sucrase - etc
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>backend from an application that manage public meetings</p>
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
                  href="https://github.com/digoo/MeetApp-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MeetApp-Frontend
                </a>
                <span>
                  <br />
                  React - immer - polished - date-fns - styled-components -
                  redux - redux-saga - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Frontend application for a meeting app</p>
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
                  href="https://github.com/digoo/List-Github-repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  List-Github-repository
                </a>
                <span>
                  <br />
                  React - polished - axios - styled-components - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>This project uses github api to list repositories and kept then in localStorage</p>
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
                  href="https://github.com/digoo/List-Github-repository-ReactNative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  List-Github-repository-ReactNative
                </a>
                <span>
                  <br />
                  react-native - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>This project uses github api to list repositories and kept then in AsyncStorage</p>
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
                  href="https://github.com/digoo/OnlineStore-With-Redux-Saga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OnlineStore-With-Redux-Saga
                </a>
                <span>
                  <br />
                  React - immer - polished - date-fns - styled-components -
                  redux - redux-saga - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>This project simulates an online store and is being managed by redux and redux-saga</p>
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
                  href="https://github.com/digoo/OnlineStore-With-Redux-Saga-ReactNative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OnlineStore-With-Redux-Saga-ReactNative
                </a>
                <span>
                  <br />
                  React-Native - immer - polished - date-fns - styled-components
                  - redux - redux-saga - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>This project uses reactNative to list itens in a online store (redux and saga also included)</p>
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
                  href="https://github.com/digoo/Introduction-to-React-Hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction-to-React-Hooks
                </a>
                <span>
                  <br />
                  React - React-Hooks - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Simple introduction to React-Hooks </p>
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
                  href="https://github.com/digoo/Hooks-Challenge---OnlineStore-adding-hooks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hooks-Challenge - OnlineStore-adding-hooks
                </a>
                <span>
                  <br />
                  React - immer - polished - date-fns - styled-components -
                  redux - redux-saga - axios - Babel - eslint
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Added hooks to an existent project of online store</p>
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
                  href="https://github.com/digoo/boxApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BoxApp - GymApp
                </a>
                <span>
                  <br />
                  NodeJS - sequelize - yup - express - date-fns - eslint -
                  sucrase - etc
                </span>
              </strong>
              {/* prettier-ignore */}
              <p>Still in development (backend)<br/>
              This app will suite a crossfit/crossTrainning gyms to set appointments and show exercises</p>
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
