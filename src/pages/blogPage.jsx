import {allblogposts} from "../data/allblogposts"
import SiteNavbar from "../components/SiteNavbar";

function BlogPage(props) {
    console.log(props);
    document.title = props.title;
    
    props.analytics.page({
      url: 'https://rexwang8.github.io/blog'
    })

    return(<div className="bg2">
    <div className="aspect">
      <div className="bg1">
        <SiteNavbar url="/blog"></SiteNavbar>
        <div>
        <h2>Page for Devblog dynamic (WIP)</h2>
        </div>
        <h4>Dynamic generation of hyperlinks to project pages - then to blog pages</h4>



        </div>
        </div>
    </div>);
}

export default BlogPage;