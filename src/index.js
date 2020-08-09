import ReactDOM from 'react-dom';
import './index.css';

import categories from './store.js';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-173023235-2');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(categories, document.getElementById('works'));
		