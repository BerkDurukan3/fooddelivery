import "./ActionButton.scss";

function ActionButton(props) {
  return <div className={props.className !== undefined ? `action-btn actions-font centered ${props.className}` : "action-btn actions-font centered"}>{props.text}</div>;
}

export default ActionButton;
