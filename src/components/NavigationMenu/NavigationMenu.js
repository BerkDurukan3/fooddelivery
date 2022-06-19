import NavButton from "../NavButton/NavButton";
import "./NavigationMenu.scss";

function NavigationMenu() {
  return (
    <div className="nav-menu centered">
      <NavButton className={"selected"} name={"Home"}></NavButton>
      <NavButton name={"Menu"}></NavButton>
      <NavButton name={"Services"}></NavButton>
      <NavButton name={"Contact"}></NavButton>
    </div>
  );
}

export default NavigationMenu;
