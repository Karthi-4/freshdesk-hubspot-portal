import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Tickets() {
 const [tickets, setTickets] = useState([]);
 const navigate = useNavigate();

 useEffect(() => {
  api.get("/freshdesk/tickets").then((res) => setTickets(res.data));
 }, []);

 return (
  <div className="container">
   <h2>Tickets</h2>

   {tickets.length === 0 && <p className="empty-text">No tickets found.</p>}

   {tickets.map((t) => (
    <div className="card" key={t.id} onClick={() => navigate(`/tickets/${t.id}`)}>
     {t.subject}
    </div>
   ))}
  </div>
 );
}
