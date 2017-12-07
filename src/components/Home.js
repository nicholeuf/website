import React from 'react';

const Home = ({ contact }) => {
  return (
    <section className="section">
      <div className="content">
      <p>Welcome to my professional website and scratchpad for trying out
        new ideas in the world of JavaScript and Design.
      </p>
      <p>Want to send me a message?  Please connect with me via <a href={contact} target="_blank">LinkedIn</a>.</p>
    </div>
    </section>
  );
}

Home.defaultProps = {
  contact: process.env.REACT_APP_LINKEDIN_URL
}

export default Home;
