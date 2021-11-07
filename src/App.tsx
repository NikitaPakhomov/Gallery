import React from "react";

import MainLayout from "./layouts/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
