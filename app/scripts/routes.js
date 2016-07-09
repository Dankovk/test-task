import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Application from './app.js';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';
import { Provider } from 'react-redux';
import store, { history } from './stores/store';



const routes = (
 <Provider store={store}>
     <Router history={history}>
         <Route path='/' component={ Application }>
             <IndexRoute component={ Home }/>
             <Route path='info' component={ Info } />
             <Route path='home' component={ Home } />
             <Route path='*' component={NotFound}/>
         </Route>
     </Router>
 </Provider>

);

export default routes;