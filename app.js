require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect.db")

const PORT = process.env.PORT || 5000;

const employee_routes = require("./routers/employee.routes")

app.use(express.json());

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log("connected to PORT ===========>>>>>>>>>", `${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}
start();

app.use(employee_routes);