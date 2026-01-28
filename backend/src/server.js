require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

app.listen(process.env.PORT, async () => {
 console.log("Server running on", process.env.PORT);
 await connectDB();
});
