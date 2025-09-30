import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Home, MoreVertical, Check } from "lucide-react";
import CustomerTabs from "./CustomersTabs";
import TransactionHistory from "./TransactionHistory";
import InvestmentHistory from "./InvestmentHistory";
import AuditTrail from "./AuditTrail";

function CustomerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomerData(id);
  }, [id]);

  const fetchCustomerData = async (customerId) => {
    try {
      // Mock data - replace with actual API call
      const mockCustomer = {
        id: customerId,
        type: customerId.startsWith("23") ? "individual" : "business",
        // Individual mock data
        ...(customerId.startsWith("23") && {
          personalInfo: {
            individualId: `# ${customerId}`,
            firstName: "Simon",
            middleName: "Smith",
            lastName: "Moneyton",
            dateOfBirth: "07/07/1997",
            email: "mikesmith@gmail.com",
            bvn: "2233445566",
            occupation: "Surgeon",
            gender: "Male",
            sourceOfFunds: "Inheritance",
            signupDate: "21/04/2025",
          },
          onboardingStatus: {
            kycVerification: true,
            riskProfile: true,
            walletFunded: true,
            dollarCostAveraging: true,
          },
        }),
        // Business mock data
        ...(customerId.startsWith("34") && {
          businessInfo: {
            businessId: `# ${customerId}`,
            businessName: "Vetra",
            rcNumber: "72458884",
            tin: "1097544435",
            type: "Investment",
            address: "Banana Island, Lagos",
            description: "Tech company",
            gender: "Male",
            sourceOfFunds: "Inheritance",
            signupDate: "21/04/2025",
          },
          onboardingStatus: {
            kycVerification: true,
            riskProfile: true,
            walletFunded: true,
            dollarCostAveraging: true,
          },
          directorInfo: {
            fullName: "Simon",
            email: "mikesmith@gmail.com",
            mobile: "08024154507",
            address: "Lekki, Lagos",
            bvn: "2233445566",
          },
          team: [
            {
              name: "John Doe Adediphin",
              email: "johndoe@gmail.com",
              mobile: "09076543577",
              address: "Victoria Island, Lagos",
              bvn: "0102202567",
              role: "Initiator",
              status: "Active",
              kycStatus: "Pending",
              lastLogin: "01/02/2025",
            },
            {
              name: "John Doe Adediphin",
              email: "johndoe@gmail.com",
              mobile: "09076543577",
              address: "Victoria Island, Lagos",
              bvn: "0102202567",
              role: "Admin",
              status: "Active",
              kycStatus: "Pending",
              lastLogin: "01/02/2025",
            },
          ],
          accountSection: {
            activityStatus: "Active",
            rmAssigned: "Smith",
            investmentRiskProfile: "Balanced",
            virtualAccountNumber: "0085432373",
          },
        }),
        // Common data for both types
        activeInvestment: {
          type: "Investment Type",
          status: "Active",
          tenor: customerId.startsWith("23") ? "120 days" : "150 days",
          amount: customerId.startsWith("23") ? "USD $100.00" : "USD $3,000",
          startDate: "01/02/2025",
          endDate: "01/02/2025",
          roiToDate: "$50000",
        },
        wallet: {
          availableBalances: {
            usdc: "$50000",
            ngn: "5,000,000",
            usdt: "50000",
          },
          ledgerBalances: { usdc: "$50000", ngn: "5,000,000", usdt: "50000" },
        },
        lifetimeRevenue: {
          performanceFees: "50",
          managementFees: "200",
          transactionFees: "200",
        },
        limits: {
          dailyWithdrawal: "5000 USDT",
          singleWithdrawal: "200",
          monthlyWithdrawal: "200",
        },
        kycDetails: customerId.startsWith("23")
          ? {
              validId: "IMG23038477585.jpeg",
              livenessCapture: "IMG23038477585.jpeg",
              proofOfAddress: "IMG23038477585.jpeg",
            }
          : {
              certificateOfIncorporation: "IMG23038477585.jpeg",
              cacForm: "IMG23038477585.jpeg",
              authorizationLetter: "IMG23038477585.jpeg",
              validIdOfDirector: "IMG23038477585.jpeg",
              recentUtilityBill: "IMG23038477585.jpeg",
            },
      };

      setCustomer(mockCustomer);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customer:", error);
      setLoading(false);
    }
  };

  const StatusIcon = ({ completed }) => (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center ${
        completed ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      {completed && <Check className="w-3 h-3 text-white" />}
    </div>
  );

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading customer details...</div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Customer not found</div>
      </div>
    );
  }

  const renderProfileContent = () => {
    if (customer.type === "individual") {
      return (
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-500">Individual ID</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.individualId}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">First Name</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.firstName}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Middle Name</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.middleName}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.lastName}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date of Birth</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.dateOfBirth}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.email}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">BVN</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.bvn}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Occupation</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.occupation}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.gender}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Source of Funds</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.sourceOfFunds}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Signup Date</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.personalInfo.signupDate}
                </p>
              </div>
            </div>
          </div>

          {/* Onboarding Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Onboarding Status
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.kycVerification}
                />
                <span className="text-sm text-gray-700">KYC Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon completed={customer.onboardingStatus.riskProfile} />
                <span className="text-sm text-gray-700">Risk Profile</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.walletFunded}
                />
                <span className="text-sm text-gray-700">Wallet Funded</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.dollarCostAveraging}
                />
                <span className="text-sm text-gray-700">
                  Dollar Cost Averaging (DCA)
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Business Profile
      return (
        <div className="space-y-6">
          {/* Business Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Business Information
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-500">Business ID</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.businessId}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Business Name</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.businessName}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">RC Number</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.rcNumber}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">TIN</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.tin}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Type</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.type}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.address}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Description</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.description}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Signup Date</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.businessInfo.signupDate}
                </p>
              </div>
            </div>
          </div>

          {/* Onboarding Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Onboarding Status
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.kycVerification}
                />
                <span className="text-sm text-gray-700">KYC Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon completed={customer.onboardingStatus.riskProfile} />
                <span className="text-sm text-gray-700">Risk Profile</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.walletFunded}
                />
                <span className="text-sm text-gray-700">Wallet Funded</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusIcon
                  completed={customer.onboardingStatus.dollarCostAveraging}
                />
                <span className="text-sm text-gray-700">
                  Dollar Cost Averaging (DCA)
                </span>
              </div>
            </div>
          </div>

          {/* Director Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Director Information
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.directorInfo.fullName}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.directorInfo.email}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Mobile</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.directorInfo.mobile}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.directorInfo.address}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">BVN</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.directorInfo.bvn}
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team</h3>
            <div className="space-y-4">
              {customer.team.map((member, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{member.name}</h4>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        member.role === "Initiator"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-4 text-sm">
                    <div>
                      <label className="text-gray-500">Email</label>
                      <p className="text-gray-900">{member.email}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">Mobile</label>
                      <p className="text-gray-900">{member.mobile}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">Address</label>
                      <p className="text-gray-900">{member.address}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">BVN</label>
                      <p className="text-gray-900">{member.bvn}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">KYC Status</label>
                      <p className="text-gray-900">{member.kycStatus}</p>
                    </div>
                    <div>
                      <label className="text-gray-500">Last Login</label>
                      <p className="text-gray-900">{member.lastLogin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Account Section
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-500">Activity Status</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.accountSection.activityStatus}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">RM Assigned</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.accountSection.rmAssigned}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Investment Risk Profile
                </label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.accountSection.investmentRiskProfile}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Virtual Account Number
                </label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.accountSection.virtualAccountNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderCommonSections = () => (
    <div className="space-y-6">
      {/* Active Investment */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Active Investment
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-gray-500">Type</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.type}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Status</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.status}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Tenor</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.tenor}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Amount</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.amount}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Start Date</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.startDate}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">End Date</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.endDate}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">ROI to Date</label>
            <p className="text-sm font-medium text-gray-900">
              {customer.activeInvestment.roiToDate}
            </p>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-2">
              Available Balances
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-500">USDC</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.availableBalances.usdc}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">NGN</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.availableBalances.ngn}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">USDT</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.availableBalances.usdt}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-2">
              Ledger Balances
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-500">USDC</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.ledgerBalances.usdc}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">NGN</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.ledgerBalances.ngn}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">USDT</label>
                <p className="text-sm font-medium text-gray-900">
                  {customer.wallet.ledgerBalances.usdt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifetime Revenue Generated */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Lifetime Revenue Generated
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-gray-500">
              Performance Fees (USDT)
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.lifetimeRevenue.performanceFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Management Fees (USDT)
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.lifetimeRevenue.managementFees}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Transaction Fees (USDT)
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.lifetimeRevenue.transactionFees}
            </p>
          </div>
        </div>
      </div>

      {/* Limits */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Limits</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-gray-500">
              Daily Withdrawal Limit
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.limits.dailyWithdrawal}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Single Withdrawal Limit
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.limits.singleWithdrawal}
            </p>
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Monthly Withdrawal Limit
            </label>
            <p className="text-sm font-medium text-gray-900">
              {customer.limits.monthlyWithdrawal}
            </p>
          </div>
        </div>
      </div>

      {/* KYC Details */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          KYC Details
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {customer.type === "individual" ? (
            <>
              <div>
                <label className="text-sm text-gray-500">Valid ID</label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.validId}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Liveness Capture
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.livenessCapture}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Proof of Address
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.proofOfAddress}
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="text-sm text-gray-500">
                  Certificate of Incorporation
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.certificateOfIncorporation}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  CAC Form 2B/Status Extract
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.cacForm}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Authorization Letter
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.authorizationLetter}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Valid ID of Director
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.validIdOfDirector}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Recent Utility Bill
                </label>
                <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {customer.kycDetails.recentUtilityBill}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home className="w-4 h-4" />
          <span>/</span>
          <button
            onClick={() => navigate("/dashboard/customers")}
            className="text-gray-500 hover:text-gray-700"
          >
            {customer.type === "individual" ? "Individual" : "Business"}
          </button>
          <span>/</span>
          <span>...</span>
          <span>/</span>
          <span className="text-gray-900">{customer.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard/customers")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center gap-2">
              Select Action
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tab Navigation */}
        <CustomerTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          customerType={customer.type}
        />

        {/* Tab Content */}
        <div className="transition-all duration-200">
          {activeTab === "profile" && (
            <div className="space-y-6">
              {renderProfileContent()}
              {renderCommonSections()}
            </div>
          )}

          {activeTab === "transactions" && (
            <TransactionHistory customerId={customer.id} />
          )}

          {activeTab === "investments" && (
            <InvestmentHistory customerId={customer.id} />
          )}

          {activeTab === "audit" && (
            <AuditTrail customerId={customer.id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
