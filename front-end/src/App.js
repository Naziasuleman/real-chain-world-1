import MarketPlace from "./Pages/MarketPlace";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Tokenization from "./Pages/Tokenization";
import Property from "./Pages/Property";
import PropertyDetail from "./Pages/PropertyDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tokenization" element={<Tokenization />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/property-detail" element={<PropertyDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
