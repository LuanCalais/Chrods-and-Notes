import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import LoggedPage from "./Components/LoggedPage";
import Bands from "./Pages/Bands";
import Musics from "./Pages/Musics";
import { UserProvider } from "./Contexts/UserContext";
import { useAuth } from "./hooks/index";

const ProtectedRoute = ({ element: Element }) => {
  useAuth();
  return <Element />;
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app" element={<ProtectedRoute element={LoggedPage} />}>
            <Route index element={<Home />} />
            <Route path="bands" element={<Bands />} />
            <Route path="musics" element={<Musics />} />
          </Route>

          <Route path="*" element={<h1>Página não encontrada :(</h1>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
