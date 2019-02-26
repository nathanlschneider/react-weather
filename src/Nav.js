import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick() {
    this.state.value ? this.setState({ value: false }) : this.setState({ value: true });
  }

  handleMouseOver() {
    this.setState({ value: true });
  }

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
          <span className='nav__link' onMouseOver={this.handleMouseOver} onClick={this.handleClick}>
            Location <span style={{ color: 'magenta' }}>{this.props.zipCode}</span>
          </span>
        </div>
        <div style={{ opacity: this.state.value ? 1 : 0 }}>{this.props.form}</div>
      </nav>
    );
  }
}
