import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Webhooks() {
 const [logs, setLogs] = useState([]);

 useEffect(() => {
  api.get("/webhooks/logs").then((res) => setLogs(res.data));
 }, []);

 return (
  <div className="container">
   <h2>Webhook Logs</h2>

   {logs.length === 0 && <p className="empty-text">No webhook events received yet.</p>}

   {logs.map((l) => (
    <div className="webhook-card" key={l._id}>
     <div className="webhook-meta">
      <strong>Event:</strong> {l.eventType || "Unknown"} <br />
      <strong>Time:</strong> {new Date(l.createdAt).toLocaleString()}
     </div>

     <pre className="webhook-payload">{JSON.stringify(l.payload, null, 2)}</pre>
    </div>
   ))}
  </div>
 );
}
