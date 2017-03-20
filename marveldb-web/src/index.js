import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Characters from './components/pages/Characters';
import Comics from './components/pages/Comics';
import Series from './components/pages/Series';
import Creators from './components/pages/Creators';
import CharacterDetails from './components/details/CharacterDetails';
import ComicDetails from './components/details/ComicDetails';
import CreatorDetails from './components/details/CreatorDetails';
import SeriesDetails from './components/details/SeriesDetails';
import './index.css';

ReactDOM.render ((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/characters" component={Characters} />
				<Route path="/characters/:id" component={CharacterDetails} />
				<Route path="/comics" component={Comics} />
				<Route path="/comics/:id" component={ComicDetails} />
				<Route path="/series" component={Series} />
				<Route path="/series/:id" component={SeriesDetails} />
				<Route path="/creators" component={Creators} />
				<Route path="/creators/:id" component={CreatorDetails} />
			</Route>
		</Router>
	), document.getElementById('root')
);
