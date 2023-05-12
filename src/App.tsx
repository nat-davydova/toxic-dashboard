import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <div className="topBar"></div>
        <div className="content"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
