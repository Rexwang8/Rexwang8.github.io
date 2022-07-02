import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
import AIPromptsPage from "./aiPromptsPage";
function RoutingPage()
{

  return(
      <Routes>
        <Route path=""  element={<MainPage title="Main"/>} />
        <Route path="/"  element={<MainPage title="Main"/>} />
        <Route path="/blog" element={<App />} />
        <Route path="/dev" element={<App />} />
        <Route path="/resource/ai/teapot" element={<AIStylePage title="Teapots"/>} />
        <Route path="/resource/ai/prompts" element={<AIPromptsPage title="Prompts"/>} />
        <Route path="*"  element={<MainPage title="Main"/>} />
      </Routes>
  );

}

export default RoutingPage;
