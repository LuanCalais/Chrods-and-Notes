import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const storageUserState = localStorage.getItem("userState");
    
    if (!storageUserState) {
      navigate("/", { replace: true });
      return;
    }

    try {
      const userStateObject = JSON.parse(storageUserState);
      
      if (!userStateObject?.id || !userStateObject?.isLogged) {
        localStorage.removeItem("userState");
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Erro ao parsear userState:", error);
      localStorage.removeItem("userState");
      navigate("/", { replace: true });
    }
  }, [navigate, location]);
};

export default useAuth;