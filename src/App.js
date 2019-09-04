/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';

import Routes from './pages/Regular/Center/routes';
import RoutesMobile from './pages/Mobile/routes';

import Info from './pages/Regular/Left/Info';
import Add from './pages/Regular/Right/Add';

import GlobalStyle from './styles/global';

import home from './assets/images/home.svg';
import notification from './assets/images/notification.svg';
import message from './assets/images/message.svg';
import logo from './assets/images/cat.svg';
import aRodrigo from './assets/images/aRodrigo.jpg';
import banner from './assets/images/Banner.jpg';
import more from './assets/images/more.svg';

import { Docked, Header, Banner, Bar, Wrapper } from './styles';

export default function App() {
  return (
    <>
      <div id="container1">
        <div id="container2">
          <Header>
            <div className="content">
              <nav>
                <ul>
                  <li>
                    <img src={home} alt="Home" />
                    <p>Home</p>
                  </li>
                  <li>
                    <img src={notification} alt="Notifications" />
                    <p>Notifications</p>
                  </li>
                  <li>
                    <img src={message} alt="Messages" />
                    <p>Messages</p>
                  </li>
                </ul>
              </nav>
              <img className="center" src={logo} alt="logo_meowtter" />
              <div className="right-side">
                <input type="text" placeholder="Search on Meowtter" />
                <img src={aRodrigo} alt="Rodrigo Lopes" />
                <button type="button">Gurrhr</button>
              </div>
            </div>
          </Header>
          <Docked />
          <Banner>
            <img src={banner} alt="Banner" />
            <h1>
              Este modelo de CV foi feito com as tecnologias: ReactJS, CSS
              (styled-component) & Media queries
            </h1>
          </Banner>

          <Bar>
            <div className="content">
              <ul>
                <li className="active">
                  <span>About</span>
                  <strong>Me</strong>
                </li>
                <li className="other">
                  <span>Gurrhrs</span>
                  <strong>3654</strong>
                </li>
                <li className="other">
                  <span>Following</span>
                  <strong>3387</strong>
                </li>
                <li className="other">
                  <span>Followers</span>
                  <strong>2464</strong>
                </li>
                <li className="other">
                  <span>Favorites</span>
                  <strong>345</strong>
                </li>
                <li className="other">
                  <span>Lists</span>
                  <strong>1</strong>
                </li>
                <li className="other">
                  <span>Moments</span>
                  <strong>0</strong>
                </li>
              </ul>

              <div className="bar-right">
                <button type="button">Follow</button>
                <img src={more} alt="More" />
              </div>
            </div>
          </Bar>

          <Wrapper>
            <div className="contentMobile">
              <RoutesMobile />
            </div>
            <div className="content">
              <Info />

              <Routes />

              <Add />
            </div>
          </Wrapper>

          <GlobalStyle />
        </div>
      </div>
    </>
  );
}
