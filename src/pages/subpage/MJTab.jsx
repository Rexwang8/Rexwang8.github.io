
import TeaAccordian from "./teaAccordian";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function MJTab() {
  const images = importAll(require.context("../../teapots_mj", true, /\.(png|jpe?g|svg)$/));
  return (
    <div>
       <TeaAccordian images={images}></TeaAccordian>
    </div>
  );
}

export default MJTab;
