import { Request, Response } from 'express';
import { ISErrorRes } from '../../common/common';
import { weatherByGeoLoc as weatherByGeoLocRepo, weatherByLoc as weatherByLocRepo } from '../../repositories/weather/weatherRepository';

// Controller to get weather data by location
export const weatherByGeoLoc = async (req: Request, res: Response) : Promise<any> => {
  try {
    let objRes = ISErrorRes;
    const { lat, long } = req.query as { lat: string; long: string };
    const objWeatherByGeoLocRes = await weatherByGeoLocRepo(lat, long);
    if (objWeatherByGeoLocRes && objWeatherByGeoLocRes?.statusCode) {
      objRes = objWeatherByGeoLocRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "weatherByLoc" method of "weatherController"!', err);
  }
};

// Controller to get weather data by location
export const weatherByLoc = async (req: Request, res: Response) : Promise<any> => {
  try {
    let objRes = ISErrorRes;
    const { location } = req.query as { location: string };
    
    const objWeatherByLocRes = await weatherByLocRepo(location);
    if (objWeatherByLocRes && objWeatherByLocRes?.statusCode) {
      objRes = objWeatherByLocRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "weatherByLoc" method of "weatherController"!', err);
  }
};
