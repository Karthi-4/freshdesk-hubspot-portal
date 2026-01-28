import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();

 const signup = async () => {
  await api.post("/auth/signup", { email, password });
  navigate("/login");
 };

 return (
  <div>
   <h2>Signup</h2>
   <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
   <input
    type="password"
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
   />
   <button onClick={signup}>Signup</button>
  </div>
 );
}
