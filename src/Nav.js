import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6

import './Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value: false };
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

   

    handleMouseOver() {
        this.setState({ value: true });
    }

    render() {
    //   let menu;
  
    //   this.state.value ? menu = this.props.form : menu = '';
  
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
                    {this.props.locationLink}
                </div>
                <CSSTransitionGroup transitionName='example' transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                    {this.props.form}
                </CSSTransitionGroup>
            </nav>
        );
    }
}
