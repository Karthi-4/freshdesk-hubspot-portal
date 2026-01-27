import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import CRMPanel from "../components/CRMPanel";
import ConversationList from "../components/ConversationList";

export default function TicketDetails() {
 const { id } = useParams();
 const [ticket, setTicket] = useState(null);
 const [conversations, setConversations] = useState([]);

 useEffect(() => {
  api.get("/freshdesk/tickets").then((res) => {
   setTicket(res.data.find((t) => t.id == id));
  });

  api.get(`/freshdesk/tickets/${id}/conversations`).then((res) => setConversations(res.data));
 }, [id]);

 if (!ticket) return <p className="loading-text">Loading ticket...</p>;

 return (
  <div className="container">
   <h2>{ticket.subject}</h2>

   <div className="ticket-description">
    {ticket.description_text || "No description available."}
   </div>

   <div className="section">
    <h3>Customer (HubSpot)</h3>
    <CRMPanel email={ticket.requester?.email} />
   </div>

   <div className="section">
    <h3>Conversations</h3>
    <ConversationList conversations={conversations} />
   </div>
  </div>
 );
}
