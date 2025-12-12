import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tipografia.css";
import App from "./App.jsx";

import { BrowserRouter, useHref, useNavigate } from "react-router-dom";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

const RootNavigator = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider locale="es-MX" navigate={navigate} useHref={useHref}>
      <ToastProvider
        placement="bottom-left"
        toastOffset={60}
        maxVisibleToasts={4}
        toastProps={{
          variant: "flat",
          radius: "sm",
          shouldShowTimeoutProgress: true,
          classNames: {
            title: "pr-6",
            description: "pr-6",
            closeButton:
              "opacity-100 absolute right-4 top-1/2 -translate-y-1/2 ml-4",
            progressIndicator: "h-1 rounded-full opacity-100",
            base: "border-0",
          },
        }}
      >
        {/* 👇 App debe ir DENTRO del ToastProvider */}
        <App />
      </ToastProvider>
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
