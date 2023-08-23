import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Provider store={store}>
          <div className="bg-slate-900">
            <div className="container mx-auto">
              <RouterProvider router={router} />
            </div>
          </div>
        </Provider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
