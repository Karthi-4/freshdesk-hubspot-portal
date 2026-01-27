// import { useState } from "react";
// import api from "../api/axios";

// export default function Connect() {
//  const [domain, setDomain] = useState("");
//  const [apiKey, setApiKey] = useState("");
//  const [hubspotToken, setHubspotToken] = useState("");

//  return (
//   <div>
//    <h2>Connect Integrations</h2>

//    <h3>Freshdesk</h3>
//    <input placeholder="Enter Freshdesk domain" onChange={(e) => setDomain(e.target.value)} />
//    <input placeholder="Enter Freshdesk password" onChange={(e) => setApiKey(e.target.value)} />
//    <button onClick={() => api.post("/integrations/freshdesk", { domain, apiKey })}>
//     Connect Freshdesk
//    </button>

//    <h3>HubSpot</h3>
//    <input
//     placeholder="Enter HubSpot Private Access Token"
//     onChange={(e) => setHubspotToken(e.target.value)}
//    />
//    <button onClick={() => api.post("/integrations/hubspot", { token: hubspotToken })}>
//     Connect HubSpot
//    </button>
//   </div>
//  );
// }
import { useState } from "react";
import api from "../api/axios";

export default function Connect() {
 const [domain, setDomain] = useState("");
 const [apiKey, setApiKey] = useState("");
 const [hubspotToken, setHubspotToken] = useState("");
 const [message, setMessage] = useState("");

 const connectFreshdesk = async () => {
  try {
   await api.post("/integrations/freshdesk", { domain, apiKey });
   setMessage("Freshdesk connected successfully");
  } catch {
   setMessage("Failed to connect Freshdesk");
  }
 };

 const connectHubspot = async () => {
  try {
   await api.post("/integrations/hubspot", { token: hubspotToken });
   setMessage("HubSpot connected successfully");
  } catch {
   setMessage("Failed to connect HubSpot");
  }
 };

 return (
  <div className="container">
   <h2>Connect Integrations</h2>

   {message && <p className="success-text">{message}</p>}

   <div className="section">
    <h3>Freshdesk</h3>

    <input placeholder="Enter Freshdesk domain" onChange={(e) => setDomain(e.target.value)} />

    <input
     placeholder="Enter Freshdesk password"
     type="password"
     onChange={(e) => setApiKey(e.target.value)}
    />

    <button onClick={connectFreshdesk}>Connect Freshdesk</button>
   </div>

   <div className="section">
    <h3>HubSpot</h3>

    <input
     placeholder="Enter HubSpot Private Access Token"
     type="password"
     onChange={(e) => setHubspotToken(e.target.value)}
    />

    <button onClick={connectHubspot}>Connect HubSpot</button>
   </div>
  </div>
 );
}
