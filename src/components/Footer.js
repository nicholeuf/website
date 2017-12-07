import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';

const icons = {
  [process.env.REACT_APP_GITHUB_URL]: 'fa-github',
  [process.env.REACT_APP_LINKEDIN_URL]: 'fa-linkedin',
  [process.env.REACT_APP_FACEBOOK_URL]: 'fa-facebook'
};

class Footer extends Component {

  renderIcon = (href) => {
    return (
      <a
        key={href}
        className="button is-dark"
        href={href}
        target="_blank"
      >
        <span className="icon is-small">
          <i className={`fa ${icons[href]}`}></i>
        </span>
      </a>
    );
  }

  render() {
    const { year } = this.props;
    return (
      <footer role="contentinfo" className="footer is-dark">
        <div className="level">
          <div className="level-item has-text-centered">
            <div className="buttons is-centered">
              {Object.keys(icons).map(href => this.renderIcon(href))}
            </div>
          </div>
          <span className="level-item has-text-centered">
            <small className="level-item">&copy; {year} All rights reserved</small>
          </span>
          <span className="level-item has-text-centered">
            <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
              <Image publicId="made-with-bulma--semiblack_pn3yxk" width="128" height="24" crop="scale" alt="Made with Bulma" />
            </a>
          </span>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  year: PropTypes.number.isRequired
}

// TODO: reducers/selectors
Footer.defaultProps = {
  year: new Date().getUTCFullYear()
};

export default Footer;
