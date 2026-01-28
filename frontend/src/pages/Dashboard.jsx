import { Link } from "react-router-dom";

export default function Dashboard() {
 return (
  <div className="container">
   <h1>Dashboard</h1>

   <div className="card">
    <Link to="/connect">Connect Integrations</Link>
   </div>

   <div className="card">
    <Link to="/tickets">View Tickets</Link>
   </div>

   <div className="card">
    <Link to="/webhooks">Webhook Logs</Link>
   </div>
  </div>
 );
}
