import ActionButton from "../ActionButton/ActionButton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Notification from "../Notification/Notification";
import ProductIcon from "../ProductIcon/ProductIcon";
import "./Header.scss";

function Header() {
  return (
    <div className="header centered">
      <ProductIcon></ProductIcon>
      <NavigationMenu></NavigationMenu>
      <div className="actions centered">
        <Notification></Notification>
        <ActionButton className={"register"} name={"Register"}></ActionButton>
        <ActionButton className={"login"} name={"Login"}></ActionButton>
      </div>
    </div>
  );
}

export default Header;
