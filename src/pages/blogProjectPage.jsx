import {allblogposts} from "../data/allblogposts"
import SiteNavbar from "../components/SiteNavbar";

function BlogProjectPage(props) {
    console.log(props);
    document.title = props.title;
    let path = `/blog${props.path}`;
    props.analytics.page({
      url: `https://rexwang8.github.io/${path}`
    })
    
    return(<div className="bg2">
    <div className="aspect">
      <div className="bg1">
        <SiteNavbar url={path}></SiteNavbar>
        <div>
        <h2>ProjectPage for Devblog dynamic (WIP)</h2>
        </div>
        <h4>Dynamic generation of hyperlinks to individual blog pages.</h4>



        </div>
        </div>
    </div>);
}

export default BlogProjectPage;