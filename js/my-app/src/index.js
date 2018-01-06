import './include/bootstrap';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route
} from 'react-router-dom';

import MainPage from './components/MainPage.js';
import BlogGridPage from './components/BlogGridPage.js';
import BlogSinglePage from './components/BlogSinglePage.js';
import PortfolioSinglePage from './components/PortfolioSinglePage.js';

import registerServiceWorker from './registerServiceWorker';

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory() 

ReactDOM.render(
	<Router history={customHistory}>
		<div>
			<Route exact path="/" component={MainPage} />
			<Route path="/blogs" component={BlogGridPage} />
			<Route path="/single" component={BlogSinglePage} />
			<Route path="/portfolio" component={PortfolioSinglePage} />

		</div>
	</Router>, 
document.getElementById('root'));

registerServiceWorker();
