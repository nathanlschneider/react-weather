import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6

import './Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClick() {
       this.setState({ value: !this.state.value });
    }

    handleMouseOver() {
        this.setState({ value: true });
    }

    render() {
      let menu;
  
      this.state.value ? menu = this.props.form : menu = '';
  
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
                    <span className='nav__link' onClick={this.handleClick}>
                        Location <span style={{ color: 'magenta' }}>{this.props.zipCode}</span>
                    </span>
                </div>
                <CSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {menu}
                </CSSTransitionGroup>
            </nav>
        );
    }
}
