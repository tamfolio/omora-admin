import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

const ChangePasswordPage = ({ onBack, onSuccess }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation for confirm password
    if (name === 'confirmPassword' && value !== formData.newPassword && value.length > 0) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }));
    } else if (name === 'confirmPassword' && value === formData.newPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: ''
      }));
    }

    // Real-time validation for new password match with confirm
    if (name === 'newPassword' && formData.confirmPassword && value !== formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }));
    } else if (name === 'newPassword' && formData.confirmPassword && value === formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: ''
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('At least 8 characters');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('At least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('At least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('At least one number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('At least one special character');
    }
    
    return errors;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else {
      const passwordErrors = validatePassword(formData.newPassword);
      if (passwordErrors.length > 0) {
        newErrors.newPassword = passwordErrors.join(', ');
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    if (onSuccess) onSuccess();
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleSuccessClose();
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Change Password</h1>
        <p className="text-sm text-gray-600 mt-1">
          Please enter your current password to change your password.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md space-y-6">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPasswords.current ? 'text' : 'password'}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="DX56789T"
              className={`w-full px-3 py-2 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.currentPassword ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('current')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.currentPassword}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPasswords.new ? 'text' : 'password'}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="DX56789Tisnnshdhdnd"
              className={`w-full px-3 py-2 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.newPassword ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('new')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          
          {/* Password Requirements */}
          {formData.newPassword && (
            <div className="mt-2 space-y-1">
              {[
                { test: formData.newPassword.length >= 8, text: 'At least 8 characters' },
                { test: /[A-Z]/.test(formData.newPassword), text: 'One uppercase letter' },
                { test: /[a-z]/.test(formData.newPassword), text: 'One lowercase letter' },
                { test: /\d/.test(formData.newPassword), text: 'One number' },
                { test: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.newPassword), text: 'One special character' }
              ].map((requirement, index) => (
                <div key={index} className={`text-xs flex items-center ${
                  requirement.test ? 'text-green-600' : 'text-gray-500'
                }`}>
                  <span className={`w-3 h-3 rounded-full mr-2 ${
                    requirement.test ? 'bg-green-500' : 'bg-gray-300'
                  }`}></span>
                  {requirement.text}
                </div>
              ))}
            </div>
          )}
          
          <p className="mt-1 text-xs text-gray-500">
            Your new password must at least 8 characters and include Upper case, lower case, numbers and symbols.
          </p>
          {errors.newPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm new password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPasswords.confirm ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="DX56789Tisnnshdhdnd"
              className={`w-full px-3 py-2 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirm')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Update password
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-md mx-4 shadow-2xl border border-gray-200 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Password updated</h2>
              <p className="text-sm text-gray-600 mb-6">
                Your password has been updated.
              </p>
              <button
                onClick={handleSuccessClose}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Go to home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordPage;