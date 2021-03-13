import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminRoutes from './routes';
function App() {
  return (
      <Router>
        <>
        <Switch>
          <Route path="/" component={AdminRoutes} />
        </Switch>
        </>
      </Router>
  );
}

export default App;
