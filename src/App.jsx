import "./App.css";

import React from "react";
import UploadForm from "./Components/UploadForm";
import ScoreDashboard from "./Components/ScoreDashboard";

const App = () => {
  return (
    <div>
      <UploadForm />
      <ScoreDashboard />
    </div>
  );
};

export default App;
