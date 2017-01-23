const React = require('react');
const Weather = require('Weather');

const WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location} lol</h3>
  );
}

module.exports = WeatherMessage;