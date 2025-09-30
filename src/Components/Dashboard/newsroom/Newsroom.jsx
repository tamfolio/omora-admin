import React, { useState, useMemo, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";
import NewsroomTable from "./NewsroomTable";
import DeleteModal from "./DeleteModal";
import CreateNewsModal from "./CreateNewsModal";
import WriteNewsArticle from "./WriteNewsArticle";
import PreviewNews from "./PreviewNews";
import {
  SORT_DIRECTIONS,
  sortData,
  filterBySearch,
  getNextSortDirection,
} from "./newsroomUtils";

function Newsroom() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("View all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showWriteArticle, setShowWriteArticle] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [articleFormData, setArticleFormData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: SORT_DIRECTIONS.NONE,
  });

  const { setPageTitle } = useOutletContext() || {};

  useEffect(() => {
    if (setPageTitle) {
      if (showPreview) {
        setPageTitle("Preview Article");
      } else if (showWriteArticle) {
        setPageTitle("Write Article");
      } else {
        setPageTitle("Newsroom");
      }
    }
  }, [setPageTitle, showWriteArticle, showPreview]);

  const [newsData, setNewsData] = useState([
    {
      id: 1,
      title: "Crypto Made Simple: How to Start with Just ₦10,000",
      author: "Teni Wades",
      dateCreated: "15th July, 2025",
      status: "Published",
    },
    {
      id: 2,
      title: "5 Mistakes Every New Investor Should Avoid in Today's Market",
      author: "Bami Fad",
      dateCreated: "15th July, 2025",
      status: "Draft",
    },
    {
      id: 3,
      title: "Dollar-Cost Averaging: The Smart Investor's Secret Weapon",
      author: "Jayeola Yinka",
      dateCreated: "15th July, 2025",
      status: "Published",
    },
    {
      id: 4,
      title: "Dollar-Cost Averaging: The Smart Investor's Secret Weapon",
      author: "Ayo Ogun",
      dateCreated: "15th July, 2025",
      status: "Published",
    },
    {
      id: 5,
      title: "Dollar-Cost Averaging: The Smart Investor's Secret Weapon",
      author: "Anita Odiete",
      dateCreated: "15th July, 2025",
      status: "Published",
    },
    {
      id: 6,
      title: "Dollar-Cost Averaging: The Smart Investor's Secret Weapon",
      author: "John Doe",
      dateCreated: "15th July, 2025",
      status: "Published",
    },
  ]);

  const filteredNews = useMemo(() => {
    let result = newsData;

    // Filter by tab
    if (activeTab === "Published") {
      result = result.filter((item) => item.status === "Published");
    } else if (activeTab === "Draft") {
      result = result.filter((item) => item.status === "Draft");
    }

    // Filter by search
    if (searchTerm) {
      result = filterBySearch(result, searchTerm);
    }

    // Sort
    if (sortConfig.column && sortConfig.direction !== SORT_DIRECTIONS.NONE) {
      result = sortData(result, sortConfig.column, sortConfig.direction);
    }

    return result;
  }, [newsData, activeTab, searchTerm, sortConfig]);

  const handleSort = (column) => {
    setSortConfig((prev) => ({
      column,
      direction:
        prev.column === column
          ? getNextSortDirection(prev.direction)
          : SORT_DIRECTIONS.ASC,
    }));
  };

  const getSortDirection = (column) => {
    return sortConfig.column === column
      ? sortConfig.direction
      : SORT_DIRECTIONS.NONE;
  };

  const handleDelete = (news) => {
    setSelectedNews(news);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedNews) {
      setNewsData((prev) => prev.filter((item) => item.id !== selectedNews.id));
      setShowDeleteModal(false);
      setSelectedNews(null);
    }
  };

  const handleEdit = (news) => {
    console.log("Edit news:", news);
  };

  const handleSaveNews = (newsData) => {
    const newNews = {
      id: Date.now(),
      title: newsData.title || "Untitled Article",
      author: newsData.author || "Unknown Author",
      dateCreated: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      status: newsData.status,
      content: newsData.content || null,
    };
    setNewsData((prev) => [newNews, ...prev]);
  };

  // Handle Continue from CreateNewsModal to WriteNewsArticle
  const handleContinueToArticle = (formData) => {
    setArticleFormData(formData);
    setShowCreateModal(false);
    setShowWriteArticle(true);
  };

  // Handle Back from WriteNewsArticle to CreateNewsModal
  const handleBackToForm = () => {
    setShowWriteArticle(false);
    setShowCreateModal(true);
  };

  // Handle Back from Preview to WriteNewsArticle
  const handleBackToEditor = () => {
    setShowPreview(false);
    setShowWriteArticle(true);
  };

  // Handle Preview from WriteNewsArticle
  const handlePreviewArticle = (content) => {
    setPreviewData(content);
    setShowWriteArticle(false);
    setShowPreview(true);
  };

  // Handle Publish from WriteNewsArticle
  const handlePublishArticle = (content) => {
    const newsData = {
      ...articleFormData,
      content,
      status: "Published"
    };
    handleSaveNews(newsData);
    setShowWriteArticle(false);
    setArticleFormData(null);
    setPreviewData(null);
  };

  // Handle Save Draft from WriteNewsArticle
  const handleSaveDraftArticle = (content) => {
    const newsData = {
      ...articleFormData,
      content,
      status: "Draft"
    };
    handleSaveNews(newsData);
    setShowWriteArticle(false);
    setArticleFormData(null);
    setPreviewData(null);
  };

  const tabs = [
    { name: "View all", count: newsData.length },
    {
      name: "Published",
      count: newsData.filter((n) => n.status === "Published").length,
    },
    {
      name: "Draft",
      count: newsData.filter((n) => n.status === "Draft").length,
    },
  ];

  // Show PreviewNews if in preview mode
  if (showPreview) {
    return (
      <PreviewNews 
        onBack={handleBackToEditor}
        articleData={previewData}
        formData={articleFormData}
      />
    );
  }

  // Show WriteNewsArticle if in article writing mode
  if (showWriteArticle) {
    return (
      <WriteNewsArticle 
        onBack={handleBackToForm}
        onPublish={handlePublishArticle}
        onSaveDraft={handleSaveDraftArticle}
        onPreview={handlePreviewArticle}
        initialData={articleFormData}
      />
    );
  }

  // Show normal Newsroom
  return (
    <div className="max-w-full mx-auto p-4 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <span>Create News</span>
        </button>
      </div>

      {/* Content Container */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Tabs and Controls */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                    activeTab === tab.name
                      ? "bg-white text-gray-900"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </div>

              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <IoFilterOutline className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <NewsroomTable
            news={filteredNews}
            onSort={handleSort}
            getSortDirection={getSortDirection}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Page 1 of 10</span>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemTitle={selectedNews?.title}
      />

      <CreateNewsModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveNews}
        onContinue={handleContinueToArticle}
      />
    </div>
  );
}

export default Newsroom;