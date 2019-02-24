import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Current from './Current';
import Radar from './Radar';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
        
            <div className='app__container'>
                <header className='app__header'>
                    <Nav />
                </header>
                <main className='app__main'>
                    <Route path='/radar' component={Radar} />
                    <Route path='/current' component={Current} />
                </main>
                <footer className='app_footer' />
            </div>
        </div>
    );
};

export default App;
