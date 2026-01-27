const mongoose = require("mongoose");

const WebhookLogSchema = new mongoose.Schema({
 eventType: String,
 payload: Object,
 createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WebhookLog", WebhookLogSchema);
