import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Allapp from './allapp/Allapp';
import Allgra from './allgra/Allgra';
import './App.css';
import HomeSch from './sch/HomeSch';
import Nav from './Nav';
import { CookiesProvider } from 'react-cookie';
import Home from './home/Home';

function App() { 
    const hosturl = process.env.REACT_APP_API_ORIGIN;
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={
                    <Home
                    origin={hosturl as string}
                    />
                }
                />
                <Route path='sch' element={
                    <HomeSch
                        hosturl={hosturl}
                    />
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
