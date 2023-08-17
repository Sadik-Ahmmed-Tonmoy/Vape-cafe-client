import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="bg-slate-900">
        <div className="container mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
