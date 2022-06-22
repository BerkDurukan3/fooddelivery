import "./CustomerReview.scss";
import avatar_1 from "../../Assets/images/avatar1.png";
import avatar_2 from "../../Assets/images/avatar2.png";
import avatar_3 from "../../Assets/images/avatar3.png";
import Text from "../Text/Text";
import Star from "../Star/Star";


function CustomerReview(props) {
  return (
    <div className="customer-review-container centered">
      <div className="avatar-container centered">
        <img alt="" className="avatar" src={avatar_1}></img>
        <img alt=""className="avatar" src={avatar_2}></img>
        <img alt="" className="avatar" src={avatar_3}></img>
      </div>
      <div className="review-container">
        <Text className={"actions-font"} text={"Customer Review"}></Text>
        <Star></Star>
      </div>
    </div>
  );
}

export default CustomerReview;
