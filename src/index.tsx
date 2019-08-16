import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './utils/reducer';
import FlexboxHelper from './components/flexbox-helper/flexbox-helper';
// import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><FlexboxHelper /></Provider>, document.getElementById('app'));

// serviceWorker.unregister();