import { connect } from "mongoose";

async function connectToDB() {
  try {
    await connect("mongodb://localhost:27017", {
      dbName: "Ecommerce_24",
    });
    console.log("connect to DB");
  } catch (error) {
    console.log("Failed to connect");
  }
}
export { connectToDB };
