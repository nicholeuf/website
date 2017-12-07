import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
        <Helmet
          defaultTitle="Nichole Frey"
          titleTemplate="Nichole Frey | %s"
        />
        <BrowserRouter>
          <div className="section">
            <Header />
            <main role="main" className="container is-fluid">
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/" component={Home} />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CloudinaryContext>
    );
  }
}

export default App;
