import React, { useState, useEffect } from 'react';
import { ChevronLeft, Home } from 'lucide-react';

function PauseRequestDetails({ requestId = '23456786' }) {
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseReason, setPauseReason] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    fetchRequestData(requestId);
  }, [requestId]);

  const fetchRequestData = async (id) => {
    try {
      const mockRequest = {
        id: id,
        transactionDetails: {
          affectedCustomers: 200,
          percentIndividuals: '40%',
          percentCorporate: '60%',
          timestamp: '21/04/2025 | 12:00pm',
          autoPauseReason: 'Funding BTC Fluctuation',
          portfolioSize: '1,530,000 USDT',
          aiConfidence: '4/10'
        }
      };
      
      setRequest(mockRequest);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching request:', error);
      setLoading(false);
    }
  };

  const handleNavigateBack = () => {
    console.log('Navigate back to pause requests');
  };

  const handleReject = () => {
    console.log('Reject request:', request.id);
  };

  const handlePauseClick = () => {
    setShowModal(true);
  };

  const handleUnpause = () => {
    setIsPaused(false);
    setPauseReason('');
    console.log('Unpause request:', request.id);
  };

  const handleModalSubmit = () => {
    if (pauseReason.trim()) {
      setIsPaused(true);
      setShowModal(false);
      console.log('Paused with reason:', pauseReason, 'Duration:', hours, 'hours', minutes, 'minutes');
    }
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setPauseReason('');
    setHours('');
    setMinutes('');
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading request details...</div>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Request not found</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 bg-[#0A0D12]/80  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Autopause</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pause Reason
              </label>
              <input
                type="text"
                placeholder="Short text"
                value={pauseReason}
                onChange={(e) => setPauseReason(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="HH"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-center focus:outline-none focus:border-cyan-500"
                  maxLength="2"
                />
                <span className="text-gray-500">:</span>
                <input
                  type="text"
                  placeholder="MM"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-center focus:outline-none focus:border-cyan-500"
                  maxLength="2"
                />
              </div>
            </div>

            <button
              onClick={handleModalSubmit}
              className="w-full py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors mb-3 font-medium"
            >
              Submit
            </button>
            
            <button
              onClick={handleModalCancel}
              className="w-full py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home className="w-4 h-4" />
          <span>/</span>
          <button 
            onClick={handleNavigateBack}
            className="text-gray-500 hover:text-gray-700"
          >
            Investments
          </button>
          <span>/</span>
          <span>...</span>
          <span>/</span>
          <span className="text-gray-900">{request.id}</span>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleNavigateBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">#{request.id}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            {!isPaused ? (
              <>
                <button 
                  onClick={handleReject}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Reject
                </button>
                <button 
                  onClick={handlePauseClick}
                  className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Pause
                </button>
              </>
            ) : (
              <button 
                onClick={handleUnpause}
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                UnPause
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Transaction Details</h3>
          
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Affected Customers</label>
              <p className="text-lg font-semibold text-gray-900">{request.transactionDetails.affectedCustomers}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">% of Individuals</label>
              <p className="text-lg font-semibold text-gray-900">{request.transactionDetails.percentIndividuals}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">% of Corporate</label>
              <p className="text-lg font-semibold text-gray-900">{request.transactionDetails.percentCorporate}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#06b6d4"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(4/10) * 251.2} 251.2`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{request.transactionDetails.aiConfidence}</span>
                </div>
              </div>
              <label className="text-sm text-gray-500 mt-2">AI Confidence</label>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Timestamp</label>
              <p className="text-sm font-medium text-gray-900">{request.transactionDetails.timestamp}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Auto-Pause Reason</label>
              <p className="text-sm font-medium text-gray-900">{request.transactionDetails.autoPauseReason}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">Portfolio Size</label>
              <p className="text-sm font-medium text-gray-900">{request.transactionDetails.portfolioSize}</p>
            </div>
          </div>
        </div>

        {isPaused && pauseReason && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pause Reason</h3>
            <p className="text-sm text-gray-600">{pauseReason}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PauseRequestDetails;