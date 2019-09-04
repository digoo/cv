import styled from 'styled-components';
import { darken } from 'polished';

import search from './assets/images/search.svg';

// ------------------------------------- HEADER ---------------------------------------------------

export const Header = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  height: 46px;
  width: 100%;
  max-width: 1905px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;

  @media (max-width: 450px) {
    width: calc(100vw);
  }

  div.content {
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

        @media (max-width: 1080px) {
          font-size: 12px;
          margin-left: 20px;
        }
        p {
          @media (max-width: 850px) {
            display: none;
          }
        }

        img {
          margin-right: 7px;

          @media (max-width: 1080px) {
            height: 16px;
            width: 16px;
          }
        }
      }

      li:first-child {
        margin: 0px;
      }
    }

    /* ------------------------------------------- HEADER -> CENTER LOGO ---------------------------------------------- */
    img.center {
      @media (max-width: 250px) {
        order: -1;
      }

      @media (max-width: 215px) {
        display: none;
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

        @media (max-width: 1250px) {
          width: 140px;
          font-size: 10px;
          padding: 0 35px 0 12px;
          background: #f5f8fa url(${search}) no-repeat 110px center;
        }

        @media (max-width: 850px) {
          width: 40px;
          font-size: 0;
          padding: 0 0 0 0;
          background: #f5f8fa url(${search}) no-repeat 13px center;
        }

        @media (max-width: 250px) {
          display: none;
        }
      }

      img {
        height: 34px;
        width: 34px;
        border-radius: 50%;
        margin: 0 15px;

        @media (max-width: 330px) {
          display: none;
        }
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

        @media (max-width: 600px) {
          width: 60px;
          font-size: 12px;
        }

        @media (max-width: 400px) {
          display: none;
        }
      }
    }
  }
`;

// ------------------------------------- DOCKER ---------------------------------------------------
// Required to maintain the HEADER at same position when position is fixed
export const Docked = styled.div`
  height: 46px;
  width: calc(100vw - 17px);
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

  @media (max-width: 450px) {
    width: calc(100vw);
  }
`;

//  ----------------------------------- BANNER ------------------------------------------------------

export const Banner = styled.div`
  height: 380px;
  width: calc(100vw - 17px);
  max-width: 1905px;
  /* background-image: url(${props => props.img});
  background-size: 1905px 380px; */
  position: relative;
  /* z-index: -1; */

  @media(max-width: 450px) {
    width: calc(100vw);
  }

  h1 {
    color: #fff;
    position: absolute;
    right: 350px;
    bottom: 10px;
    font-size: 15px;
    font-weight: normal;

    @media (max-width: 1850px) {
      right: 300px;
    }

    @media (max-width: 1750px) {
      right: 250px;
    }

    @media (max-width: 1650px) {
      right: 150px;
    }

    @media (max-width: 1450px) {
      right: 50px;
    }

    @media (max-width: 1250px) {
      right: 80px;
      font-size: 12px;
    }

    @media (max-width: 1050px) {
      right: 20px;
    }

    @media (max-width: 950px) {
      bottom: 190px;
    }
  }

  img {
    height: 100%;
    width: calc(100vw - 17px);

    @media(max-width: 450px) {
    width: calc(100vw);
  }
  }
`;

// ---------------------------------- BAR -----------------------------------------------

export const Bar = styled.div`
  height: 59px;
  width: calc(100vw - 17px);
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  @media (max-width: 450px) {
    width: calc(100vw);
  }

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

      li.active {
        @media (max-width: 750px) {
          display: none;
        }
      }

      li.other {
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }

    .bar-right {
      display: flex;

      @media (max-width: 650px) {
        display: none;
      }

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

        transition: background 0.4s;

        &:hover {
          background: ${darken(0.09, '#fff')};
        }
      }
    }
  }
`;

// ---------------------------------- Wrapper -----------------------------------------------

export const Wrapper = styled.div`
  div.content {
    display: flex;

    @media (max-width: 750px) {
      flex-direction: column;
      flex: 1;
    }

    @media (max-width: 450px) {
      padding: 0 10px;
      flex-direction: row;
      display: none;
    }

    /* @media (max-width: 380px) {
    } */

    /* ---------------------------------- Wrapper -> Left side ----------------------------------------------- */

    aside.profile {
      width: 260px;

      @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        margin: 0 20px 0;
        flex: 1;
        width: calc(100vw - 117px);
        align-items: center;
      }

      img.avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: -150px;
        position: relative;

        @media (max-width: 215px) {
          width: 150px;
          height: 150px;
          margin-top: -120px;
        }
      }

      h1 {
        font-size: 21px;
        color: #1f2226;
        margin-top: 10px;

        @media (max-width: 750px) {
          margin-left: -51px;
        }

        @media (max-width: 215px) {
          font-size: 12px;
          margin-left: 0;
        }
      }

      span {
        font-size: 14px;
        color: #53626c;

        @media (max-width: 750px) {
          margin-left: -98px;
        }

        @media (max-width: 215px) {
          font-size: 12px;
          margin-left: 0;
        }
      }

      p {
        font-size: 14px;
        color: #1f2226;
        margin-top: 15px;

        @media (max-width: 750px) {
          margin-left: -1px;
        }

        @media (max-width: 215px) {
          font-size: 12px;
        }
      }

      ul {
        margin-top: 20px;
        list-style: none;

        @media (max-width: 750px) {
          margin-left: 50px;
        }
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

      /* ---------------------------------- Wrapper -> Left side -> widget ----------------------------------------------- */

      .widget {
        margin-top: 20px;

        @media (max-width: 750px) {
          display: none;
        }

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

      /* ---------------------------------- Wrapper -> Left side -> Followers ----------------------------------------------- */

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

    /* ---------------------------------- Wrapper -> Center ----------------------------------------------- */

    .timeline {
      flex: 1;
      background: #fff;
      margin: 10px 20px 0;

      @media (max-width: 450px) {
        display: none;
      }

      nav {
        border-bottom: 1px solid #e6ecf0;
        /* vertical -> horizontal */
        padding: 11px 15px;
        text-align: center;

        a {
          text-decoration: none;
          color: #3bb9e3;
          font-size: 18px;
          font-weight: bold;
          margin-left: 20px;

          @media (max-width: 450px) {
            font-size: 15px;
          }

          @media (max-width: 400px) {
            font-size: 12px;
          }
        }

        a:first-child {
          margin: 0;
        }

        a.active {
          color: #1f2226;
        }
      }
    }

    /* ---------------------------------- Wrapper -> Center -> Tweets ----------------------------------------------- */

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

            @media (max-width: 450px) {
              font-size: 13px;
            }

            @media (max-width: 400px) {
              font-size: 12px;
            }

            span {
              font-weight: normal;
              font-size: 13px;
              color: #7b8b9a;

              @media (max-width: 1150px) {
                font-size: 12px;
              }

              @media (max-width: 450px) {
                font-size: 11px;
              }

              @media (max-width: 400px) {
                font-size: 10px;
              }
            }
          }

          p {
            font-size: 14px;
            color: #1f2326;
            margin-top: 5px;

            @media (max-width: 1200px) {
              font-size: 13px;
            }

            @media (max-width: 450px) {
              font-size: 12px;
            }

            @media (max-width: 400px) {
              font-size: 11px;
            }
          }
        }

        /* ---------------------------------- Wrapper -> Center -> Tweets -> Actions ----------------------------------------------- */

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

    /* ---------------------------------- Wrapper -> Right side ----------------------------------------------- */

    aside.widgets {
      width: 290px;

      @media (max-width: 1200px) {
        width: 245px;
      }

      @media (max-width: 1000px) {
        width: 0;
        display: none;
      }

      .widget {
        padding: 15px;
        margin: 10px 0;

        .title {
          display: flex;
          align-items: baseline; /* Para que todo o texto tenha um base igual */

          strong {
            font-size: 18px;
            color: #1f2226;
            @media (max-width: 1200px) {
              font-size: 17px;
            }
          }

          a {
            color: #3bb9e3;
            font-size: 12px;
            text-decoration: none; /* remover o underline de links */
            position: relative;
            padding-left: 10px;

            @media (max-width: 1200px) {
              font-size: 11px;
            }
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

      /* ---------------------------------- Wrapper -> Right side -> Follow ----------------------------------------------- */

      .follow {
        background: #fff;

        @media (max-width: 1000px) {
          display: none;
        }

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
                    @media (max-width: 1200px) {
                      font-size: 12px;
                    }

                    span {
                      font-weight: normal;
                      color: #a9a9a9;
                      @media (max-width: 1200px) {
                        font-size: 11px;
                      }
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

                  transition: background 0.4s;

                  &:hover {
                    background: ${darken(0.09, '#fff')};
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

      /* ---------------------------------- Wrapper -> Right side -> Trends ----------------------------------------------- */

      .trends {
        background: #fff;

        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-top: 10px;

        @media (max-width: 1000px) {
          display: none;
        }

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

      /* ---------------------------------- Wrapper -> Right side -> Links ----------------------------------------------- */

      .link {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 1000px) {
          display: none;
        }

        span {
          color: #667581;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }

  /* ========================================= Wrapper Mobile ========================================================= */

  div.contentMobile {
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (min-width: 451px) {
      display: none;
    }

    @media (max-width: 450px) {
      width: calc(100vw);
      margin: 0;
      padding: 0;
    }

    /* ---------------------------------- Wrapper Mobile -> Left side ----------------------------------------------- */

    aside.profile {
      width: 260px;
      display: flex;
      flex-direction: column;

      @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        margin: 0 20px 0;
        flex: 1;
        width: calc(100vw - 117px);
        align-items: center;
      }

      @media (max-width: 450px) {
        margin: 0;
        flex: 1;
        width: 100vw;
        align-items: center;
      }

      img.avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: -150px;
        position: relative;

        @media (max-width: 450px) {
          width: 150px;
          height: 150px;
          margin-top: -120px;
        }

        @media (max-width: 340px) {
          width: 100px;
          height: 100px;
          margin-top: -70px;
        }

        @media (max-width: 270px) {
          margin-right: auto;
        }

        @media (max-width: 190px) {
          display: none;
        }
      }

      h1 {
        font-size: 21px;
        color: #1f2226;
        margin-top: 10px;

        @media (max-width: 750px) {
          margin-left: -51px;
        }

        @media (max-width: 245px) {
          font-size: 12px;
          margin-left: 0;
        }
      }

      span {
        font-size: 14px;
        color: #53626c;

        @media (max-width: 750px) {
          margin-left: -98px;
        }

        @media (max-width: 245px) {
          font-size: 12px;
          margin-left: 0;
        }
      }

      p {
        font-size: 14px;
        color: #1f2226;
        margin-top: 15px;

        @media (max-width: 750px) {
          margin-left: -1px;
        }

        @media (max-width: 245px) {
          font-size: 12px;
        }
      }

      ul {
        margin-top: 20px;
        list-style: none;

        @media (max-width: 750px) {
          margin-left: 50px;
        }

        @media (max-width: 245px) {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: safe;
          margin-left: 5px;
        }
      }

      ul.list {
        li {
          font-size: 14px;
          color: #657786;

          display: flex;
          align-items: center;
          margin-top: 5px;

          @media (max-width: 245px) {
            font-size: 12px;
          }

          @media (max-width: 170px) {
            font-size: 11px;
          }

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

      /* ---------------------------------- Wrapper Mobile -> Left side -> widget ----------------------------------------------- */

      .widget {
        margin-top: 20px;

        @media (max-width: 750px) {
          display: none;
        }

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

      /* ---------------------------------- Wrapper Mobile -> Left side -> Followers ----------------------------------------------- */

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

    /* ---------------------------------- Wrapper Mobile -> Center ----------------------------------------------- */

    .timeline {
      flex: 1;
      background: #fff;
      margin: 10px 10px 0;

      @media (max-width: 260px) {
        margin: 10px 0 0;
      }

      nav {
        border-bottom: 1px solid #e6ecf0;
        /* vertical -> horizontal */
        padding: 11px 15px;
        text-align: center;

        @media (max-width: 210px) {
          display: flex;
          flex-direction: column;
          padding: 5px 15px;
        }

        a {
          text-decoration: none;
          color: #3bb9e3;
          font-size: 18px;
          font-weight: bold;
          margin-left: 20px;

          @media (max-width: 450px) {
            font-size: 15px;
          }

          @media (max-width: 400px) {
            font-size: 12px;
          }

          @media (max-width: 240px) {
            font-size: 10px;
          }

          @media (max-width: 210px) {
            font-size: 9px;
            margin-left: 0;
            margin-top: 6px;
          }
        }

        a:first-child {
          margin: 0;
        }

        a.active {
          color: #1f2226;
        }
      }
    }

    /* ---------------------------------- Wrapper Mobile -> Center -> Tweets ----------------------------------------------- */

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

            @media (max-width: 450px) {
              font-size: 13px;
            }

            @media (max-width: 400px) {
              font-size: 12px;
            }

            @media (max-width: 200px) {
              font-size: 11px;
            }

            span {
              font-weight: normal;
              font-size: 13px;
              color: #7b8b9a;

              @media (max-width: 1150px) {
                font-size: 12px;
              }

              @media (max-width: 450px) {
                font-size: 11px;
              }

              @media (max-width: 400px) {
                font-size: 10px;
              }

              @media (max-width: 200px) {
                font-size: 9px;
              }
            }
          }

          p {
            font-size: 14px;
            color: #1f2326;
            margin-top: 5px;

            @media (max-width: 1200px) {
              font-size: 13px;
            }

            @media (max-width: 450px) {
              font-size: 12px;
            }

            @media (max-width: 400px) {
              font-size: 11px;
            }

            @media (max-width: 200px) {
              font-size: 10px;
            }
          }
        }

        /* ---------------------------------- Wrapper Mobile -> Center -> Tweets -> Actions ----------------------------------------------- */

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

        @media (max-width: 240px) {
          display: none;
        }
      }
    }

    /* ---------------------------------- Wrapper Mobile -> Right side ----------------------------------------------- */

    aside.widgets {
      width: 290px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      @media (max-width: 300px) {
        width: 245px;
      }

      @media (max-width: 260px) {
        width: auto;
      }

      .widget {
        padding: 15px;
        margin: 10px 0;

        .title {
          display: flex;
          align-items: baseline; /* Para que todo o texto tenha um base igual */

          strong {
            color: #1f2226;
            font-size: 17px;

            @media (max-width: 260px) {
              font-size: 15px;
            }

            @media (max-width: 220px) {
              font-size: 12px;
            }

            @media (max-width: 190px) {
              font-size: 10px;
            }
          }

          a {
            color: #3bb9e3;
            text-decoration: none; /* remover o underline de links */
            position: relative;
            padding-left: 10px;
            font-size: 11px;

            @media (max-width: 260px) {
              font-size: 9px;
            }
          }

          a::before {
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

      /* ---------------------------------- Wrapper Mobile -> Right side -> Follow ----------------------------------------------- */

      .follow {
        background: #fff;

        ul {
          list-style: none;
          margin-top: 10px;

          li {
            display: flex;
            justify-content: space-between;
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

                @media (max-width: 260px) {
                  width: 36px;
                  height: 36px;
                }
              }

              .info {
                margin-left: 10px;
                display: flex;
                flex-direction: column;

                a {
                  text-decoration: none;

                  strong {
                    /* font-size: 14px; */
                    color: #1f2326;
                    font-size: 12px;

                    @media (max-width: 260px) {
                      font-size: 10px;
                    }

                    span {
                      font-weight: normal;
                      color: #a9a9a9;
                      font-size: 11px;

                      @media (max-width: 260px) {
                        font-size: 9px;
                      }
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

                  transition: background 0.4s;

                  &:hover {
                    background: ${darken(0.09, '#fff')};
                  }

                  @media (max-width: 260px) {
                    height: 23px;
                    width: 60px;
                    font-size: 12px;
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

      /* ---------------------------------- Wrapper Mobile -> Right side -> Trends ----------------------------------------------- */

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

              @media (max-width: 190px) {
                font-size: 12px;
              }

              @media (max-width: 170px) {
                font-size: 11px;
              }
            }
          }

          li:last-child {
            margin-bottom: 0;
          }
        }
      }

      /* ---------------------------------- Wrapper Mobile -> Right side -> Links ----------------------------------------------- */

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
