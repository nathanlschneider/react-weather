import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {

    render() {
        return (
            <nav className='nav'>
                <div className='nav__logo'>Weather</div>
                <div className='nav__links'>
                    <Link className='nav__link' to='/current'>
                        Current
                    </Link>
                    <Link className='nav__link' to='/forecast'>
                        Forecast
                    </Link>
                    <Link className='nav__link' to='/radar'>
                        Radar
                    </Link>
                    <Link className='nav__link' to='/location'>
                        Location <span style={{ color: 'magenta'}}>{this.props.zipCode}</span>
                    </Link>
                </div>
            </nav>
        );
    }
}
