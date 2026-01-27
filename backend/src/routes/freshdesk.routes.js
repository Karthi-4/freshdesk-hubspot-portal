const axios = require("axios");
const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");
const fd = require("../services/freshdesk.service");

router.get("/tickets", auth, async (req, res) => {
 try {
  const user = req.user;
  console.log("User in freshdesk tickets route:", user);

  if (!user.freshdesk || !user.freshdesk.domain || !user.freshdesk.apiKey) {
   return res.status(400).json({ error: "Freshdesk not connected" });
  }

  const { domain, apiKey } = user.freshdesk;

  const url = `https://${domain}.freshdesk.com/api/v2/tickets`;

  const response = await axios.get(url, {
   auth: {
    username: apiKey,
    password: "X",
   },
  });

  res.json(response.data);
 } catch (err) {
  console.error("Freshdesk API error:", err.message);
  res.status(500).json({ error: "Failed to fetch tickets" });
 }
});

router.get("/tickets/:id/conversations", auth, async (req, res) => {
 const user = await User.findById(req.user.id);
 const { data } = await fd.getConversations(
  user.freshdesk.domain,
  user.freshdesk.apiKey,
  req.params.id,
 );
 res.json(data);
});

module.exports = router;
