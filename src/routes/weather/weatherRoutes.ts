import express from 'express';
import { weatherByGeoLoc as weatherByGeoLocCon } from '../../controllers/weather/weatherController';
import { weatherByGeoLocVal } from '../../validators/weather/weather';

const weatherRouter = express.Router();

weatherRouter.get('/search-by-geo-location', weatherByGeoLocVal, weatherByGeoLocCon);

export default weatherRouter;
