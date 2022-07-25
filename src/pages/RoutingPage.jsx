import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
import AIPromptsPage from "./aiPromptsPage";
import BlogPage from "./blogPage";
import {blogposts} from "../data/allblogposts"
import BlogProjectPage from "./blogProjectPage";
import PromptGenerationPage from "./promptgenPage";


function RoutingPage(props)
{
  var allblogprojectpages = [];
  for (var i = 0; i < Math.ceil(Object.keys(blogposts).length); i += 1) {
    allblogprojectpages.push(<Route path={`/blog${blogposts[Object.keys(blogposts)[i]].path}`} element={<BlogProjectPage title={`${blogposts[Object.keys(blogposts)[i]].title}`} analytics={props.analytics} path={`${blogposts[Object.keys(blogposts)[i]].path}`}/> } />)
  }

  console.log(allblogprojectpages);



  return(
      <Routes>
        <Route path=""  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/"  element={<MainPage title="Main"analytics={props.analytics}/>} />
        {allblogprojectpages}
        
        <Route path="/blog" element={<BlogPage title="DevBlog"analytics={props.analytics}/>} />
        
        <Route path="/dev" element={<App />} />
        <Route path="/resource/ai/teapot" element={<AIStylePage title="Teapots" analytics={props.analytics}/>} />
        <Route path="/resource/ai/prompts" element={<AIPromptsPage title="Prompts" analytics={props.analytics}/>} />
        <Route path="/resource/ai/generator" element={<PromptGenerationPage title="Generator" analytics={props.analytics}/>} />
        <Route path="*"  element={<MainPage title="Main" analytics={props.analytics}/>} />
      </Routes>
  );

}

export default RoutingPage;
