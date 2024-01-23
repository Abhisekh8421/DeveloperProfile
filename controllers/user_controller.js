import axios from "axios";
import Datamodel from "../models/user_model.js";

export const StoreCoins = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = response.data;
    //Fetch the Top 10 Results
    const MainData = Object.values(data).slice(0, 10);
    const newdata = MainData.map(
      ({ name, last, buy, sell, volume, base_unit }) => ({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit,
      })
    );
    // console.log(newdata);
    await Datamodel.insertMany(newdata);
    res.json({ newdata });
  } catch (error) {
    // console.error("Error fetching and storing data:", error.message); for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Getcoins = async (req, res) => {
  const data = await Datamodel.find().limit(10);
  res.render("getCoins", { data });
};
