import React, { Component } from 'react';
import Key from './KeyChain';
import Zip from './csvjson.min.json';
//import './Radar.scss';

export default class Radar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherMain: null,
      weatherDescription: null,
      name: null,
      mainTemp: null,
      mainHumidity: null,
      icon: null
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${this.props.zipCode},us&units=imperial&appid=${
        Key.openWeather
      }`
    );

    const data = await res.json();
    this.setState({
      weatherMain: data.weather[0].main,
      weatherDescription: data.weather[0].description,
      name: data.name,
      mainTemp: data.main.temp,
      mainHumidity: data.main.humidity,
      icon: data.weather[0].id
    });
  }

  render() {
    console.log(Zip[this.props.zipCode]);
    return (
      <section className='current'>
        <article className='current__article'>
          <i className={'current__icon owf owf-pull-left owf-5x owf-' + this.state.icon} />
          <div className='current__text'>
            <span>
              <strong>{this.state.name}</strong>
            </span>
            <br />
            <span className='current__text current__text--small'>
              Temp {this.state.mainTemp}&#176;f {this.state.weatherMain} ({this.state.weatherDescription})
            </span>
            <br />
          </div>
        </article>
      </section>
    );
  }
}
