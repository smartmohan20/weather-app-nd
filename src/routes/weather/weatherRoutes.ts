import express from 'express';
import { weatherByGeoLoc as weatherByGeoLocCon, weatherByLoc as weatherByLocCon } from '../../controllers/weather/weatherController';
import { weatherByGeoLocVal, weatherByLocVal } from '../../validators/weather/weather';

const weatherRouter = express.Router();

weatherRouter.get('/search-by-geo-location', weatherByGeoLocVal, weatherByGeoLocCon);
weatherRouter.get('/search-by-location', weatherByLocVal, weatherByLocCon);

export default weatherRouter;
