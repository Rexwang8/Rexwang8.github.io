import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
function RoutingPage()
{

  return(
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="expenses" element={<App />} />
        <Route path="invoices" element={<App />} />
      </Routes>
  );

}

export default RoutingPage;
