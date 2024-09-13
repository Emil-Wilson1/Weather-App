import { getFavorites, createFavorites } from './../controllers/favorites';
import express, { Router } from 'express';
import {  weatherCity } from '../controllers/weatherCityController';


const router:Router = express.Router();

router.get('/weather/:city',weatherCity)


//favorites

router.get('/favorites',getFavorites)
router.post('/favorites',createFavorites)


export default router;