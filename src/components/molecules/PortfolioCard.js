import React from 'react';

const PortfolioCard = ({ title, children }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-content is-clipped">
          <div className="content">
            <h3>{title}</h3>
          </div>
          {children}
        </div>
      </article>
    </div>
  );
}

export default PortfolioCard;
