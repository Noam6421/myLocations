import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';
import theme from './styles/theme';
import App from './components/App';
import { store, persistor } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

