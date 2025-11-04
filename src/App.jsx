import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Login from './Pages/Auth/Login';
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import Insights from './Components/Dashboard/Insights/Insights';
import CustomersMain from './Components/Dashboard/Customers/CustomersMain';
import CustomerProfile from './Components/Dashboard/Customers/CustomersProfile';
import TransactionsMain from './Components/Dashboard/Transactions/TransactionsMain';
import TransactionsDetails from './Components/Dashboard/Transactions/TransactionsDetails';
import PauseRequest from './Components/Dashboard/Investment/PauseRequest';
import PauseRequestDetails from './Components/Dashboard/Investment/PauseRequestDetails';
import InvestmentList from './Components/Dashboard/Investment/InvestmentList/InvestmentList';
import BulkInvestmentDetails from './Components/Dashboard/Investment/InvestmentList/BulkInvestmentDetails';
import RecurringInvestmentDetails from './Components/Dashboard/Investment/InvestmentList/ReoccuringInvestmentDetails';
import Providers from './Components/Dashboard/providers/Providers';
import Auditlog from './Components/Dashboard/audit-log/AuditLog';
import Newsroom from './Components/Dashboard/newsroom/Newsroom';
import Compliance from './Components/Dashboard/compliance/Compliance';
import IndividualDetail from './Components/Dashboard/compliance/IndividualDetail';
import BusinessDetail from './Components/Dashboard/compliance/BusinessDetail';
import Settings from './Components/Dashboard/settings/ProfileSettings';
import RatesAndFees from './Components/Dashboard/rates-fees/RatesAndFees';
import Limits from './Components/Dashboard/limits/Limits';
import Team from './Components/Dashboard/team/Team';
import Otp from './Pages/Auth/Otp';

function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome to your dashboard!</p>
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

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} /> {/* /dashboard */}
          <Route path="individuals" element={<Insights userType="individuals" />} />
          <Route path="businesses" element={<Insights userType="businesses" />} />
          <Route path="customers" element={<CustomersMain />} />
          <Route path="customers/:id" element={<CustomerProfile />} />
          <Route path="transactions" element={<TransactionsMain />} />
          <Route path="transactions/:id" element={<TransactionsDetails />} />
          <Route path="pause-requests" element={<PauseRequest />} />
          <Route path="pause-requests/:id" element={<PauseRequestDetails />} />
          <Route path="investments-list" element={<InvestmentList />} />
          <Route path="bulk-investments/:id" element={<BulkInvestmentDetails />} />
          <Route path="recurring-investments/:id" element={<RecurringInvestmentDetails />} />
          <Route path="providers" element={<Providers />} />
          <Route path="audit-log" element={<Auditlog />} />
          <Route path="newsroom" element={<Newsroom />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="compliance/individual/:id" element={<IndividualDetail />} />
          <Route path="compliance/business/:id" element={<BusinessDetail />} />
          <Route path="rates-fees" element={<RatesAndFees />} />
          <Route path="limits" element={<Limits />} />
          <Route path="teams" element={<Team />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Root redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;