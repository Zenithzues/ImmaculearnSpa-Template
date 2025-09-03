import React from "react";
import Sidebar from "../component/sidebar"; 

const ChatList = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome, Racell Ann!</h1>
        <p className="text-gray-700">
          This is your main content area. You can add dashboard widgets, charts, or anything you like here.
        </p>
      </div>
    </div>
  );
};

export default ChatList;
