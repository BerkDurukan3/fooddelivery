import "./Text.scss";

function Text(props) {
  return <div className={props.className !== undefined ? `font ${props.className}` : "font"}>{props.text}</div>;
}

export default Text;
