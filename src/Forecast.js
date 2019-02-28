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

    static defaultProps = { zipCode: 49418 };

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
                <>
                    <span>{datum.weather[0].description}</span>
                    <i key={index} className={'owf owf-3x owf-' + datum.weather[0].id} />
                </>
            );
        });

        return <article className='forecast__article'>{casts}</article>;
    }
}
