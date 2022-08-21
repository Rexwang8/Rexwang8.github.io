
import TeaAccordian from "./teaAccordian";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function SDTab() {
  const images = importAll(require.context("../../teapots_sd", true, /\.(png|jpe?g|svg)$/));
  return (
    <div>
       <TeaAccordian images={images} gen={"sd"}></TeaAccordian>
    </div>
  );
}

export default SDTab;
