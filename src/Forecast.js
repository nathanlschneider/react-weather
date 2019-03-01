import React, { Component } from 'react';
import Key from './KeyChain';
import './Forecast.scss';

export default class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: []
        };
    }


    componentDidMount() {
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?zip=${this.props.zipCode},us&units=imperial&appid=${
                Key.openWeather
            }`
        )
            .then(response => response.text())
            .then(text => JSON.parse(text))
            .then(json => this.setState({ forecastData: json.list }));
    }

    render() {
        let casts = this.state.forecastData.map((datum, index) => {
            return (
                <article key={index} className='forecast__article'>
                    <i className={'owf owf-3x owf-' + datum.weather[0].id} 
                    style={datum.weather[0].description === 'clear sky' ? {color: 'orange'} : { color: 'grey'}}
/>
                    <div>{datum.weather[0].description}</div>
                    <div className='forecast__date'>{datum.dt_txt}</div>
                </article>
            );
        });

        return <section className='forecast'>{casts}</section>;
    }
}
