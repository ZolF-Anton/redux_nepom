import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

import { createGlobalStyle } from 'styled-components';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/country/:name' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x:hidden;
  }
`;
