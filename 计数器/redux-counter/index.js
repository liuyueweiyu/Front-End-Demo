import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';
import counterApp from './reducers.js';

let data = {
    numlist: [100, 100]
}

let store = createStore(
    counterApp,
    data,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);