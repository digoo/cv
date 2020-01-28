/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import BarMobile from '../../../components/Bar/BarMobile';

import white from '../../../assets/images/white.png';
import like from '../../../assets/images/like.svg';

export default function Port() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get('/repos?per_page=100');
      const response2 = await api.get('/repos?per_page=100&page=2');

      const mergeResults = [...response.data, ...response2.data];
      const filtered = mergeResults.filter(e => e.fork === false);
      setRepos(filtered);
    }
    loadRepos();
  }, []);

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
            <div className="tweet" />
          </li>
          {repos.map(repo => (
            <li key={repo.id}>
              <img src={repo.owner.avatar_url} alt="" />
              <div className="tweet">
                <strong>
                  {repo.name}
                  <span>
                    {' '}
                    <br />
                    {repo.language}
                  </span>
                </strong>
                <p>{repo.description}</p>
                <div className="actions">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={like} alt="like" /> Click here to access the
                    Github repository.
                  </a>
                </div>
              </div>
            </li>
          ))}
          <li>
            <img src={white} alt="" />
            <div className="tweet" />
          </li>
        </ul>
      </section>
    </>
  );
}
