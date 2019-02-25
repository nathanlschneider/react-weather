import React, { Component } from 'react';
import Key from './KeyChain';
import './Current.scss';

export default class Current extends Component {
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
      icon: data.weather[0].icon
    });
  }

  render() {
    return (
      <article className='current__article'>
        <div className='current__text'>
          Currently in {this.state.name} it's {this.state.mainTemp}&#8457; with {this.state.weatherDescription}.
        </div>
      </article>
    );
  }
}
