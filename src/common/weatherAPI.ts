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
            objRes.data = response.data;
        } catch (err) {
            objRes.errors.push(err);
        }
        
        return objRes;
    } catch (err) {
        console.error('Exception occured in "getWeatherData" method of "weatherAPI"!', err);
    }
};
