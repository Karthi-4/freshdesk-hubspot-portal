import { Link } from "react-router-dom";

export default function Dashboard() {
 return (
  <div>
   <h1>Dashboard</h1>
   <nav>
    <Link to="/connect">Connect Integrations</Link>
    <br />
    <Link to="/tickets">View Tickets</Link>
    <br />
    <Link to="/webhooks">Webhook Logs</Link>
   </nav>
  </div>
 );
}
