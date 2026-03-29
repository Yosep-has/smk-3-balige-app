import React from "react";
import ReactDOM from "react-dom/client";
import UnduhSKL from "./pages/app/skl/UnduhSKL";

function App() {
  return <UnduhSKL />;
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);