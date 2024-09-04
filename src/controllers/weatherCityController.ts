import { Request, Response } from "express";
import axios from "axios";

export const weatherCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const city = req.params.city;
  const apiKey = process.env.YOUR_API_KEY; 
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
};
