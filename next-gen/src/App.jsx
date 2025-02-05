import { Routes ,Route } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Marketplace from "./pages/Marketplace";
function App(){
  return(
    
      <Routes >
        <Route element={<RootLayout />}>
          <Route path="/" element ={<Home />} />
          <Route path="/marketplace" element ={<Marketplace />} />
        </Route>
      </Routes>
    
  );
}

export default App;