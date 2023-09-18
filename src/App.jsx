import React from "react";
import { Routes, Route } from "react-router-dom";
import WebRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <Routes>
        {WebRoutes.map(({ path, component: Component, title }) => (
          <Route
            key={path}
            path={path}
            element={<Component title={title} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
