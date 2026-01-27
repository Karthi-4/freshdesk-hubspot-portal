const axios = require("axios");

exports.searchContact = (token, email) =>
 axios.post(
  "https://api.hubapi.com/crm/v3/objects/contacts/search",
  {
   filterGroups: [
    {
     filters: [{ propertyName: "email", operator: "EQ", value: email }],
    },
   ],
  },
  { headers: { Authorization: `Bearer ${token}` } },
 );
