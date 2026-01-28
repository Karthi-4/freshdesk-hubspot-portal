import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import TicketDetails from "./pages/TicketDetails";
import Webhooks from "./pages/Webhooks";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
 return (
  <Routes>
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />

   {/* Root redirect */}
   <Route path="/" element={<Navigate to="/dashboard" replace />} />

   {/* Protected routes */}
   <Route
    path="/dashboard"
    element={
     <ProtectedRoute>
      <Dashboard />
     </ProtectedRoute>
    }
   />

   <Route
    path="/connect"
    element={
     <ProtectedRoute>
      <Connect />
     </ProtectedRoute>
    }
   />

   <Route
    path="/tickets"
    element={
     <ProtectedRoute>
      <Tickets />
     </ProtectedRoute>
    }
   />

   <Route
    path="/tickets/:id"
    element={
     <ProtectedRoute>
      <TicketDetails />
     </ProtectedRoute>
    }
   />

   <Route
    path="/webhooks"
    element={
     <ProtectedRoute>
      <Webhooks />
     </ProtectedRoute>
    }
   />
  </Routes>
 );
}
