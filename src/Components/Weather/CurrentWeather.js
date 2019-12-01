import React from 'react';

export default function CurrentWeather(props) {

    return (
        <div class="container">
            <div class="row">
                Current Weather
            </div>
            <div class="row">
                <div class="col-sm">
                    Temperature: {props.temp} <br/> Humidity: {props.humidity} <br/> Pressure: {props.pressure} <br/> Wind speed: {props.wind_speed} <br/> Wind bearing: {props.wind_bearing}
                </div>
            </div>
        </div>
    );
}

