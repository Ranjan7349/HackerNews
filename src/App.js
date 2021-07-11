import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stories from './components/Stories.component';
// import withFilter from './HOC/WithFilterHOC.component'

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
          <h3>HackerNews LIVE</h3>
      </header>
      <Switch>
        <Route path="/" component={Stories} exact/>
        <Route path="/top" component={Stories} />
        <Route path="/ask" component={Stories} />
        <Route path="/show" component={Stories} />
        <Route path="/job" component={Stories} />
      </Switch>
    </div>
  );
}

export default App;
