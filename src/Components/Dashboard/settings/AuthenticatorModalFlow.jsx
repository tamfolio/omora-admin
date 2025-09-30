import React, { useState } from 'react';
import { X, Shield, Copy, Check, Mail, CheckCircle } from 'lucide-react';

const AuthenticatorModalFlow = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const [completedSteps, setCompletedSteps] = useState({
    authenticator: false,
    email: false
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCodeCopied(true);
    setTimeout(() => setIsCodeCopied(false), 2000);
  };

  const handleAuthenticatorComplete = () => {
    setCompletedSteps(prev => ({ ...prev, authenticator: true }));
    setCurrentStep(4); // Go to requirements check
  };

  const handleEmailComplete = () => {
    setCompletedSteps(prev => ({ ...prev, email: true }));
    setCurrentStep(4); // Go to requirements check
  };

  const checkIfAllComplete = () => {
    return completedSteps.authenticator && completedSteps.email;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Faster Login</h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Instead of waiting for text messages, get verification codes from an authenticator app like Google Authenticator. It works even if your phone is offline.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setCurrentStep(2)}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Enable Google Authenticator
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Enable via Email
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Link an Authenticator</h2>
            <p className="text-sm text-gray-600 mb-6">Scan this QR code in the authenticator app</p>
            
            <div className="w-48 h-48 bg-gray-100 border-2 border-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="w-40 h-40 bg-black" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='white'/%3E%3Crect x='0' y='0' width='20' height='20' fill='black'/%3E%3Crect x='80' y='0' width='20' height='20' fill='black'/%3E%3Crect x='0' y='80' width='20' height='20' fill='black'/%3E%3Crect x='40' y='40' width='20' height='20' fill='black'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover'
              }}>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-gray-700">4K3DDKUWJ74SH4CO</span>
                <button
                  onClick={() => copyToClipboard('4K3DDKUWJ74SH4CO')}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  {isCodeCopied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              If you are unable to scan the QR code, please enter this code manually into the app.
            </p>

            <button
              onClick={() => setCurrentStep(3)}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Next
            </button>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Check your Authenticator App</h2>
            <p className="text-sm text-gray-600 mb-4">We sent a 6-digit code sent to your authenticator app</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input 6-digit key
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="000000"
                  maxLength="6"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button className="px-3 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded-lg hover:bg-teal-50">
                  Paste
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Didn't receive the 6-digit key? <button className="text-teal-600 hover:text-teal-700">Click to resend</button>
            </p>

            <button
              onClick={handleAuthenticatorComplete}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Verify
            </button>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Security Verification Requirements</h2>
            <p className="text-sm text-gray-600 mb-4">
              You need to complete all of the following verifications to continue.
            </p>

            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-teal-600">{Object.values(completedSteps).filter(Boolean).length}</span>
              <span className="text-2xl font-bold text-gray-400"> / </span>
              <span className="text-2xl font-bold text-gray-400">2</span>
            </div>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => setCurrentStep(2)}
                className={`w-full flex items-center justify-between p-4 border rounded-lg ${
                  completedSteps.authenticator ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">Authenticator app</span>
                </div>
                {completedSteps.authenticator ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <span className="text-gray-400">→</span>
                )}
              </button>

              <button
                onClick={() => setCurrentStep(6)}
                className={`w-full flex items-center justify-between p-4 border rounded-lg ${
                  completedSteps.email ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">Email</span>
                </div>
                {completedSteps.email ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <span className="text-gray-400">→</span>
                )}
              </button>
            </div>

            <p className="text-center mb-4">
              <button className="text-sm text-teal-600 hover:text-teal-700">
                Security verification unavailable?
              </button>
            </p>

            {checkIfAllComplete() && (
              <button
                onClick={() => setCurrentStep(5)}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Complete Setup
              </button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2FA Successfully Enabled</h2>
            <p className="text-sm text-gray-600 mb-8">
              You will be required to enter a code at login.
            </p>
            <button
              onClick={onClose}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Go to home
            </button>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Check your Email</h2>
            <p className="text-sm text-gray-600 mb-4">We sent a 6-digit code sent to your email.</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input 6-digit key
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                  placeholder="000000"
                  maxLength="6"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <button className="px-3 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded-lg hover:bg-teal-50">
                  Paste
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Didn't receive the 6-digit key? <button className="text-teal-600 hover:text-teal-700">Click to resend</button>
            </p>

            <button
              onClick={handleEmailComplete}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Verify
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-md mx-4 shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end p-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default AuthenticatorModalFlow;