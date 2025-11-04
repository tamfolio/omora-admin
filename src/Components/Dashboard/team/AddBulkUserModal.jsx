import React, { useState, useRef } from 'react';
import { Upload, Download, Trash2, CheckCircle, Clock } from 'lucide-react';
import Modal from '../../Common/Modal';

const AddBulkUserModal = ({ isOpen, onClose, onUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const csvFiles = files.filter(file => file.type === 'text/csv' || file.name.endsWith('.csv'));
    
    const newFiles = csvFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      status: 'uploading',
      progress: 0
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((fileObj, index) => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => prev.map(file => {
          if (file.id === fileObj.id) {
            const newProgress = Math.min(file.progress + 20, 100);
            const newStatus = newProgress === 100 ? 'completed' : 'uploading';
            
            if (newProgress === 100) {
              clearInterval(interval);
            }
            
            return { ...file, progress: newProgress, status: newStatus };
          }
          return file;
        }));
      }, 200);
    });
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const downloadTemplate = () => {
    const csvContent = "First Name,Last Name,Email,Role\nJohn,Doe,john.doe@example.com,Admin\nJane,Smith,jane.smith@example.com,Editor";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'team_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = () => {
    const completedFiles = uploadedFiles.filter(file => file.status === 'completed');
    if (completedFiles.length === 0) {
      alert('Please upload at least one CSV file');
      return;
    }
    
    onUpload(completedFiles);
    setUploadedFiles([]);
    onClose();
  };

  const handleCancel = () => {
    setUploadedFiles([]);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Add Bulk Users"
    >
      <div className="space-y-6">
        {/* Download Template Button */}
        <div className="flex justify-end">
          <button
            onClick={downloadTemplate}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            <span>Download Template</span>
          </button>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging 
              ? 'border-teal-400 bg-teal-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-teal-600 font-medium mb-1">Click to upload or drag and drop</p>
          <p className="text-gray-500">CSV file.</p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".csv"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Uploaded Files</h4>
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">CSV</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{file.size}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {file.status === 'completed' ? (
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs">100%</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-amber-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{file.progress}%</span>
                    </div>
                  )}
                  
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddBulkUserModal;
