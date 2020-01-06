/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ericsson from '../assets/images/ericsson.jpg';
import rocketseat from '../assets/images/rocketseat.jpg';
import reactjs from '../assets/images/reactjs.png';
import addfriend from '../assets/images/addfriend.svg';

export default function Add() {
  return (
    <aside className="widgets">
      <div className="widget follow">
        <div className="title">
          <strong>Who to follow</strong>
          <a href="#">Refresh</a>
          <a href="#">View all</a>
        </div>

        <ul>
          <li>
            <div className="profile">
              <img src={ericsson} alt="Ericsson" />
              <div className="info">
                <a
                  href="https://twitter.com/ericsson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>
                    Ericsson <span>@ericsson</span>
                  </strong>
                </a>

                <a
                  href="https://twitter.com/ericsson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">Follow</button>
                </a>
              </div>
            </div>
            <a href="#">x</a>
          </li>

          <li>
            <div className="profile">
              <img src={rocketseat} alt="rocketseat" />
              <div className="info">
                <a
                  href="https://twitter.com/rocketseat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>
                    Rocketseat <span>@rocketseat</span>
                  </strong>
                </a>

                <a
                  href="https://twitter.com/rocketseat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">Follow</button>
                </a>
              </div>
            </div>
            <a href="#">x</a>
          </li>

          <li>
            <div className="profile">
              <img src={reactjs} alt="reactjs" />
              <div className="info">
                <a
                  href="https://twitter.com/reactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>
                    React <span>@reactjs</span>
                  </strong>
                </a>

                <a
                  href="https://twitter.com/reactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button">Follow</button>
                </a>
              </div>
            </div>
            <a href="#">x</a>
          </li>
          <li className="addFriends">
            <div className="addfriend">
              <img src={addfriend} alt="Add Friends" />
              <span>
                <a
                  href="https://twitter.com/rodriclopes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Friends
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="widget trends">
        <div className="title">
          <strong>Trends</strong>
          <a href="#">Change</a>
        </div>

        <ul>
          <li>
            <span>#BestOfTheDay</span>
          </li>
          <li>
            <span>#madeToHireMe</span>
          </li>
          <li>
            <span>#CheckTheSourceCode</span>
          </li>
          <li>
            <span>I&apos;dRememberWhereISawIt</span>
          </li>
          <li>
            <span>#womenleaders</span>
          </li>
          <li>
            <span>#UXDesign</span>
          </li>
          <li>
            <span>#UiDesign</span>
          </li>
          <li>
            <span>#AlmostThere</span>
          </li>
        </ul>
      </div>

      <div className="widget link">
        <span>© 2099 Meowtter</span>
        <span>À propos</span>
        <span>Centre d&apos;assistance</span>
        <span>Conditions</span>
        <span>Polítíque de confidentialité</span>
        <span>Cookies</span>
        <span>Informations sur la publicité</span>
      </div>
    </aside>
  );
}
