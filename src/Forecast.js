import React, { Component } from 'react';
import Key from './KeyChain';
import './Forecast.scss';

export default class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        };
    }

    static defaultProps = { zipCode: 49418 };

    componentDidMount() {
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?zip=${this.props.zipCode},us&units=imperial&appid=${
                Key.openWeather
            }`
        )
            .then(response => response.text())
            .then(text => this.setState({forecastData: text}));
    }

    render() {
        return (
            <article className='forecast__article'>
                <div className='forcast__text'>{this.state.forecastData}</div>
            </article>
        );
    }
}
