
function TeapotCard(props) {
  return (<div>
<img src={props.img} alt="teapot" className="teapot"></img><p>"{props.prompt}"</p>

  </div>);
}

export default TeapotCard;
