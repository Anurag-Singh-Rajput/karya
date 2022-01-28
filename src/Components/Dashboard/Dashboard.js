import Header from "../Header/Header";
import CardContainer from "../Card/CardContainer";

const Dashboard = (props) => {
  return (
    <>
      <Header name={props.name} />
      <CardContainer />
    </>
  );
};

export default Dashboard;
