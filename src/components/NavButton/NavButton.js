import "./NavButton.scss";

function NavButton(props) {
  return <div className={props.className !== undefined ? `nav-menu-item font ${props.className}` : "nav-menu-item font"}>{props.name}</div>;
}

export default NavButton;
