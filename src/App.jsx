import React from "react";
import { Routes, Route } from "react-router-dom";
import WebRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <Routes>
        {WebRoutes.map(({ path, component: Component, title, children }) => (
          <Route key={path} path={path} element={<Component title={title} />}>
            {children && (
              <Route>
                {children.map(
                  ({ path: childPath, component: ChildComponent }) => (
                    <Route
                      key={childPath}
                      path={childPath}
                      element={<ChildComponent />}
                    />
                  )
                )}
              </Route>
            )}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
