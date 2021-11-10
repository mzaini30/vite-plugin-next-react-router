import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import { RouteView, routes, GlobalLayout } from 'virtual:react-router';

// const page = lazy(() => import('./pages/blog'))
// console.log('page: ', page);

ReactDOM.render(<RouteView />, document.getElementById('root'));
