import Text from "../Text/Text";
import "./SupportBusiness.scss";
import business_1 from "../../Assets/images/business1.png";
import business_2 from "../../Assets/images/business2.png";
import business_3 from "../../Assets/images/business3.png";
import business_4 from "../../Assets/images/business4.png";
import business_5 from "../../Assets/images/business5.png";

function SupportBusiness(props) {
  return (
    <div className="support-container centered">
      <Text className={"support"} text={"Support by :"}></Text>
      <div className="support-business-container centered">
        <img alt="" src={business_1}></img>
        <img alt="" src={business_2}></img>
        <img alt="" src={business_3}></img>
        <img alt="" src={business_4}></img>
        <img alt="" src={business_5}></img>
      </div>
    </div>
  );
}

export default SupportBusiness;
