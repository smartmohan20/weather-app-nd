import { Request, Response } from 'express';
import { ISErrorRes } from '../../common/common';
import { weatherByGeoLoc as weatherByGeoLocRepo } from '../../repositories/weather/weatherRepository';

// Controller to get weather data by location
export const weatherByGeoLoc = async (req: Request, res: Response) : Promise<any> => {
  try {
    let objRes = ISErrorRes;
    const { lat, long } = req.query.lat as { lat: string; long: string };
    const objWeatherByGeoLocRes = await weatherByGeoLocRepo(lat, long);
    if (objWeatherByGeoLocRes && objWeatherByGeoLocRes?.statusCode) {
      objRes = objWeatherByGeoLocRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "eatherByLoc" method of "weatherController"!', err);
  }
};
