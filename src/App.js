/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

import home from './assets/images/home.svg';
import notification from './assets/images/notification.svg';
import message from './assets/images/message.svg';
import logo from './assets/images/cat.svg';
import avatarDigo from './assets/images/avatarDigo.jpg';
import avatar from './assets/images/avatar.png';
import aRodrigo from './assets/images/aRodrigo.jpg';
import banner from './assets/images/Banner.jpg';
import more from './assets/images/more.svg';
import email from './assets/images/url.svg';
import place from './assets/images/place.svg';
import linkedln from './assets/images/linkedin.svg';
import whatsapp from './assets/images/whatsapp.svg';
import github from './assets/images/github.svg';
import born from './assets/images/born.svg';
import images from './assets/images/images.svg';

// import selfEmployed from './assets/images/selfEmployed.png';
// import ericsson from './assets/images/Ericsson.png';
// import white from './assets/images/white.png';

// import comments from './assets/images/comments.svg';
// import retweet from './assets/images/retweet.svg';
// import like from './assets/images/like.svg';
// import message2 from './assets/images/message2.svg';

import followers from './assets/images/followers.svg';
import comunikime from './assets/images/comunikimeT.png';
import rocketseat from './assets/images/rocketseat.jpg';
import reactjs from './assets/images/reactjs.png';
import addfriend from './assets/images/addfriend.svg';

import { Docked, Header, Banner, Bar, Wrapper } from './styles';

export default function App() {
  return (
    <>
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
        <h1 className="h1regular">
          Este modelo de CV foi feito com as tecnologias: ReactJS, CSS
          (styled-component)
        </h1>
        <h1 className="h1onMobile">
          Por favor use a versão desktop para visualizar todo conteúdo
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
        <div className="content">
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
                <a href="mailto:rocostalopes@gmail.com">
                  {' '}
                  rocostalopes@gmail.com
                </a>
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
                <img src={followers} alt="Followers" /> 73 followers that you
                know{' '}
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

          <Routes />

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
                    <img src={comunikime} alt="Comuniki.me" />
                    <div className="info">
                      <a
                        href="https://twitter.com/comunikime"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          Comuniki.me <span>@comunikime</span>
                        </strong>
                      </a>
                      <button type="button">Follow</button>
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
                      <button type="button">Follow</button>
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
                      <button type="button">Follow</button>
                    </div>
                  </div>
                  <a href="#">x</a>
                </li>
                <li className="addFriends">
                  <div className="addfriend">
                    <img src={addfriend} alt="Add Friends" />
                    <span>Find Friends</span>
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
        </div>
      </Wrapper>

      <GlobalStyle />
    </>
  );
}
