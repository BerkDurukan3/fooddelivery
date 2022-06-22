import "./Star.scss";
import star from "../../Assets/images/star.png";

function Star(props) {
  return (
    <div className="star-container centered">
      <div className="star">
        <img alt="" src={star}></img>
      </div>
      <div className="actions-font points ">4.8</div>
      <div className="actions-font reviews">(5k reviews)</div>
    </div>
  );
}

export default Star;
