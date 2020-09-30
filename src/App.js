import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import URLS from './utils/urls';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <div className="App">
        <Switch>
          <Route exact path={URLS.HOME} component={Home} />
          <Route exact path={URLS.PRIVACY} component={PrivacyPolicy} />
        </Switch>
    </div>
  );
}

export default App;
