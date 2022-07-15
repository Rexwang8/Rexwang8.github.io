import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
import AIPromptsPage from "./aiPromptsPage";
function RoutingPage(props)
{

  return(
      <Routes>
        <Route path=""  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/"  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/blog" element={<App />} />
        <Route path="/dev" element={<App />} />
        <Route path="/resource/ai/teapot" element={<AIStylePage title="Teapots" analytics={props.analytics}/>} />
        <Route path="/resource/ai/prompts" element={<AIPromptsPage title="Prompts" analytics={props.analytics}/>} />
        <Route path="*"  element={<MainPage title="Main" analytics={props.analytics}/>} />
      </Routes>
  );

}

export default RoutingPage;
