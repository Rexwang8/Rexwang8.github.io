import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
import AIPromptsPage from "./aiPromptsPage";
import BlogPage from "./blogPage";
import {blogposts} from "../data/allblogposts"


function RoutingPage(props)
{
  var allblogprojectpages = [];
  for (var i = 0; i < Math.ceil(Object.keys(blogposts).length); i += 1) {
    allblogprojectpages.push(<Route path={blogposts[Object.keys(blogposts)[i]].path} element={<BlogPage title="DevBlog"analytics={props.analytics}/>} />)
  }

  console.log(allblogprojectpages);



  return(
      <Routes>
        <Route path=""  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/"  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/blog" element={<BlogPage title="DevBlog"analytics={props.analytics}/>} />
        {allblogprojectpages}
        <Route path="/dev" element={<App />} />
        <Route path="/resource/ai/teapot" element={<AIStylePage title="Teapots" analytics={props.analytics}/>} />
        <Route path="/resource/ai/prompts" element={<AIPromptsPage title="Prompts" analytics={props.analytics}/>} />
        <Route path="*"  element={<MainPage title="Main" analytics={props.analytics}/>} />
      </Routes>
  );

}

export default RoutingPage;
