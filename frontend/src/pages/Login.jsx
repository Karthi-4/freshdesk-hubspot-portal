import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const login = async () => {
  try {
   const res = await api.post("/auth/login", { email, password });
   localStorage.setItem("token", res.data.token);
   navigate("/dashboard");
  } catch {
   setError("Invalid email or password");
  }
 };

 return (
  <div className="container">
   <h2>Login</h2>

   {error && <p className="error-text">{error}</p>}

   <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

   <input
    type="password"
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
   />

   <button onClick={login}>Login</button>

   <p style={{ marginTop: "12px" }}>
    Don’t have an account? <Link to="/signup">Signup</Link>
   </p>
  </div>
 );
}
