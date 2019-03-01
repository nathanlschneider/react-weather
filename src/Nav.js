import React, { Component } from 'react';
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
    return (
      <>
        <nav className='nav'>
          <div className='nav__logo'>Weather</div>
          <div className='nav__links'>
            {this.props.locationLinks}
          </div>
        </nav>
        <CSSTransitionGroup 
            transitionName='example' 
            transitionEnterTimeout={200} 
            transitionLeaveTimeout={200}>
            {this.props.form}
        </CSSTransitionGroup>
      </>
    );
  }
}
