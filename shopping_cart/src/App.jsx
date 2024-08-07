import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


const App = () => {
  return(

    <div>
      <div className="bg-slate-700 shadow-2xl">
        <Navbar/>

      </div>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route  path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
