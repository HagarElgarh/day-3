
import React from 'react';
// import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './component/header';
import artist from './component/artist';
import artistdedails from './component/artistdedails';

const App = () => {
  return (
      <Router>        
          <Switch>
              {/* <Route component={StudentDetails} path="/students/:id" /> */}
              {/* <Route component={Students} path="/students" /> */}
              <Route exact path="/artists/:id" component={artistdedails} />

              <Route component={artist} path="/artists" />
              <Route component={artist} path="/" exact />
              <Route path="*" render={() => (
                  <div className="alert alert-danger">
                      <h1 className="text-center">
                      404
                      </h1>
                      <p>
                          page not found
                      <Link to="/"> navigate to home</Link>
                  </p>
                  </div>
              )} />
          </Switch>
      </Router>
  )
}

export default App
