import React from 'react';
import Route from './Route'
import { BrowserRouter } from 'react-router-dom';
import { Container, GlobalStyle } from './styles'
function App() {
    return (
        <BrowserRouter>
            <Container>
                <GlobalStyle />
                <Route />
            </Container>
        </BrowserRouter>
    );
}

export default App;
