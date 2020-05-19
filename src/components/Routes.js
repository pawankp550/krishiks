import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

// core components
import Home from './core/Home'

// user components
import LogInPage from './user/login/LogInPage'

// admin components
import Dashboard from './admin/Dashboard'
import CreateProduct from './admin/CreateProduct'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/signin" exact component={LogInPage}/>

                <Route path="/admin/dashboard" exact component={Dashboard}/>
                <Route path="/admin/dashboard/createproduct" exact component={CreateProduct}/>
            </Switch>
        </BrowserRouter>
    )
}
