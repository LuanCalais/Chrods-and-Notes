import styles from "./LoggedPage.module.css";
import SideMenu from "../Common/SideMenu";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { UserModel } from "../../Model";
import UserService from "../../Services/UserService";
import { responseRequest } from "../../utils";

const LoggedPage = () => {
  const { validateLogin } = useContext(UserContext);

  useEffect(() => {
    validateLogin();
  }, []);

  const getUserContext = () => {
    console.log("Cheguei aqui papihihi");
    // console.log(`context`, context);
  };

  //   const [selectedContent, setSelectedContent] = useState(0);
  //   const [loggedUser, setLoggedUser] = useState(new UserModel());
  //   const [user, setUser] = useState(new UserModel());
  //   const navigate = useNavigate();
  //   const { setContextUser } = useContext(UserContext);

  const logUser = (user = {}) => {
    //     setLoggedUser(user);
    //     setContextUser(user);
  };

  async function logOutUser() {
    //     const storageUserState = localStorage.getItem("userState");
    //     const userStateObject = JSON.parse(storageUserState);
    //     setUser({ email: userStateObject.email });
    //     const res = await UserService.loginUser({
    //       email: userStateObject.email,
    //       state: false,
    //     });
    //     responseRequest(res);
    //     setContextUser(res.data.data);
    //     navigate("/")
  }

  return (
    <div>
      <SideMenu loggedUser={logUser} handleLogOut={logOutUser} />
      {/* setContent={handleContent} */}
      {/* <div className={styles.content}>
        {selectedContent === 0 && <Home user={loggedUser} />}
        {selectedContent === 1 && <Bands />}
        {selectedContent === 2 && <Musics />}
      </div> */}
    </div>
  );
};

export default LoggedPage;
