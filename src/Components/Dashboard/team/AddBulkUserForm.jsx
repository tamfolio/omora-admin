import React, { useState } from 'react';
import { CloudUpload, UploadCloud, Trash2, CircleCheck, CloudDownload } from 'lucide-react';

const AddBulkUserForm = ({ onCancel, onUploadStatus }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDownloadTemplate = () => {
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
    if (uploadedFiles.length > 0) {
      const isSuccess = Math.random() > 0.3; // 70% success rate
      onUploadStatus(isSuccess ? 'success' : 'error');
    }
  };

  return (
    <div>
      <div className="bg-white border border-[#E9EAEB] rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-[#E9EAEB] flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#181D27]">Add Bulk Users</h3>
          <button
            onClick={handleDownloadTemplate}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#414651] bg-white border border-[#E9EAEB] rounded-lg hover:bg-gray-50"
          >
            <span className='flex items-center gap-2'><CloudDownload size={20} color='#A4A7AE' />Download Template</span>
          </button>
        </div>
        <div>
          <div className="relative w-full border border-[#E9EAEB] rounded-lg p-8 text-center hover:border-[#E9EAEB] transition-colors">
            <div className="space-y-3">
              <span className='size-[40px] mx-auto flex justify-center items-center border border-[#D5D7DA] rounded-lg'><CloudUpload color='#535862' size={20} /></span>
              <div>
                <p className="text-sm text-[#535862]"><span className='text-[#008B99] font-semibold'>Click to upload</span> or drag and drop</p>
                <p className="text-gray-500">CSV file.</p>
              </div>
            </div>
            <input
              type="file"
              multiple
              accept=".csv"
              onChange={(e) => {
                const files = Array.from(e.target.files);
                if (files.length > 0) {
                  const newFiles = files.map(file => ({
                    id: Date.now() + Math.random(),
                    name: file.name,
                    size: (file.size / 1024).toFixed(1) + ' KB',
                    status: 'uploading',
                    progress: 0
                  }));
                  
                  setUploadedFiles(prev => [...prev, ...newFiles]);
                  
                  // Simulate upload progress
                  newFiles.forEach((fileObj) => {
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
                }
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          
          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4 space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="relative flex items-start justify-between p-4 border border-[#E9EAEB] rounded-lg overflow-hidden">
                  {/* Progress Background */}
                  <div 
                    className={`absolute inset-0 transition-all duration-300 ${
                      file.status === 'completed' ? 'bg-white' : 'bg-[#F9F9F9]'
                    }`}
                    style={{
                      width: file.status === 'completed' ? '100%' : `${file.progress}%`
                    }}
                  />
                  {/* Content */}
                  <div className="relative z-10 flex items-start justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <img src="/assets/csv-file.svg" alt="csv-file" height={40} width={40} />
                    <div>
                      <p className="text-sm font-medium text-[#414651] mb-[2px]">{file.name}</p>
                      <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-500">{file.size}</p>
                      <div className="w-px h-4 bg-gray-300"></div>
                      {file.status === 'completed' ? (
                        <>
                          <CircleCheck className="w-4 h-4 text-[#079455]" />
                          <span className="text-sm text-[#079455]">100%</span>
                        </>
                      ) : (
                        <>
                          <UploadCloud className="w-4 h-4 text-[#A4A7AE]" />
                          <span className="text-sm text-[#717680]">{file.progress}%</span>
                        </>
                      )}
                    </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setUploadedFiles(prev => prev.filter(f => f.id !== file.id))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="w-4 h-4 text-[#A4A7AE] hover:text-red-600" />
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-16 py-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBulkUserForm;
