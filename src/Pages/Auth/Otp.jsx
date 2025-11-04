import React, { useState, useRef } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (!isNaN(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    setOtp(newOtp);
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    console.log("Verifying OTP:", otpValue);
    navigate('/dashboard/individuals')
    // Add your verification logic here
  };

  const handleResend = () => {
    console.log("Resending OTP");
    // Add your resend logic here
  };

  const handleBackToLogin = () => {
    console.log("Back to login");
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-5 py-5">
        <Navbar />
      </div>

      <div className="flex items-center justify-center px-4 mt-20">
        <div className="w-full max-w-md">
          {/* Email Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
            Check your email
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-8">
            We sent a OTP  to{" "}
            <span className="font-medium">olivia@gmail.com</span>
          </p>

          {/* OTP Input */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-16 h-16 text-center text-2xl font-semibold text-teal-600 border-2 border-teal-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3.5 rounded-lg transition-colors mb-4"
          >
            Continue
          </button>

          {/* Resend Link */}
          <p className="text-center text-gray-600 text-sm mb-6">
            Didn't receive the email?{" "}
            <button
              onClick={handleResend}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Click to resend
            </button>
          </p>

          {/* Back to Login */}
          <button
            onClick={handleBackToLogin}
            className="flex items-center justify-center w-full text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;