import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import './index.css';
import App from './App';
=======
import App from './components/App';
>>>>>>> Stashed changes
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'

const Root = () => (
  <Router>
    <Switch>
      <Route path="" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


