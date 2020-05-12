import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swaip-service-context';


import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../sw-pages";
import ErrorBoundary from '../error-boundary/error-boundary';

import "./app.css";

class App extends Component {

  state = {
    swapiService: new DummySwapiService(),
  };

  onSeriviceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    })

  }

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Container className="app">
              <Header onSeriviceChange={this.onSeriviceChange} />
              <RandomPlanet />

              <Switch>
                <Route path="/" exact render={
                  () => <h2>Welcom to StarDB!</h2>
                } />
                <Route path="/people/:id?" render={({ match: { params: { id } } }) => {
                  return <PeoplePage itemId={+id} />;
                }} />
                <Route path="/planets/:id?" render={({ match: { params: { id } } }) =>
                  <PlanetsPage itemId={+id} />
                } />
                <Route path="/starships/:id?" render={({ match: { params: { id } } }) =>
                  <StarshipsPage itemId={+id} />
                } />
                <Route render={() => (<h2>Page not found!</h2>) }/>
              </Switch>
            </Container>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
