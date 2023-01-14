import { blogposts } from "../data/allblogposts";
import SiteNavbar from "../components/SiteNavbar";
import BlogShelf from "../components/BlogShelf";
import Container from "react-bootstrap/esm/Container";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function BlogPage(props) {
  
  document.title = props.title;

  props.analytics.page({
    url: "https://rexwang8.github.io/blog",
  });
  const images = importAll(require.context("../projectassets", true, /\.(png|jpe?g|svg)$/));
  
    var allblogprojectpages = [];
  for (var i = 0; i < Math.ceil(Object.keys(blogposts).length); i += 3) {
    let b1 = blogposts[Object.keys(blogposts)[i]];
    let b2 = blogposts[Object.keys(blogposts)[0]];
    let b3 = blogposts[Object.keys(blogposts)[0]];

    if(i < Math.ceil(Object.keys(blogposts).length))
    {
      b2 = blogposts[Object.keys(blogposts)[i + 1]];
    }

    if(i < Math.ceil(Object.keys(blogposts).length - 2))
    {
      b3 = blogposts[Object.keys(blogposts)[i + 2]];
    }


    allblogprojectpages.push(<BlogShelf title1={`${b1.title}`} 
    content1={`${b1.desc}`} img1={images[`${b1.projectimg}.png`]} 
    link1={`blog/${b1.path}`} date1={`${b1.date}`}
    title2={`${b2.title}`} 
    content2={`${b2.desc}`} img2={images[`${b2.projectimg}.png`]} 
    link2={`blog/${b2.path}`}  date2={`${b2.date}`}
    title3={`${b3.title}`}  content3={`${b3.desc}`} img3={images[`${b3.projectimg}.png`]} 
    link3={`blog/${b3.path}`}  date3={`${b3.date}`}></BlogShelf>);
  }


  console.log(blogposts);

//<BlogProjectPage title={`${blogposts[Object.keys(blogposts)[i]].title}`} analytics={props.analytics} path={`${blogposts[Object.keys(blogposts)[i]].path}`}/>
  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/blog'></SiteNavbar>
          <div>
            <h2>Page for Devblog dynamic (WIP)</h2>
          </div>
          <h4>Dynamic generation of hyperlinks to project pages - then to blog pages</h4>
          <Container>
            {allblogprojectpages}
          </Container>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
