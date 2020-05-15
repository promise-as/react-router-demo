import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import { PageHeader } from 'antd'

import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div>
      <div className="row">
        <PageHeader
          className="site-page-header"
          title="React Router Demo"
        />
      </div>


      <div className="row">
        <Router>
          <Redirect to="/home/" />
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link to="/home/" className="list-group-item">Home</Link>
              <Link to="/about/" className="list-group-item activeClass">About</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/home/" component={Home} />

                <Route path="/about/" component={About} />
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App;