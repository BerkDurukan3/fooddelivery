import "./ActionButton.scss";
import play from "../../Assets/images/play.png";
function ActionButton(props) {
  return (
    <div className={props.className !== undefined ? `action-btn actions-font centered ${props.className}` : "action-btn actions-font centered"}>
      <img alt="" className={props.imgFlag !== undefined ? `show` : "hide"} src={play}></img>
      <div>{props.text}</div>
    </div>
  );
}

export default ActionButton;
