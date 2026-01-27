const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const hubspotService = require("../services/hubspot.service");

/**
 * GET /hubspot/contact?email=
 * Used to enrich Freshdesk ticket with CRM data
 */
router.get("/contact", auth, async (req, res) => {
 try {
  const { email } = req.query;
  if (!email) {
   return res.status(400).json({ message: "Email is required" });
  }

  const user = await User.findById(req.user.id);
  if (!user?.hubspotToken) {
   return res.status(400).json({ message: "HubSpot not connected" });
  }

  const response = await hubspotService.searchContact(user.hubspotToken, email);

  if (!response.data.results.length) {
   return res.json(null);
  }

  const contact = response.data.results[0];

  res.json({
   id: contact.id,
   name: `${contact.properties.firstname || ""} ${contact.properties.lastname || ""}`.trim(),
   email: contact.properties.email,
   phone: contact.properties.phone,
   lifecycleStage: contact.properties.lifecyclestage,
  });
 } catch (err) {
  console.error("HubSpot error:", err.response?.data || err.message);
  res.status(500).json({ message: "Failed to fetch HubSpot contact" });
 }
});

module.exports = router;
