import express, { Router } from 'express';
import {  weatherCity } from '../controllers/weatherCityController';


const router:Router = express.Router();

router.get('/weather/:city',weatherCity)


export default router;