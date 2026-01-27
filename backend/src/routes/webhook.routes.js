const router = require("express").Router();
const WebhookLog = require("../models/WebhookLog");

router.post("/freshdesk", async (req, res) => {
 await WebhookLog.create({
  eventType: req.body.event_type,
  payload: req.body,
 });
 res.sendStatus(200);
});

router.get("/logs", async (_, res) => {
 res.json(await WebhookLog.find().sort({ createdAt: -1 }));
});

module.exports = router;
