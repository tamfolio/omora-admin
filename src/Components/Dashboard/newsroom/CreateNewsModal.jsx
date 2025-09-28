import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreateNewsModal = ({ isOpen, onClose, onSave, onContinue }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    tags: '',
    category: '',
    acceptTerms: false,
    coverImage: null,
    authorImage: null
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (imageType) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFormData(prev => ({
            ...prev,
            [imageType]: event.target.result
          }));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const removeImage = (imageType) => {
    setFormData(prev => ({
      ...prev,
      [imageType]: null
    }));
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue(formData);
    } else {
      handleSaveDraft();
    }
  };

  const handleSaveDraft = () => {
    onSave({ ...formData, status: 'Draft' });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      author: '',
      tags: '',
      category: '',
      acceptTerms: false,
      coverImage: null,
      authorImage: null
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const ImageUploadSection = ({ imageType, title, image }) => (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        {title} <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-3 text-center bg-gray-50 relative">
        {image ? (
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <button
              onClick={() => removeImage(imageType)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 flex items-center justify-center"
            >
              ×
            </button>
            <button
              onClick={() => handleImageUpload(imageType)}
              className="px-3 py-1.5 text-xs font-medium text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
            >
              Change Image
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-1">
              <button
                onClick={() => handleImageUpload(imageType)}
                className="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Upload Image
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Minimum size of "808 × 632px"
            </p>
            {imageType === 'coverImage' && (
              <p className="text-xs text-gray-400">
                GIF files will not animate.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Create News</h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <ImageUploadSection 
                imageType="coverImage"
                title="News Cover"
                image={formData.coverImage}
              />

              <ImageUploadSection 
                imageType="authorImage"
                title="Author's Image"
                image={formData.authorImage}
              />
            </div>

            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  News Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Give your news a title"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Give your news a description"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Add the author's name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  News Tags <span className="text-sm text-gray-500 font-normal">(Limit of 10)</span>
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Add up to ten keywords to make your work discoverable"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  How would you categorize this News?
                </label>
                <div className="grid grid-cols-2 gap-1">
                  {[
                    'DCA Automated', 'Investment', 'Market Analysis', 
                    'Crypto News', 'Financial Tips', 'Trading',
                    'Portfolio', 'Education'
                  ].map((category, index) => (
                    <label key={index} className="flex items-center space-x-1 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={formData.category === category}
                        onChange={handleInputChange}
                        className="w-3 h-3 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <span className="text-xs text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="w-3 h-3 mt-0.5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="text-xs text-gray-700">
                  I accept that the information is correct
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 p-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button
            onClick={handleSaveDraft}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
          >
            Save as draft
          </button>
          <button
            onClick={handleContinue}
            disabled={!formData.acceptTerms}
            className="px-4 py-1.5 text-xs font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewsModal;