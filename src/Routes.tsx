// import React from "react";
// import { Routes as ReactRoutes, Route } from "react-router";


// export default function Routes() {
  //   return (
    //     <ReactRoutes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/chatlist" element={<ChatList />} />
    //       <Route path="/login" element={<LoginPage />} /> 
    //     </ReactRoutes>
    //   );
    // }
    
    
    // App.jsx
    // import { SearchProvider } from "./context/searchContext";
    // import { ToastProvider } from "./context/ToastContext";
    // import Toast from "./components/Toast";
import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/landingPage.jsx";
import Layout from "./Layouts/Default.jsx";
import ChatList from "./pages/User_chats/user_chats.jsx";
import LoginPage from "./pages/SignIn/signInPage.jsx"; // Import the LoginPage component
import Sample from "./pages/TestPages/sample.jsx";
import { SignInPageWithOAuth } from "./pages/SignIn/signInPageWithOAuth.jsx";
// import Home from "./pages/home/HomePage";
// import Search from "./pages/search/search";
// import Result from "./pages/result/result";

export default function Routes() {
  
  return (
    // <ToastProvider>
      // <SearchProvider>
        // <Toast />
        <ReactRoutes>
        {/* Layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<SignInPageWithOAuth />} />
          {/* <Route index element={<Sample />} /> */}
          {/* <Route index element={<LandingPage />} /> */}
          <Route path="chatlist" element={<ChatList />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="print-document" element={<Sample />} /> */}
        </Route>
        </ReactRoutes>
      // </SearchProvider>
    // </ToastProvider>
  );
}

// export default App;
 