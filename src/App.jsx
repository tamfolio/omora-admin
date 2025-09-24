import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Login from './Pages/Auth/Login';
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import Providers from './Components/Dashboard/providers/Providers';


function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome to your dashboard!</p>
    </div> 
  );
}

function Individuals() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Individuals</h1>
      <p className="text-gray-600">Individuals page content goes here.</p>
    </div>
  );
}

function Businesses() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Businesses</h1>
      <p className="text-gray-600">Businesses page content goes here.</p>
    </div>
  );
}

function Customers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Customers</h1>
      <p className="text-gray-600">Customers page content goes here.</p>
    </div>
  );
}

function Transactions() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Transactions</h1>
      <p className="text-gray-600">Transactions page content goes here.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Settings</h1>
      <p className="text-gray-600">Settings page content goes here.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} /> {/* /dashboard */}
          <Route path="individuals" element={<Individuals />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="customers" element={<Customers />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="providers" element={<Providers />} />
        
          {/* Add more routes as needed */}
        </Route>

        {/* Redirect root to login or dashboard */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;