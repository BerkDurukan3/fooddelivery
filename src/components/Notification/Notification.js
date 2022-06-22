import "./Notification.scss";
import shoppingbag from "../../Assets/images/shopping-bag.png";

function Notification(props) {
  return (
    <div className="notifications centered">
      <img alt="" src={shoppingbag}></img>
    </div>
  );
}

export default Notification;
