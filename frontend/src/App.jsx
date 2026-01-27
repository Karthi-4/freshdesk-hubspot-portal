import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import TicketDetails from "./pages/TicketDetails";
import Webhooks from "./pages/Webhooks";

const isAuth = () => !!localStorage.getItem("token");

export default function App() {
 return (
  <Routes>
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />

   <Route path="/" element={isAuth() ? <Dashboard /> : <Navigate to="/login" />} />
   <Route path="/connect" element={<Connect />} />
   <Route path="/tickets" element={<Tickets />} />
   <Route path="/tickets/:id" element={<TicketDetails />} />
   <Route path="/webhooks" element={<Webhooks />} />
  </Routes>
 );
}
