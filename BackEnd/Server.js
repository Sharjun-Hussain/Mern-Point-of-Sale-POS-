const express = require("express");
const cors = require("cors");
const mongoo = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/User-Routes");

dotenv.config({ path: ".env" });

const app = express();

async function ConnectDB() {
  await mongoo
    .connect("mongodb://127.0.0.1:27017/mernpos")
    .then((con) => {
      console.log(`Database Connected ${con.Connection.name} `);
    })
    .catch((err) => {
      console.log(err);
    });
}

ConnectDB();

app.use(cors());
app.use(express.json());

app.post("/api/", userRoute);

app.listen(process.env.PORT, (con) => {
  console.log(`Server Is listening  : ${process.env.PORT} `);
});
