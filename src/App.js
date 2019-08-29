import React from 'react';

import GlobalStyle from './styles/global';

import home from './assets/images/home.svg';
import notification from './assets/images/notification.svg';
import message from './assets/images/message.svg';
import logo from './assets/images/logo.svg';
import avatarDigo from './assets/images/avatarDigo.jpg';
import avatar from './assets/images/avatar.png';
import aRodrigo from './assets/images/aRodrigo.jpg';
import banner from './assets/images/Banner.jpg';
import more from './assets/images/more.svg';
import place from './assets/images/place.svg';
import linkedln from './assets/images/linkedin.svg';
import whatsapp from './assets/images/whatsapp.svg';
import github from './assets/images/github.svg';
import born from './assets/images/born.svg';
import images from './assets/images/images.svg';

import selfEmployed from './assets/images/selfEmployed.png';
import ericsson from './assets/images/Ericsson.png';
import white from './assets/images/white.png';

import comments from './assets/images/comments.svg';
import retweet from './assets/images/retweet.svg';
import like from './assets/images/like.svg';
import message2 from './assets/images/message2.svg';

import followers from './assets/images/followers.svg';
import comunikime from './assets/images/comunikimeT.png';
import rocketseat from './assets/images/rocketseat.jpg';
import reactjs from './assets/images/reactjs.png';
import addfriend from './assets/images/addfriend.svg';

import { Header, Banner, Bar, Wrapper } from './styles';

export default function App() {
  return (
    <>
      <Header id="main-header">
        <div className="content">
          <nav>
            <ul>
              <li>
                <img src={home} alt="Home" /> Home
              </li>
              <li>
                <img src={notification} alt="Notifications" /> Notifications
              </li>
              <li>
                <img src={message} alt="Messages" /> Messages
              </li>
            </ul>
          </nav>
          <img src={logo} alt="logo_twitter" />
          <div className="right-side">
            <input type="text" placeholder="Search on Twitter" />
            <img src={aRodrigo} alt="Rodrigo Lopes" />
            <button type="button">Tweet</button>
          </div>
        </div>
      </Header>

      <Banner className="banner" img={banner}>
        <h1>
          Este modelo de CV foi feito com as tecnologias: ReactJS, CSS
          (styled-component)
        </h1>
      </Banner>

      <Bar class="bar">
        <div className="content">
          <ul>
            <li className="active">
              <span>About</span>
              <strong>Me</strong>
            </li>
            <li>
              <span>Tweets</span>
              <strong>3654</strong>
            </li>
            <li>
              <span>Following</span>
              <strong>3387</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>2464</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>345</strong>
            </li>
            <li>
              <span>Lists</span>
              <strong>1</strong>
            </li>
            <li>
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

      <Wrapper class="wrapper-content">
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

          <section className="timeline">
            <nav>
              <a href="/" className="active">
                Experiência
              </a>
              <a href="/">Educação</a>
              <a href="/">Portfólio</a>
            </nav>

            <ul className="tweets">
              <li>
                <img src={selfEmployed} alt="selfEmployed" />
                <div className="tweet">
                  <strong>
                    FullStack Web Developer
                    <span>
                      {' '}
                      Jul 2019 - Presente - 2 meses
                      <br />
                      Brazil
                    </span>
                  </strong>
                  {/* prettier-ignore */}
                  <p>
                    Criando Websites e Android/Iphone Apps com JavaScript (es5,
                    es6) avançado (NodeJS como back-end, ReactJS como front-end
                    e React-Native como mobile).
                    <br/>
                    <br/>
                    Além disso usando:<br/><br/>
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
                    - Payment Methods with NodeJS<br/>
                    - Geo location and maps
                  </p>
                  <div className="actions">
                    <a href="/">
                      <img src={comments} alt="Comments" /> 3
                    </a>
                    <a href="/">
                      <img src={retweet} alt="retweet" /> 4
                    </a>
                    <a href="/">
                      <img src={like} alt="like" /> 5
                    </a>
                    <a href="/">
                      <img src={message2} alt="message" /> 33
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
                      <br />8 Anos 4 meses
                    </span>
                  </strong>
                  <p />
                </div>
              </li>
              <li>
                <img src={white} alt="Branco" />
                <div className="tweet">
                  <strong>
                    QA Automation Developer/Engineer <br />
                    <span>
                      {' '}
                      Dez 2012 – Abr 2019 Duração 6 anos 5 meses <br />
                      São Paulo, Brazil
                    </span>
                  </strong>
                  {/* prettier-ignore */}
                  <p>
                  Acting as coreloop driver on devops environment guaranteeing quality, performance and good
                  results, creating daily/weekly report for daily/weekly meeting. <br/>
                  <br/>
                  In constant communication with sites around the world like as Campinas, São Jose dos Campos,
                  Frankfurt, Chennai and so on.<br/>
                  <br/>
                  Providing training, driving concepts, opening trouble reports (aka. problem note) and acting reviewer
                  of automation code on Gerrit platform. <br/>
                  </p>
                  <div className="actions">
                    <a href="/">
                      <img src={comments} alt="Comments" /> 3
                    </a>
                    <a href="/">
                      <img src={retweet} alt="retweet" /> 4
                    </a>
                    <a href="/">
                      <img src={like} alt="like" /> 5
                    </a>
                    <a href="/">
                      <img src={message2} alt="message" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img src={white} alt="Branco" />
                <div className="tweet">
                  <strong>
                    QA Tester Engineer <br />
                    <span>
                      {' '}
                      Dez 2012 – Mar 2014 Duração 1 anos 4 meses <br />
                      São Paulo
                    </span>
                  </strong>
                  {/* prettier-ignore */}
                  <p>
                  Working with different agile teams and performing unit test, integration test, e2e test and
                  automated test on CBIO/BSCS interface (C++, C#, java, Python) for all project around the world
                  where CBIO/BSCS were implemented from Fullstack to Customer projects.
                  </p>
                  <div className="actions">
                    <a href="/">
                      <img src={comments} alt="Comments" /> 3
                    </a>
                    <a href="/">
                      <img src={retweet} alt="retweet" /> 4
                    </a>
                    <a href="/">
                      <img src={like} alt="like" /> 5
                    </a>
                    <a href="/">
                      <img src={message2} alt="message" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img src={white} alt="Branco" />
                <div className="tweet">
                  <strong>
                    Trainee <br />
                    <span>
                      {' '}
                      Jan 2011 – Dec 2012 Duração 2 anos <br />
                      São Paulo e Região, Brasil
                    </span>
                  </strong>
                  {/* prettier-ignore */}
                  <p>
                  To make the difference, above all. empower the project with my knowledge to improve the time slice
                  against the clock and the major requests of the managers. To Test the given releases with most
                  powerful software of the market and give maintenance when necessary to all customer releases with
                  efficiency and agility.
                  </p>
                  <div className="actions">
                    <a href="/">
                      <img src={comments} alt="Comments" /> 3
                    </a>
                    <a href="/">
                      <img src={retweet} alt="retweet" /> 4
                    </a>
                    <a href="/">
                      <img src={like} alt="like" /> 5
                    </a>
                    <a href="/">
                      <img src={message2} alt="message" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <aside className="widgets">
            <div className="widget follow">
              <div className="title">
                <strong>Who to follow</strong>
                <a href="/">Refresh</a>
                <a href="/">View all</a>
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
                  <a href="/">x</a>
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
                  <a href="/">x</a>
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
                  <a href="/">x</a>
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
                <a href="/">Change</a>
              </div>

              <ul>
                <li>
                  <span>#SportInfoDay</span>
                </li>
                <li>
                  <span>#womenleaders</span>
                </li>
                <li>
                  <span>#VisitesDemiciliaires</span>
                </li>
                <li>
                  <span>European Parliament</span>
                </li>
                <li>
                  <span>#blindgetrouwd</span>
                </li>
                <li>
                  <span>#UXDesign</span>
                </li>
                <li>
                  <span>#UiDesign</span>
                </li>
                <li>
                  <span>#CleanAirNow</span>
                </li>
              </ul>
            </div>

            <div className="widget link">
              <span>© 2018 Twitter</span>
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
