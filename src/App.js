import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';
import PredictiveAnalyst from './PredictiveAnalyst';
import MarketingAnalyst from './MarketingAnalyst';
import SupplyChain from './SupplyChain';
import DataEngineer from './DataEngineer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Route exact path="/kusari-portal" component={Home}/>
            <Route exact path="/kusari-portal/predictive-analyst" component={PredictiveAnalyst}/>
            <Route exact path="/kusari-portal/marketing-analyst" component={MarketingAnalyst}/>
            <Route exact path="/kusari-portal/supply-chain" component={SupplyChain}/>
            <Route exact path="/kusari-portal/data-engineer" component={DataEngineer}/>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
