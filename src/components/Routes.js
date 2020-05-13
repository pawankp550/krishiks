import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

// core components
import Home from './core/Home'

// user components
import LogInPage from './user/login/LogInPage'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/signin" exact component={LogInPage}/>
            </Switch>
        </BrowserRouter>
    )
}
