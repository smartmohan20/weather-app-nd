import axios from 'axios';

const xRapidApiHost = process.env.X_RAPID_API_Host;
const xRapidApiKey = process.env.X_RAPID_API_KEY;

let options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {},
    headers: {
      'X-RapidAPI-Key': xRapidApiKey,
      'X-RapidAPI-Host': xRapidApiHost
    }
};

// Method to get weather data
export const getWeatherData = async (params: object) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get weather data!',
            data: {},
            errors: [] as any
        };

        // Update params to options
        options.params = params;

        try {
            const response = await axios.request(options);
            objRes.statusCode = 200;
            objRes.message = 'Weather data fetched successfully!';
           
            const weatherData = response.data;
            const temperatureF = weatherData?.current_observation?.condition?.temperature;
            const temperatureC = Math.round((temperatureF - 32) * (5/9));
            const locCity = weatherData?.location?.city;
            const locCountry = weatherData?.location?.country;
            const humidity =  weatherData?.current_observation?.atmosphere?.humidity;
            const windSpeed = weatherData?.current_observation?.wind?.speed;

            const resWeatherData = {
                temperature: temperatureC,
                city: locCity,
                country: locCountry,
                humidity: humidity,
                windSpeed: windSpeed
            };

            objRes.data = resWeatherData
        } catch (err) {
            objRes.errors.push(err);
        }
        
        return objRes;
    } catch (err) {
        console.error('Exception occured in "getWeatherData" method of "weatherAPI"!', err);
    }
};
