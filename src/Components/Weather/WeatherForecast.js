import React from 'react';

export default function WeatherForecast(props) {
	return (
		<div class="container">
			<div class="row">Forecast</div>
			<div class="row">
				<div class="col-sm">Temperature: {props.temp[0]}  <br/>Condition: {props.condition[0]}<br/>Pressure {props.pressure[0]} <br/>Humidity: {props.humidity[0]} <br/>Wind speed: {props.windSpeed[0]} <br/>Wind bearing:{props.windBearing[0]} <br/></div>
				<div class="col-sm">Temperature: {props.temp[1]} <br/>Condition: {props.condition[1]}<br/>Pressure {props.pressure[1]}<br/>Humidity: {props.humidity[1]}<br/>Wind speed: {props.windSpeed[1]}<br/>Wind bearing: {props.windBearing[1]}<br/></div>
				<div class="col-sm">Temperature: {props.temp[2]} <br/>Condition: {props.condition[2]}<br/>Pressure {props.pressure[2]}<br/>Humidity: {props.humidity[2]}<br/>Wind speed: {props.windSpeed[2]}<br/>Wind bearing: {props.windBearing[2]}<br/></div> 
			</div>
		</div>
	);
}
