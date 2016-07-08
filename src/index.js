import SC from 'soundcloud';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import Callback from './components/Callback';
const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'some other track'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream}/>
                <Route path="/" component={Stream}/>
                <Route path="/callback" component={Callback}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);