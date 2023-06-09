import "./Initial.module.css";
import Header from "../../Components/Header";
import CenterContent from "../../Components/CenterContent";

const Initial = () => {
  return (
    <main>
      <header>
        <Header isLoged={false} />
      </header>
      <CenterContent isLoged={false} />
    </main>
  );
};

export default Initial;
