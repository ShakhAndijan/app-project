import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/pages";
import SigninPage from './components/pages/signin';

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/signin" component={SigninPage} />
            </Switch> 
        </Router>
    );
}

export default App;
