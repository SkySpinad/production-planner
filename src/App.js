import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompetitionPage from "./pages/CompetitionPage";
import VcrPage_v2 from "./pages/VcrPage_v2";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route index path="/productionPlanner" element={<CompetitionPage/>}/>
        <Route index path="/vcr_v2" element={<VcrPage_v2/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
