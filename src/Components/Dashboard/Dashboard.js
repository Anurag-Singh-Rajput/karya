import Card from "../Card/Card";
import CardContainer from "../Card/CardContainer";
import Header from "../Header/Header";
import AllProjects from "../Projects/AllProjects";

const Dashboard = (props) => {
  return (
    <>
      <Header name={props.name} />
      {/* <AllProjects /> */}
      <CardContainer />
    </>
  );
};

export default Dashboard;
