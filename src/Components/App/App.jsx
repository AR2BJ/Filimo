import { useRoutes } from "react-router-dom";
import routes from "../../Routes";
import "./App.css";
import Header from "../Header/Header";

const App = () => {
  let router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
    </>
  );
};

export default App;
