import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

// components
import Navigation from 'Modules/RouterTest/components/Navigation';
import Home from 'Modules/RouterTest/components/Home';
import Products from 'Modules/RouterTest/components/Products';
import About from 'Modules/RouterTest/components/About';
import Error from 'Modules/RouterTest/components/Error';

const RouterTest = () => {
    const routes = [
        {
            path: '/',
            exact: true,
            component: Home
        },
        {
            path: '/products',
            exact: false,
            component: Products
        },
        {
            path: '/about',
            exact: true,
            component: About
        },
        {
            path: '/:string',
            exact: false,
            component: Error
        }
    ];

    return (
        <Router>
            <Navigation />
            <Switch>
                {routes.map((route) => {
                    const {path, exact, component} = route;

                    return component ? (
                        <Route exact={exact} path={path} key={path}>
                            {component}
                        </Route>
                    ) : null;
                })}
            </Switch>
        </Router>
    );
};

export default RouterTest;