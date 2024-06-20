import React from "react";
import { Routes, Route } from "react-router-dom";
import WebRoutes from "./routes/routes";
import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        style={{ marginTop: "20px" }}
        theme="colored"
        autoClose={true}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
