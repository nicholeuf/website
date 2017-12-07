import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const navlinks = {
  '/': 'Home',
  '/portfolio': 'Portfolio'
};

class Header extends Component {

  /*
    NOTE: There is a known issue with is-active and is-inverted
    https://github.com/jgthms/bulma/issues/1486
  */
  renderNavItem = (path) => {
    return (
      <span key={path} className="level-item has-text-centered">
        <NavLink
          className="button is-primary is-inverted is-outlined"
          activeClassName="is-active"
          exact
          to={path}
        >
          {navlinks[path]}
        </NavLink>
      </span>
    );
  }

  render() {
    return (
      <header role="banner" >
        <section className="hero is-primary is-bold has-text-centered">
          <div className="hero-body">
            <div className="level">
              <span>
                <h1 className="title has-text-weight-normal level-item">Nichole <span className="has-text-weight-bold">Frey</span></h1>
              </span>
              <p className="level-item">Full-Stack &middot; JavaScript &middot; React &middot; Node</p>
              <nav className="level is-mobile">
                {Object.keys(navlinks).map(path => this.renderNavItem(path))}
              </nav>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
