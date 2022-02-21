import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Routers from '../routers/Routers'
import ProductViewModal from './ProductViewModal'
const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Routers />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal/>
                </div>

            )} />
        </BrowserRouter>
    )
}

export default Layout
