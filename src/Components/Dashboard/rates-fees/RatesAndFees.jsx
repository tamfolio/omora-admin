import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const RatesAndFees = () => {
  const { setPageTitle } = useOutletContext() || {};

  useEffect(() => {
    if (setPageTitle) {
      setPageTitle("Rates and Fees");
    }
  }, [setPageTitle]);

  // Management & Performance state
  const [managementFee, setManagementFee] = useState("Management Fee");
  const [managementCharge, setManagementCharge] = useState("20% per annum");
  const [performanceFee, setPerformanceFee] = useState("Performance Fee");
  const [performanceCharge, setPerformanceCharge] = useState("5%");

  // Conversion Fee state
  const [ngnUsdcQuidaxFee, setNgnUsdcQuidaxFee] = useState("1540");
  const [ngnUsdcOmoraFee, setNgnUsdcOmoraFee] = useState("25");
  const [usdtNgnQuidaxFee, setUsdtNgnQuidaxFee] = useState("1540");
  const [usdtNgnOmoraFee, setUsdtNgnOmoraFee] = useState("25");

  // Withdrawal Fee state
  const [ngnQuidaxFee, setNgnQuidaxFee] = useState("0");
  const [ngnOmoraFee, setNgnOmoraFee] = useState("200");
  const [usdtQuidaxFee, setUsdtQuidaxFee] = useState("0.5");
  const [usdtOmoraFee, setUsdtOmoraFee] = useState("0.5");

  // Calculate totals
  const ngnUsdcTotal = parseInt(ngnUsdcQuidaxFee) + parseInt(ngnUsdcOmoraFee);
  const usdtNgnTotal = parseInt(usdtNgnQuidaxFee) + parseInt(usdtNgnOmoraFee);
  const ngnTotal = parseInt(ngnQuidaxFee) + parseInt(ngnOmoraFee);
  const usdtTotal = parseFloat(usdtQuidaxFee) + parseFloat(usdtOmoraFee);

  const handleManagementSave = () => {
    console.log("Saving management & performance fees");
    // Add save logic here
  };

  const handleConversionSave = () => {
    console.log("Saving conversion fees");
    // Add save logic here
  };

  const handleWithdrawalSave = () => {
    console.log("Saving withdrawal fees");
    // Add save logic here
  };

  return (
    <div className="max-w-full mx-auto">
      <h1 className="text-2xl font-semibold text-[#181D27] mb-6">Rates and Fees</h1>

      <div className="space-y-6">
        {/* Management & Performance */}
        <div className="bg-white border border-[#E9EAEB] rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-[#E9EAEB]">
            <h2 className="text-lg font-semibold text-[#181D27]">Management & Performance</h2>
            </div>
          
          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EAEB]">
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Fee</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">% charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9EAEB]">
                  <td className="px-6 py-4">
                    <div className="relative">
                      <select
                        value={managementFee}
                        onChange={(e) => setManagementFee(e.target.value)}
                        className="w-full font-semibold text-[#414651] px-4 py-2.5 border border-[#E9EAEB] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm"
                      >
                        <option>Management Fee</option>
                        <option>Other Fee</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={managementCharge}
                      onChange={(e) => setManagementCharge(e.target.value)}
                      className="w-full font-semibold text-[#414651] px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <select
                        value={performanceFee}
                        onChange={(e) => setPerformanceFee(e.target.value)}
                        className="w-full font-semibold text-[#414651] px-4 py-2.5 border border-[#E9EAEB] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm"
                      >
                        <option>Performance Fee</option>
                        <option>Other Fee</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={performanceCharge}
                      onChange={(e) => setPerformanceCharge(e.target.value)}
                      className="w-full font-semibold text-[#414651] px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-3 px-6 py-4 bg-[#FcFCFC] border-t border-[#E9EAEB]">
            <button
              onClick={() => {
                setManagementFee("Management Fee");
                setManagementCharge("20% per annum");
                setPerformanceFee("Performance Fee");
                setPerformanceCharge("5%");
              }}
              className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleManagementSave}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Conversion Fee */}
        <div className="bg-white border border-[#E9EAEB] rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-[#E9EAEB]">
            <h2 className="text-lg font-semibold text-[#181D27]">Conversion Fee</h2>
          </div>
          
          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EAEB]">
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Currency</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Quidax Fee (NGN)</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Omora Fee</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9EAEB]">
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      NGN - USDC
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={ngnUsdcQuidaxFee}
                        onChange={(e) => setNgnUsdcQuidaxFee(e.target.value)}
                        className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#A4A7AE]"
                      />
                      <span className="text-2xl text-gray-300">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={ngnUsdcOmoraFee}
                      onChange={(e) => setNgnUsdcOmoraFee(e.target.value)}
                      className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      {ngnUsdcTotal}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      USDT - NGN
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={usdtNgnQuidaxFee}
                        onChange={(e) => setUsdtNgnQuidaxFee(e.target.value)}
                        className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#A4A7AE]"
                      />
                      <span className="text-2xl text-gray-300">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={usdtNgnOmoraFee}
                      onChange={(e) => setUsdtNgnOmoraFee(e.target.value)}
                      className="w-full px-4 py-2.5 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      {usdtNgnTotal}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-3 px-6 py-4 bg-[#FCFCFC] border-t border-[#E9EAEB]">
            <button
              onClick={() => {
                setNgnUsdcQuidaxFee("1540");
                setNgnUsdcOmoraFee("25");
                setUsdtNgnQuidaxFee("1540");
                setUsdtNgnOmoraFee("25");
              }}
              className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConversionSave}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Withdrawal Fee */}
        <div className="bg-white border border-[#E9EAEB] rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-[#E9EAEB]">
            <h2 className="text-lg font-semibold text-[#181D27]">Withdrawal Fee</h2>
          </div>
          
          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EAEB]">
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Withdrawal Fee</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Quidax Fee</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Omora Fee</th>
                  <th className="text-left text-sm font-medium text-[#717680] px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9EAEB]">
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      NGN
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={ngnQuidaxFee}
                          onChange={(e) => setNgnQuidaxFee(e.target.value)}
                          className="w-full px-4 py-2.5 pr-12 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#A4A7AE]"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#A4A7AE]">NGN</span>
                      </div>
                      <span className="text-2xl text-gray-300">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={ngnOmoraFee}
                        onChange={(e) => setNgnOmoraFee(e.target.value)}
                        className="w-full px-4 py-2.5 pr-12 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#414651]">NGN</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      {ngnTotal}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      USDT
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={usdtQuidaxFee}
                          onChange={(e) => setUsdtQuidaxFee(e.target.value)}
                          className="w-full px-4 py-2.5 pr-16 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#A4A7AE]"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#A4A7AE]">USDT</span>
                      </div>
                      <span className="text-2xl text-gray-300">+</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={usdtOmoraFee}
                        onChange={(e) => setUsdtOmoraFee(e.target.value)}
                        className="w-full px-4 py-2.5 pr-16 border border-[#E9EAEB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008B99] focus:border-[#008B99] text-sm font-semibold text-[#414651]"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-[#414651]">USDT</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2.5 border border-[#E9EAEB] rounded-lg text-sm font-semibold text-[#414651]">
                      {usdtTotal}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end space-x-3 px-6 py-4 bg-[#FCFCFC] border-t border-[#E9EAEB]">
            <button
              onClick={() => {
                setNgnQuidaxFee("0");
                setNgnOmoraFee("200");
                setUsdtQuidaxFee("0.5");
                setUsdtOmoraFee("0.5");
              }}
              className="px-4 py-2.5 text-sm font-semibold text-[#414651] border border-[#D5D7DA] bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleWithdrawalSave}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#008B99] rounded-lg hover:bg-[#008B99]/80 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesAndFees;
