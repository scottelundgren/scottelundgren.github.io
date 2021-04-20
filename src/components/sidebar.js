import { Link } from 'gatsby'
import React from 'react'

import Headshot from './scott-lundgren-headshot.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Headshot} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">{siteMetadata.author}</div>
          <p>{siteMetadata.description}</p>
        </div>
      </header>
      <footer>
        <section className="contact">
          <ul>
            {siteMetadata.social.facebook && (
              <li>
                <a href={`https://facebook.com/${siteMetadata.social.facebook}`} aria-label="Facebook" rel="noopener" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
            )}
            {siteMetadata.social.github && (
              <li>
                <a href={`https://github.com/${siteMetadata.social.github}`} aria-label="Github" rel="noopener" target="_blank">
                  <i className="fa fa-github" />
                </a>
              </li>
            )}
            {siteMetadata.social.instagram && (
              <li>
                <a href={`https://instagram.com/${siteMetadata.social.instagram}`} aria-label="Instagram" rel="noopener" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            )}
            {siteMetadata.social.linkedin && (
              <li>
                <a href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`} aria-label="LinkedIn" rel="noopener" target="_blank" >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            )}
            {siteMetadata.social.twitter && (
              <li>
                <a href={`https://twitter.com/${siteMetadata.social.twitter}`}
                  aria-label="Twitter" rel="noopener" target="_blank" >
                  <i className="fa fa-twitter" />
                </a>
              </li>
            )}
              <li>
                <Link to="/rss.xml">
                  <i className="fa fa-rss" />
                </Link>
              </li>
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar