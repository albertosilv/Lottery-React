import React from 'react';
import Route from './Route'
import { BrowserRouter } from 'react-router-dom';
import { Container, GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Redux from './Store'
function App() {
    return (
        <Provider store={Redux.Store}>
            <PersistGate loading={null} persistor={Redux.Persistor}>
                <BrowserRouter>
                    <Container>
                        <GlobalStyle />
                        <Route />
                    </Container>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
