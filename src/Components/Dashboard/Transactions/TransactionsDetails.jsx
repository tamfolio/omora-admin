import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactionData(id);
  }, [id]);

  const fetchTransactionData = async (transactionId) => {
    try {
      // Mock transaction data - replace with actual API call
      const mockTransaction = {
        id: transactionId,
        reference: '#1234567',
        customerDetails: {
          customerName: 'Jane Doe Adesigbin',
          customerId: '# 2345678'
        },
        transactionDetails: {
          transactionType: 'Funding',
          transactionAmount: '#500000',
          timestamp: '21/04/2025 | 12:00pm',
          feesCharges: '$50',
          fxRate: '1530 / $',
          status: 'Pending',
          narration: 'This is a note about crypto deposit'
        },
        recipientBankDetails: {
          name: 'John Doe Adesigbin',
          bankName: 'Guaranteed Trust Bank',
          accountNumber: '0123456789'
        },
        recipientWalletDetails: {
          tokenName: 'USDT',
          network: 'Trc 20',
          walletAddress: 'JBadb345hyskkf056gheiskkskeujhrurifi'
        },
        linkedWallet: {
          availableNGN: 'NGN 300,000',
          usdtBalance: '2500'
        },
        complianceNotes: {
          note: 'This is a note'
        }
      };
      
      setTransaction(mockTransaction);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transaction:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading transaction details...</div>
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Transaction not found</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home className="w-4 h-4" />
          <span>/</span>
          <button 
            onClick={() => navigate('/dashboard/transactions')}
            className="text-gray-500 hover:text-gray-700"
          >
            Transactions
          </button>
          <span>/</span>
          <span>...</span>
          <span>/</span>
          <span className="text-gray-900">{transaction.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/dashboard/transactions')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">#{transaction.id}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Requery Transaction
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Approve Transaction
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Reject Transaction
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Download Receipt
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Customer / Business Name</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.customerDetails.customerName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Customer / Business ID</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.customerDetails.customerId}</p>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Transaction Reference</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.reference}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Fees Charges</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.feesCharges}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Transaction Type</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.transactionType}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">FX Rate</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.fxRate}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Transaction Amount</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.transactionAmount}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Status</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.status}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500">Timestamp</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.timestamp}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Narration</label>
                    <p className="text-sm font-medium text-gray-900">{transaction.transactionDetails.narration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipient Bank Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recipient Bank Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Name</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.recipientBankDetails.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Bank Name</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.recipientBankDetails.bankName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Account Number</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.recipientBankDetails.accountNumber}</p>
                </div>
              </div>
            </div>

            {/* Recipient Wallet Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recipient Wallet Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Token Name</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.recipientWalletDetails.tokenName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Network</label>
                  <p className="text-sm font-medium text-gray-900">{transaction.recipientWalletDetails.network}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Wallet Address</label>
                  <p className="text-sm font-medium text-gray-900 break-all">{transaction.recipientWalletDetails.walletAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Linked Wallet */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Linked Wallet</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Available NGN</span>
                  <span className="text-sm font-medium text-gray-900">{transaction.linkedWallet.availableNGN}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">USDT Balance</span>
                  <span className="text-sm font-medium text-gray-900">{transaction.linkedWallet.usdtBalance}</span>
                </div>
              </div>
            </div>

            {/* Compliance Notes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Notes</h3>
              <p className="text-sm text-gray-600">{transaction.complianceNotes.note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;