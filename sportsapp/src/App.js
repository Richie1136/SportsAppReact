import './App.css';
import Team from './components/Team/Team'
import Player from './components/Player/Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import League from './components/League/League'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation'
import teamData from './teams.json'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/league'>
          <League />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/player'>
          <Player />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
