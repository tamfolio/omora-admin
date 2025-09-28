import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const ProfilePhotoUpload = ({ currentPhoto, onPhotoChange }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onPhotoChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-2">
        <h3 className="text-sm font-medium text-gray-900">Your photo</h3>
        <span className="text-red-500 text-sm">*</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">This will be displayed on your profile.</p>
      
      <div className="flex items-start space-x-6">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <img
            src={currentPhoto || '/api/placeholder/80/80'}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        
        {/* Upload Area */}
        <div className="flex-1">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver ? 'border-teal-500 bg-teal-50' : 'border-teal-300'
            }`}
          >
            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-3" />
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => document.getElementById('photo-upload').click()}
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                >
                  Click to upload
                </button>
                <span className="text-gray-600 text-sm"> or drag and drop</span>
              </div>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800×400px)</p>
            </div>
            
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-8">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoUpload;