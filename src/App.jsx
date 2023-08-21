import { useState } from "react";
// import './styles/main.scss'
// import "./index.css";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LandingPage/>
    </>
  );
}

export default App;
