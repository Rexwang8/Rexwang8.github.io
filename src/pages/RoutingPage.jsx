import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
function RoutingPage()
{

  return(
      <Routes>
        <Route path="/"  element={<MainPage title="Main"/>} />
        <Route path="/blog" element={<App />} />
        <Route path="/dev" element={<App />} />
      </Routes>
  );

}

export default RoutingPage;
