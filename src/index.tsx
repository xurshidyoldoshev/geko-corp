import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/context";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
