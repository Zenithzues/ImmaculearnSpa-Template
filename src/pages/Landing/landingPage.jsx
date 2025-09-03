import React, { useState } from "react";
import useSocket from "@/hooks/useSocket.js";
import ChatList from "../User_chats/user_chats"; // import Sidebar/MainPage

const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <div className="max-w-full font-sans bg-gradient-to-r from-white to-[#fef6ff] min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-2">
          <img src="./src/assets/book.png" alt="ImmacuLearn" className="w-8 h-8" />
          <span className="text-xl font-bold">ImmacuLearn</span>
        </div>

        <nav className="flex gap-8 text-lg font-medium">
          <a href="#about" className="text-black hover:text-blue-800">About</a>
          <a href="#feature" className="text-black hover:text-blue-800">Feature</a>
          <a href="#contact" className="text-black hover:text-blue-800">Contact Us</a>
        </nav>

        <a href="#login" className="relative z-10 text-white font-medium hover:underline">
          Log In
        </a>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 mt-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-green-600">Wherever</span> you are, <br />
            <span className="text-green-600">Learn Together!</span>
          </h1>

          {/* Sign Up Button */}
          <button className="mt-6 px-6 py-2 bg-white border border-black rounded-full shadow-md hover:bg-gray-100 flex items-center gap-2">
            Sign Up <span className="text-green-600 font-bold">→</span>
          </button>

          {/* Dashboard Trigger */}
          <button
            onClick={() => setShowMainPage(true)}
            className="mt-6 px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md hover:bg-indigo-800"
          >
            Go to Dashboard
          </button>

          <p className="mt-6 text-gray-800">
            ImmacuLearn transforms the way you experience education by offering
            a seamless, engaging, and collaborative platform.
          </p>
        </div>
      </main>

      {/* Popups */}
      {showMainPage && (
        <div className="fixed inset-0 z-50 bg-white">
          <ChatList />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
