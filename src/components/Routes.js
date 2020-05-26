import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from '../_helpers/history'

// core components
import Home from './core/Home'

// user components
import LogInPage from './user/login/LogInPage'

// admin components
import Dashboard from './admin/Dashboard'
import CreateProduct from './admin/CreateProduct'
import CreateCategory from './admin/CreateCategory'


export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/signin" exact component={LogInPage}/>

                <Route path="/admin/dashboard" exact component={Dashboard}/>
                <Route path="/admin/dashboard/createproduct" exact component={CreateProduct}/>
                <Route path="/admin/dashboard/createcategory" exact component={CreateCategory}/>
            </Switch>
        </Router>
    )
}
