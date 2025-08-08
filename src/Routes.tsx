import React from "react";
import { Routes as ReactRoutes, Route } from "react-router";

import LandingPage from "@/pages/Landing/landingPage.jsx";
// import LandingPage from '@/pages';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
    </ReactRoutes>
  );
}
