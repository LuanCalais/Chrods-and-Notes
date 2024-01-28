import "./App.css";
import Initial from "./Pages/Initial";
import { UserProvider } from "./Contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Initial />
      </UserProvider>
    </div>
  );
}

export default App;
