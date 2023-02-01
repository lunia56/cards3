import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {store} from '../m2-bll/store';
import {Provider} from 'react-redux';
import Pages from './routes/Pages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Pages/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
