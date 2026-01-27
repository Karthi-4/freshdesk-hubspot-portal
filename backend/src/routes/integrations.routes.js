const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

router.post("/freshdesk", auth, async (req, res) => {
 await User.findByIdAndUpdate(req.user.id, { freshdesk: req.body });
 res.json({ msg: "Freshdesk connected" });
});

router.post("/hubspot", auth, async (req, res) => {
 await User.findByIdAndUpdate(req.user.id, { hubspotToken: req.body.token });
 res.json({ msg: "HubSpot connected" });
});

module.exports = router;
