import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductionPlannerPage from "./pages/ProductionPlannerPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route index path="/productionPlanner" element={<ProductionPlannerPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
