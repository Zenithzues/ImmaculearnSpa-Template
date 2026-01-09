import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes as ReactRoutes, Route } from "react-router";

import LandingPage from "./pages/Landing/landingPage.jsx";
import SpaceCreationPage from "./pages/SpaceCreation/spacecreation.jsx";
import InitialInvitePage from "./pages/SpaceCreation/inviteteam.jsx";


import ChatList from "./pages/User_chats/user_chats";
import LoginPage from "./pages/SignIn/signInPage.jsx";

import { SignInPageWithOAuth } from "./pages/test-page/signInPageWithOAuth.jsx";

export default function Routes() {
  return (
    <ReactRoutes>

      <Route path="/test-page" element={<SignInPageWithOAuth />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/chatlist" element={<ChatList />} />
      <Route path="/login" element={<LoginPage />} /> 

      <Route path="/initial-create-space" element={<SpaceCreationPage />} />
      <Route path="/initial-invite" element={<InitialInvitePage />} />

    </ReactRoutes>
  );
}
 