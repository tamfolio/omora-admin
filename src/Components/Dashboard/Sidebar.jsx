import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    insights: true,
    investments: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      title: "Insights",
      icon: "/assets/insight.png",
      isExpandable: true,
      key: "insights",
      children: [
        { title: "Individuals", path: "/dashboard/individuals", icon: "" },
        { title: "Businesses", path: "/dashboard/businesses", icon: "" },
      ],
    },
    { title: "Customers", path: "/dashboard/customers", icon: "/assets/customers.png" },
    { title: "Transactions", path: "/dashboard/transactions", icon: "/assets/transactions.png" },
    {
      title: "Investments",
      icon: "/assets/investments.png",
      isExpandable: true,
      key: "investments",
      children: [
        {
          title: "Pause Requests",
          path: "/dashboard/pause-requests",
          icon: "",
        },
        {
          title: "Investments List",
          path: "/dashboard/investments-list",
          icon: "",
        },
      ],
    },
    { title: "Compliance", path: "/dashboard/compliance", icon: "/assets/compliance.png" },
    { title: "Rates and Fees", path: "/dashboard/rates-fees", icon: "/assets/compliance.png" },
    { title: "Teams", path: "/dashboard/teams", icon: "/assets/Teams.png" },
    { title: "Limits", path: "/dashboard/limits", icon: "/assets/compliance.png" },
    { title: "Providers", path: "/dashboard/providers", icon: "/assets/providers.png" },
    { title: "Audit Log", path: "/dashboard/audit-log", icon: "/assets/audit-log.png" },
    { title: "Newsroom", path: "/dashboard/newsroom", icon: "/assets/newsroom.png" },
    { title: "Settings", path: "/dashboard/settings", icon: "/assets/settings.png" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <img
        src="/assets/logo1.png"
        alt=""
        className="w-[171px] h-[32px] my-4 pl-4"
      />
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.isExpandable ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.key)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <img src={item.icon} alt=""  className="mr-3"/>
                      {item.title}
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedSections[item.key] ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {expandedSections[item.key] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive(child.path)
                              ? "bg-teal-50 text-teal-700 font-medium"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <span className="mr-3">{child.icon}</span>
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <img src={item.icon} alt=""  className="mr-3"/>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* User Profile at Bottom */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <img
            src="/assets/profile-avatar.png"
            alt="Olivia Rhye"
            className="w-8 h-8 rounded-full mr-3"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%2318b8a8'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3EOR%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Olivia Rhye</p>
            <p className="text-xs text-gray-500">olivia@untitledui.com</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
