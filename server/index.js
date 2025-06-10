require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
// const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors({
    origin: ["http://localhost:3002"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser())
app.use(express.json())
app.use('/', authRoute)
// app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let alltempHoldings = await HoldingsModel.find({});
  let allOrders = await OrdersModel.find({});
  let allHoldings = alltempHoldings.concat(allOrders);
  res.send(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.send(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    avg: req.body.avg ?? req.body.price, // Fallback to price
    price: req.body.price,
    percent: req.body.percent,
    mode: req.body.mode,
  });

  newOrder.save();
});

const startServer = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ DB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
  }
};

startServer();
