import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  return (
    <div>
      <UserRoutes />
    </div>
  );
}

export default App;
