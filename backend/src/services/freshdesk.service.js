const axios = require("axios");

exports.getTickets = (domain, apiKey) =>
 axios.get(`https://${domain}.freshdesk.com/api/v2/tickets`, {
  auth: { username: apiKey, password: "X" },
 });

exports.getConversations = (domain, apiKey, id) =>
 axios.get(`https://${domain}.freshdesk.com/api/v2/tickets/${id}/conversations`, {
  auth: { username: apiKey, password: "X" },
 });
