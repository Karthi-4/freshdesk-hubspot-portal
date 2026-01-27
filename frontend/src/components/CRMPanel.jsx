import { useEffect, useState } from "react";
import api from "../api/axios";

export default function CRMPanel({ email }) {
 const [crm, setCrm] = useState(null);

 useEffect(() => {
  if (email) {
   api.get(`/hubspot/contact?email=${email}`).then((res) => setCrm(res.data));
  }
 }, [email]);

 if (!crm) return <p>No CRM data</p>;

 return (
  <div>
   <h3>CRM Info</h3>
   <p>Name: {crm.name}</p>
   <p>Email: {crm.email}</p>
   <p>Lifecycle: {crm.lifecycleStage}</p>
   <p>Phone: {crm.phone}</p>
  </div>
 );
}
