import "./App.scss";
import ActionButton from "./components/ActionButton/ActionButton";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <div className="content-container centered">
        <div className="content">
          <Text className={"title"} text={"Don’t wanna Make you have A bad day"}></Text>
          <Text className={"subtitle"} text={"Our job is delivering a delicious food with fast , free delivery and easy."}></Text>
          <div className="centered btn-container">
            <ActionButton text={"Order Now"} className={"order-now"}></ActionButton>
            <ActionButton text={"How to Order"} className={"how-to-order"}></ActionButton>
          </div>
          <div className="customer-review-container"></div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
