import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tipografia.css";
import App from "./App.jsx";

import { BrowserRouter, useHref, useNavigate } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react"; // 👈 solo HeroUIProvider

const RootNavigator = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider locale="es-MX" navigate={navigate} useHref={useHref}>
      <App />
    </HeroUIProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootNavigator />
    </BrowserRouter>
  </StrictMode>
);