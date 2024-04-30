import { getWeatherData } from '../../common/weatherAPI';

// Method to get weather data by location
export const weatherByGeoLoc = async (lat: string, long: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get weather data!',
            data: {},
            errors: [] as any
        };

        const params = {
            lat: lat,
            long: long,
            format: 'json',
            u: 'f'
        };

        const objGetWeatherDataRes = await getWeatherData(params);
        if (objGetWeatherDataRes && objGetWeatherDataRes?.statusCode === 200) {
            objRes.statusCode = 200;
            objRes.message = 'Weather data fetched successfully!';
            objRes.data = objGetWeatherDataRes?.data;
        } else {
            objRes.errors.push(objGetWeatherDataRes);
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "weatherByGeoLoc" method of "weatherRepository"!', err);
    }
};

// Method to get weather data by location
export const weatherByLoc = async (location: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get weather data!',
            data: {},
            errors: [] as any
        };
        
        const params = {
            location: location,
            format: 'json',
            u: 'f'
        };
        
        const objGetWeatherDataRes = await getWeatherData(params);
        if (objGetWeatherDataRes && objGetWeatherDataRes?.statusCode === 200) {
            objRes.statusCode = 200;
            objRes.message = 'Weather data fetched successfully!';
            objRes.data = objGetWeatherDataRes?.data;
        } else {
            objRes.errors.push(objGetWeatherDataRes);
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "weatherByLoc" method of "weatherRepository"!', err);
    }
};
