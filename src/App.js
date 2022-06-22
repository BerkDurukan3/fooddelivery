import "./App.scss";
import ActionButton from "./components/ActionButton/ActionButton";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import pic from "./Assets/images/content_img.png";
import SupportBusiness from "./components/SupportBusiness/SupportBusiness";

function App() {
    return (
        <div className="main-container">
            <Header></Header>
            <div className="content-container centered">
                <div className="content">
                    <Text
                        className={"title"}
                        text={'Don’t wanna\nMake you have A bad day'}
                    ></Text>
                    <Text className={"subtitle"}
                          text={"Our job is delivering a delicious food with fast , free delivery and easy."}></Text>
                    <div className="centered btn-container">
                        <ActionButton text={"Order Now"} className={"order-now"}></ActionButton>
                        <ActionButton imgFlag={true} text={"How to Order"} className={"how-to-order"}></ActionButton>
                    </div>
                    <CustomerReview></CustomerReview>
                </div>
                <div className="content">
                    <img alt="" src={pic}></img>
                </div>
            </div>
            <SupportBusiness></SupportBusiness>
            <div className="services-container">

            </div>
        </div>
    );
}

export default App;
