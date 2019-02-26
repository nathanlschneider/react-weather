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
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ zipCode: this.state.value });

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
                <div className='nav__form'>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Zip Code
                      <input type='text' onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' />
                  </form>
                </div>
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
