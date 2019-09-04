/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';

import BarMobile from '../../../components/Bar/BarMobile';

import avatarDigo from '../../../assets/images/avatarDigo.jpg';
import avatar from '../../../assets/images/avatar.png';
import aRodrigo from '../../../assets/images/aRodrigo.jpg';
import email from '../../../assets/images/url.svg';
import place from '../../../assets/images/place.svg';
import linkedln from '../../../assets/images/linkedin.svg';
import whatsapp from '../../../assets/images/whatsapp.svg';
import github from '../../../assets/images/github.svg';
import born from '../../../assets/images/born.svg';
import images from '../../../assets/images/images.svg';

import followers from '../../../assets/images/followers.svg';

export default function Info() {
  return (
    <>
      <BarMobile tab="info" />
      <aside className="profile">
        <img className="avatar" src={aRodrigo} alt="Rodrigo Lopes" />
        <h1>Rodrigo Lopes</h1>
        <span>@RodrigoLopes</span>
        <p>ReactJS, React-Native, Node.js</p>
        <ul className="list">
          <li>
            <img src={place} alt="Place" /> São Paulo, Brazil
          </li>
          <li>
            <img src={email} alt="email" />{' '}
            <a href="mailto:rocostalopes@gmail.com"> rocostalopes@gmail.com</a>
          </li>
          <li>
            <img src={linkedln} alt="Linkedln" />{' '}
            <a
              href="https://www.linkedin.com/in/rodlop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rodlop{' '}
            </a>
          </li>
          <li>
            <img src={github} alt="Github" />
            <a
              href="https://github.com/digoo?utf8=%E2%9C%93&tab=repositories&q=&type=source&language="
              target="_blank"
              rel="noopener noreferrer"
            >
              @digoo
            </a>
          </li>
          <li>
            <img src={whatsapp} alt="Whatsapp" />
            <a
              href="https://wa.me/5511980292223"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a Whatsapp
            </a>
          </li>
          <li>
            <img src={born} alt="Born" /> Born the 12th of the November 1988
          </li>
          <li>
            <img src={github} alt="Github" />
            <a
              href="https://github.com/digoo/cv/tree/master/src"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
          </li>
        </ul>

        <div className="widget followers">
          <strong>
            <img src={followers} alt="Followers" /> 73 followers that you know{' '}
          </strong>
          <ul>
            <li>
              <img src={avatarDigo} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
            <li>
              <img src={avatarDigo} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
            <li>
              <img src={avatarDigo} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
            <li>
              <img src={avatarDigo} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
            <li>
              <img src={avatarDigo} alt="" />
            </li>
            <li>
              <img src={avatar} alt="" />
            </li>
          </ul>
        </div>

        <div className="widget images">
          <strong>
            <img src={images} alt="images" /> 274 Photos and Videos
          </strong>
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </aside>
    </>
  );
}
