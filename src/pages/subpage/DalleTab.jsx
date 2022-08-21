
import TeaAccordian from "./teaAccordian";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function DalleTab() {
  const images = importAll(require.context("../../teapots_dalle", true, /\.(png|jpe?g|svg)$/));
  return (
    
    <div>
      <h3>
        Note: DALLE2 does not allow modifications to resolution aspect ratio. NOTE: DALLE2 resouce work shelved now that it is a paid service. If you would like to contribute generations, please DM me.
      </h3>
     <TeaAccordian images={images} gen={"dalle"}>
     </TeaAccordian>
    </div>
  );
}

export default DalleTab;
