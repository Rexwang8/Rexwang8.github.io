import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
function RoutingPage()
{

  return(
      <Routes>
        <Route path="*"  element={<MainPage title="Main"/>} />
        <Route path="/"  element={<MainPage title="Main"/>} />
        <Route path="/blog" element={<App />} />
        <Route path="/dev" element={<App />} />
        <Route path="/resource/ai/styles" element={<AIStylePage title="AI Styles"/>} />
      </Routes>
  );

}

export default RoutingPage;
