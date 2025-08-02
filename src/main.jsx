import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter as BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
