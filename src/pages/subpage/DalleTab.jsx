
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
        Note: DALLE2 Teapots do not use image prompts, as it will take it as the Initial Image instead of the Prompt Image. DALLE-2 generates 1024x1024 images which I downscaled to 256x256 for space
        concerns. DALLE2 is free but allows only limited prompts per day, so this page will be empty for a while.
      </h3>
     <TeaAccordian images={images}>
     </TeaAccordian>
    </div>
  );
}

export default DalleTab;
