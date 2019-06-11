import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm';
import {Container,} from 'semantic-ui-react'
import Navbar from './components/Navbar';

import './App.css';


const App = () => (
  <>
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);




export default App;
