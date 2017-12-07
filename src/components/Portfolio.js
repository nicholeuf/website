import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioCard from './molecules/PortfolioCard';
import YouTube from 'react-youtube';

const defaultOpts = {
  width: '100%'
};

const stack = [
  {
    title: 'Company Introduction',
    videoId: 'nibWocj9A5Q',
    opts: {
      ...defaultOpts,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
  },
  {
    title: 'Website Features',
    videoId: 'eK7IqRPQbYw',
    opts: defaultOpts
  }
]

const Home = () => {
  return (
    <section className="section">
      <Helmet title="Portfolio" />
      <div className="content">
        <h1 className="title">Portfolio</h1>
        <h2 className="subtitle">Door to Door Organics</h2>
        <p>
          During my three and a half years with the company, I worked my way up from a Sr. Java Developer to the Lead
          of the Front-End team.  Upon the merger with Relay Foods, I transitioned to a Full-Stack Developer on a remote-first team,
          where I continued to work in a lead role on our Front-End stack.
        </p>
        <p>
          I started at the company with no Javascript experience and led our effort to sunset our legacy website and
          transition our customer base.  In addition, I worked on several of our Node Micro-Services and React-based
          Internal Tools.
        </p>
        {stack.map(({ title, ...others }) => {
          return (
            <PortfolioCard key={title} title={title}>
              <YouTube {...others} />
            </PortfolioCard>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
