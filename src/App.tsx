import './App.css'
import {Footer} from "@/src/common/Footer/Footer.tsx";
import {Header} from "@/src/common/Header/Header.tsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
  )
}

export default App
