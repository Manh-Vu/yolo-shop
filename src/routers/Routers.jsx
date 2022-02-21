import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Home from '../pages/Home'
import Product from '../pages/Product'

const Routers = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/catalog/:slug' component={Product} />
            <Route path='/catalog' component={Catalog} />
            <Route path='/cart' component={Cart} />
        </Switch>
    )
}

export default Routers
