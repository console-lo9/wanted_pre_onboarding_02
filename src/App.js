import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductRegistration from "pages/AddNewProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<ProductRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
