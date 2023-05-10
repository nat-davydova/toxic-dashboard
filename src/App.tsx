import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className="app">
      <div className="navigation"></div>
      <div className="container">
        <div className="topBar"></div>
        <div className="content"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
