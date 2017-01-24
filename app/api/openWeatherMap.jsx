const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a2ae108c5462e951a354eb9479143631&units=metric';

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.RESPONSE.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function (response) {
      throw new Error(response.response.data.message);
    });
  }
}