import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from '../_helpers/history'

// core components
import Home from './core/Home'
import Shop from './core/Shop'

// user components
import LogInPage from './user/login/LogInPage'

// admin components
import Main from './admin/Main'
import CreateProduct from './admin/CreateProduct'
import Categories from './admin/Categories'
import Sellers from './admin/Sellers'


export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shop" exact component={Shop}/>

                <Route path="/signin" exact component={LogInPage}/>

                <Route path="/admin/dashboard" exact component={Main}/>
                <Route path="/admin/dashboard/createproduct" exact component={CreateProduct}/>
                <Route path="/admin/dashboard/categories" exact component={Categories}/>
                <Route path="/admin/dashboard/sellers" exact component={Sellers}/>
            </Switch>
        </Router>
    )
}
