import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';

import TodoList from './TodoList';
import TodoEdit from './TodoEdit';

const AppContainer = (props) => {
  return (
    <Container text>
      <TodoList />
      <TodoEdit />
    </Container>
  );
};

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={AppContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
