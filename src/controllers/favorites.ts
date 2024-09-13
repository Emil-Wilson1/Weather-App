import { Request, Response } from "express";
import axios from "axios";
import City from "../schema/citySchema";

export const getFavorites = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cities = City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cities!!!" });
  }
};

export const createFavorites=async(req:Request,res:Response):Promise<void>=>{
    try {
        const cityName=req.body.name
        const city = new City({name:cityName})
        await city.save()
        res.status(201).json(city)
    } catch (error) {
        res.status(500).json({error:"Error saving the city!!!"})
    }
}


