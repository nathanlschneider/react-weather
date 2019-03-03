import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Nav from './Nav';
import Current from './Current';
import Radar from './Radar';
import Forecast from './Forecast';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: 49418,
      value: null,
      showMenu: false,
      menuLocation: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(event) {
    this.setState({ showMenu: !this.state.showMenu, menuLocation: event.clientX - 150 });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ zipCode: this.state.value });
    this.closeMenu();
    event.preventDefault();
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <div className='app'>
        <div className='app__container'>
          <header className='app__header'>
            <Nav
              zipCode={this.state.zipCode}
              form={
                this.state.showMenu ? (
                  <form
                    className='nav__form'
                    style={{ left: this.state.menuLocation + 'px' }}
                    onSubmit={this.handleSubmit}
                  >
                    <label className='form__label'>Zip Code</label>
                    <input
                      className='form__input form__input--magenta'
                      type='text'
                      pattern='[0-9]{5}'
                      placeholder='12345'
                      onChange={this.handleChange}
                      required
                      autoFocus
                    />
                    <input className='form__btn' type='submit' value='Submit' />
                  </form>
                ) : null
              }
              locationLinks={
                <>
                  <NavLink
                    className='nav__link'
                    activeClassName='nav__link--active'
                    exact
                    onClick={this.closeMenu}
                    to='/current'
                  >
                    Current
                  </NavLink>
                  <NavLink
                    className='nav__link'
                    activeClassName='nav__link--active'
                    exact
                    onClick={this.closeMenu}
                    to='/forecast'
                  >
                    Forecast
                  </NavLink>
                  <NavLink
                    className='nav__link'
                    activeClassName='nav__link--active'
                    exact
                    onClick={this.closeMenu}
                    to='/radar'
                  >
                    Radar
                  </NavLink>
                  <NavLink
                    className='nav__link'
                    activeClassName='nav__link--active'
                    exact
                    onClick={this.handleClick}
                    to='/'
                  >
                    Location <span style={{ color: 'magenta' }}>{this.state.zipCode}</span>
                  </NavLink>
                </>
              }
            />
          </header>
          <main
            className='app__main'
            style={{
              backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${
                this.state.zipCode
              }&zoom=10&scale=2&size=1200x${
                window.innerHeight
              }&maptype=roadmap&key=AIzaSyCrGBhlzriwn8e4VKfc7aI1LkWc6Vt40TI`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto'
            }}
          >
            <Route path='/radar' render={props => <Radar {...props} zipCode={this.state.zipCode} />} />

            <Route path='/current' render={props => <Current {...props} zipCode={this.state.zipCode} />} />
            <Route path='/forecast' render={props => <Forecast {...props} zipCode={this.state.zipCode} />} />
            <Route path='/' component={Current} />
          </main>
          <footer className='app_footer' />
        </div>
      </div>
    );
  }
}
