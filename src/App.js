import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
  }

  handleClick(event) {
    this.setState({ showMenu: !this.state.showMenu, menuLocation: event.clientX - 150 });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ zipCode: this.state.value });
    this.setState({ showMenu: false });
    event.preventDefault();
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
                  <form className='nav__form' style={{left: this.state.menuLocation + 'px'}} onSubmit={this.handleSubmit}>
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
              locationLink={
                <span className='nav__link' onClick={this.handleClick}>
                  Location <span style={{ color: 'magenta'}}>{this.state.zipCode}</span>
                </span>
              }
            />
          </header>
          <main className='app__main'>
            <Route path='/radar' component={Radar} />
            <Route path='/current' render={props => <Current {...props} zipCode={this.state.zipCode} />} />
            <Route path='/forecast' component={Forecast} />
          </main>
          <footer className='app_footer' />
        </div>
      </div>
    );
  }
}
