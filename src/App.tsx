import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Allapp from './allapp/Allapp';
import Allgra from './allgra/Allgra';
import './App.css';
import Homefun from './homefun/Homefun';
import Nav from './Nav';
import { CookiesProvider } from 'react-cookie';

function App() { 
    const hosturl = process.env.REACT_APP_API_ORIGIN;
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={
                    <CookiesProvider>
                    <Homefun
                        hosturl={hosturl}
                    />
                    </CookiesProvider>
                }
                />
                <Route path='allapp' element={
                    <Allapp
                    hosturl={hosturl}
                    />
                }/>
                <Route path='allgra' element={
                    <Allgra
                    hosturl={hosturl}
                    />
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
