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
  //sort blogposts by index found in *.id (higher id = newer post)
  var blogpostsSorted = {};
  Object.keys(blogposts)
    .sort(function (a, b) {
      return blogposts[b].id - blogposts[a].id;
    })
    .forEach(function (key) {
      blogpostsSorted[key] = blogposts[key];
    });
  //console.log(blogpostsSorted);

  for (var i = 0; i < Math.ceil(Object.keys(blogpostsSorted).length); i += 3) {
    let b1 = blogpostsSorted[Object.keys(blogpostsSorted)[i]];
    let b2 = blogpostsSorted[Object.keys(blogpostsSorted)[0]];
    let b3 = blogpostsSorted[Object.keys(blogpostsSorted)[0]];

    //console.log(i, Math.ceil(Object.keys(blogpostsSorted).length))
    if (i < Math.ceil(Object.keys(blogpostsSorted).length - 1)) {
      b2 = blogpostsSorted[Object.keys(blogpostsSorted)[i + 1]];
    }

    if (i < Math.ceil(Object.keys(blogpostsSorted).length - 2)) {
      b3 = blogpostsSorted[Object.keys(blogpostsSorted)[i + 2]];
    }

    allblogprojectpages.push(<BlogShelf img1={images[`${b1.projectimg}.png`]} obj1={b1} img2={images[`${b2.projectimg}.png`]} obj2={b2} img3={images[`${b3.projectimg}.png`]} obj3={b3}></BlogShelf>);
  }


  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/blog'></SiteNavbar>
          <div>
            <h2>Page for Devblog dynamic (WIP)</h2>
          </div>
          <h4>Dynamic generation of hyperlinks to project pages - then to blog pages</h4>
          <Container>{allblogprojectpages}</Container>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
