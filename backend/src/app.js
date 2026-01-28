const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
 res.status(200).json({ status: "ok" });
});
app.use("/auth", require("./routes/auth.routes"));
app.use("/integrations", require("./routes/integrations.routes"));
app.use("/freshdesk", require("./routes/freshdesk.routes"));
app.use("/hubspot", require("./routes/hubspot.routes"));
app.use("/webhooks", require("./routes/webhook.routes"));

module.exports = app;
