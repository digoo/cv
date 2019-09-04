import React from 'react';
import { Link } from 'react-router-dom';

// import selfEmployed from '../../../assets/images/selfEmployed.png';
// import ericsson from '../assets/images/Ericsson.png';
import white from '../../../assets/images/white.png';

// import comments from '../../../assets/images/comments.svg';
// import retweet from '../../../assets/images/retweet.svg';
// import like from '../../../assets/images/like.svg';
// import message2 from '../../../assets/images/message2.svg';

export default function Port() {
  return (
    <section className="timeline">
      <nav>
        <Link to="/cv/experience">Experiência</Link>
        <Link to="/cv/education">Educação</Link>
        <Link to="/cv/portfolio" className="active">
          Portfólio
        </Link>
      </nav>

      <ul className="tweets">
        <li>
          <img src={white} alt="" />
          <div className="tweet">
            <strong>
              Em construção
              <span>
                {/* Jul 2019 - Presente - 2 meses
                <br />
                Brazil */}
              </span>
            </strong>
            {/* prettier-ignore */}
            {/* <p>
                    Criando Websites e Android/Iphone Apps com linguagem JavaScript avançado
                    (Node.js como back-end, ReactJS como front-end
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
                    - Metodos de pagamento com Node.js<br/>
                    - Geo localização e mapas
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
            </div> */}
          </div>
        </li>
      </ul>
    </section>
  );
}
