import App from "../App";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AIStylePage from "./aiStylePage";
import AIPromptsPage from "./aiPromptsPage";
import BlogPage from "./blogPage";
import {blogposts} from "../data/allblogposts"
import BlogProjectPage from "./blogProjectPage";
import PromptGenerationPage from "./promptgenPage";
import BlogPostPage from "./blogPostPage";


function RoutingPage(props)
{
  var postcount = 0;
  var allblogprojectpages = [];
  var allblogpostpages = [];
  for (var i = 0; i < Math.ceil(Object.keys(blogposts).length); i += 1) {
    let project = blogposts[Object.keys(blogposts)[i]];
    let pposts = project.blogposts;

    postcount += Object.keys(pposts).length;
    
    allblogprojectpages.push(<Route path={`/blog/${project.path}`} element={<BlogProjectPage content={`${project.content}`} 
    title={`${project.title}`} analytics={props.analytics} 
    path={`${project.path}`}
    github={`${project.github}`}
    img={`${project.projectimg}`}
    date={`${project.date}`}
    posts={project.blogposts}
    />
   } />)

   for (let index = 0; index < Object.keys(pposts).length; index++) {
    allblogpostpages.push(<Route path={`/blog/${project.path}${pposts[Object.keys(pposts)[index]].path}`}
    element={<BlogPostPage
    path1={`${project.path}`}
    path2={`${pposts[Object.keys(pposts)[index]].path}`}
    title={`${pposts[Object.keys(pposts)[index]].title}`}
    analytics={props.analytics} 
    content={`${pposts[Object.keys(pposts)[index]].content}`}
    date={`${pposts[Object.keys(pposts)[index]].date}`}
    ></BlogPostPage>}></Route>);
   }
  }



  return(
      <Routes>
        <Route path=""  element={<MainPage title="Main"analytics={props.analytics}/>} />
        <Route path="/"  element={<MainPage title="Main"analytics={props.analytics}/>} />
        {allblogprojectpages}
        {allblogpostpages}
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
