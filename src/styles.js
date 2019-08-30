import styled from 'styled-components';
import { darken } from 'polished';

import search from './assets/images/search.svg';

// ------------------------------------- HEADER ---------------------------------------------------

export const Header = styled.header`
  height: 46px;
  width: 100vw;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    nav ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;

        font-size: 13px;
        color: #667580;
        font-weight: bold;

        margin-left: 30px;

        img {
          margin-right: 7px;
        }
      }

      li:first-child {
        margin: 0px;
      }
    }
  }

  /* ------------------------------------------- HEADER -> RIGHT SIDE ---------------------------------------------- */

  div.right-side {
    display: flex;

    input {
      width: 220px;
      border: 1px solid #e6ecf0;
      height: 34px;
      padding: 0 35px 0 12px;
      border-radius: 16px;
      color: #667581;
      font-size: 12px;
      background: #f5f8fa url(${search}) no-repeat 190px center;
    }

    img {
      height: 34px;
      width: 34px;
      border-radius: 50%;
      margin: 0 15px;
    }

    button {
      height: 34px;
      background: #3bb9e3;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 90px;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      border: 0;
      border-radius: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.09, '#3bb9e3')};
      }
    }
  }
`;

// ------------------------------------- DOCKER ---------------------------------------------------
// Required to maintain the HEADER at same position when position is
export const Docked = styled.div`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  /* position: relative;
  z-index: -2; */
`;

//  ----------------------------------- BANNER ------------------------------------------------------

export const Banner = styled.div`
  height: 380px;
  width: 100vw;
  max-width: 1905px;
  /* background-image: url(${props => props.img});
  background-size: 1905px 380px; */
  position: relative;
  /* z-index: -1; */

  h1 {
    color: #fff;
    position: absolute;
    right: 350px;
    bottom: 10px;
    font-size: 15px;
    font-weight: normal;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

// ---------------------------------- BAR -----------------------------------------------

export const Bar = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 310px;
    height: 100%;
    width: 100%;

    ul {
      display: flex;
      list-style: none;
      height: 100%;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        position: relative;

        span {
          color: #667580;
          font-size: 12px;
          font-weight: bold;
        }

        strong {
          color: #667580;
          font-size: 18px;
          font-weight: bold;
          margin-top: 2px;
        }
      }

      li.active::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #3bb9e3;
      }

      li.active strong {
        color: #3bb9e3;
      }
    }

    .bar-right {
      display: flex;

      button {
        height: 34px;
        background: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 90px;
        font-weight: bold;
        font-size: 14px;
        color: #3bb9e3;
        border: 1px solid #3bb9e3;
        border-radius: 16px;

        margin-right: 20px;

        &:hover {
          background: #3bb9e3;
          color: #fff;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  div.content {
    display: flex;

    aside.profile {
      width: 260px;

      img.avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: -150px;
        position: relative;
      }

      h1 {
        font-size: 21px;
        color: #1f2226;
        margin-top: 10px;
      }

      span {
        font-size: 14px;
        color: #53626c;
      }

      p {
        font-size: 14px;
        color: #1f2226;
        margin-top: 15px;
      }

      ul {
        margin-top: 20px;
        list-style: none;
      }

      ul.list {
        li {
          font-size: 14px;
          color: #657786;

          display: flex;
          align-items: center;
          margin-top: 5px;

          img {
            margin-right: 5px;
          }
          a {
            color: #657786;
            text-decoration: none;
          }
        }

        li:first-child {
          margin: 0;
        }
      }

      .widget {
        margin-top: 20px;

        strong {
          font-weight: normal;
          color: #3bb9e3;
          font-size: 14px;

          display: flex;
          align-items: center;

          img {
            margin-right: 5px;
          }
        }
      }

      .followers ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;

        li {
          width: 45px;
          height: 45px;
          background: #d0d5d9;
          border-radius: 50%;
          flex: 1 0 auto;
          margin: 0 5px 10px 0;

          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            flex: 1 0 auto;
            margin: 0 5px 10px 0;
          }
        }
      }

      .images ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;

        li {
          width: 80px;
          height: 80px;
          background: #d0d5d9;
          border-radius: 2px;
          flex: 1 0 auto;
          margin: 0 5px 5px 0;
        }
      }
    }

    .timeline {
      flex: 1;
      background: #fff;
      margin: 10px 20px 0;

      nav {
        border-bottom: 1px solid #e6ecf0;
        /* vertical -> horizontal */
        padding: 11px 15px;

        a {
          text-decoration: none;
          color: #3bb9e3;
          font-size: 18px;
          font-weight: bold;
          margin-left: 20px;
        }

        a:first-child {
          margin: 0;
        }

        a.active {
          color: #1f2226;
        }
      }
    }

    ul.tweets {
      list-style: none;

      li {
        border-bottom: 1px solid #e6ecf0;
        padding: 11px 15px;
        display: flex;

        .tweet {
          margin-left: 10px;
          display: flex;
          flex-direction: column;

          strong {
            font-size: 14px;
            color: #1f2326;

            span {
              font-weight: normal;
              font-size: 13px;
              color: #7b8b9a;
            }
          }

          p {
            font-size: 14px;
            color: #1f2326;
            margin-top: 5px;
          }
        }

        .actions {
          display: flex;
          margin-top: 20px;

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #667580;
            font-weight: bold;
            font-size: 12px;
            margin-left: 30px;

            img {
              margin-right: 5px;
            }
          }

          a:first-child {
            margin-left: 0;
          }
        }
      }

      li > img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }

    aside.widgets {
      width: 290px;

      .widget {
        padding: 15px;
        margin: 10px 0;

        .title {
          display: flex;
          align-items: baseline; /* Para que todo o texto tenha um base igual */

          strong {
            font-size: 18px;
            color: #1f2226;
          }

          a {
            color: #3bb9e3;
            font-size: 12px;
            text-decoration: none; /* remover o underline de links */
            position: relative;
            padding-left: 10px;
          }

          a::before {
            content: '';
            height: 2px;
            width: 2px;
            border-radius: 50%;
            background: #222;
            /* Quando usar "position: absolute;" usar também "left:" e "top:" (ou right/bottom) pra alinhar na posição certa*/
            position: absolute;
            left: 4px;
            top: 6px;
          }
        }
      }

      .follow {
        background: #fff;

        ul {
          list-style: none;
          margin-top: 10px;

          li {
            display: flex;
            justify-content: space-between;
            /* Ao utilizar o border-bottom, usar também o padding e margin */
            border-bottom: 1px solid #ccd6dd;
            padding-bottom: 10px;
            margin-bottom: 10px;

            .profile {
              display: flex;
              align-items: center;

              img {
                width: 48px;
                height: 48px;
                border-radius: 50%;
              }

              .info {
                margin-left: 10px;
                display: flex;
                flex-direction: column;

                a {
                  text-decoration: none;

                  strong {
                    font-size: 14px;
                    color: #1f2326;

                    span {
                      font-weight: normal;
                      color: #a9a9a9;
                    }
                  }
                }

                button {
                  height: 27px;
                  width: 90px;
                  background: #fff;
                  margin-top: 4px;

                  display: flex;
                  align-items: center;
                  justify-content: center;

                  font-weight: bold;
                  font-size: 14px;
                  color: #3bb9e3;
                  border: 1px solid #3bb9e3;
                  border-radius: 16px;

                  margin-right: 20px;

                  &:hover {
                    background: #3bb9e3;
                    color: #fff;
                  }
                }
              }
            }
          }

          li > a {
            text-decoration: none;
            font-size: 13px;
            color: #ccd6dd;
          }

          li:last-child {
            margin-bottom: 0;
            padding-bottom: 5px;
            border-bottom: 0;
          }

          li.addFriends {
            /*  */
            .addfriend {
              display: flex;
              align-items: center;
              padding-top: 10px;
              padding-left: 8px;

              span {
                font-size: 13px;
                color: #3bb9e3;
                margin-left: 6px;
              }

              img {
                filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
              }
            }
          }
        }
      }

      .trends {
        background: #fff;

        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-top: 10px;

        .title {
          strong {
            font-size: 18px;
            color: #1f2226;
          }

          a {
            color: #3bb9e3;
            font-size: 12px;
            text-decoration: none;
            position: relative;
            padding-left: 10px;

            &::before {
              content: '';
              height: 2px;
              width: 2px;
              border-radius: 50%;
              background: #222;
              position: absolute;
              left: 4px;
              top: 6px;
            }
          }
        }

        ul {
          list-style: none;
          margin-top: 10px;

          li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;

            span {
              color: #3bb9e3;
              font-size: 14px;
            }
          }

          li:last-child {
            margin-bottom: 0;
          }
        }
      }

      .link {
        display: flex;
        flex-wrap: wrap;

        span {
          color: #667581;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
`;
