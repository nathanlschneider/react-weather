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

  static defaultProps = { zipCode: 49418 };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${this.props.zipCode},us&units=imperial&appid=${
        Key.openWeather
      }`
    )
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(data =>
        this.setState({
          weatherMain: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          name: data.name,
          mainTemp: data.main.temp,
          mainHumidity: data.main.humidity,
          icon: data.weather[0].icon
        })
      );
  }

  render() {
    return (
      <article className='current__article'>
        <img className='current__icon' src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt='icon' />
        <div className='current__text'>
          Currently in {this.state.name} it's {this.state.mainTemp}&#8457; with {this.state.weatherDescription}.
        </div>
      </article>
    );
  }
}
