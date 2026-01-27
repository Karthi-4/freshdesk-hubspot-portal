import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const signup = async () => {
  try {
   await api.post("/auth/signup", { email, password });
   navigate("/login");
  } catch {
   setError("Signup failed. Email may already exist.");
  }
 };

 return (
  <div className="container">
   <h2>Signup</h2>

   {error && <p className="error-text">{error}</p>}

   <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

   <input
    type="password"
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
   />

   <button onClick={signup}>Signup</button>

   <p style={{ marginTop: "12px" }}>
    Already have an account? <Link to="/login">Login</Link>
   </p>
  </div>
 );
}
