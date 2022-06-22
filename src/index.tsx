import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {Content} from './components/Content';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Content/>
    </Provider>
);

reportWebVitals();
