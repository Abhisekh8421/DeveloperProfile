import mongoose from "mongoose";

const Dataschema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const Datamodel = mongoose.model("Data", Dataschema);
export default Datamodel;
