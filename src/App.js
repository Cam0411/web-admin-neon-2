import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import HomePage from './page/homepage';
import CreateProduct from './page/createProductpage';
import ShowProductPage from "./page/showProductPage"
import UpdateProductPage from "./page/updateProductPage"
function App() {
  return (
     <Router>
          <Routes>
          <Route exact path='/' element={<HomePage />}  />
          <Route exact path='/createProduct' element={<CreateProduct />}  />
          <Route exact path='/displayProduct' element={<ShowProductPage />}  />
          <Route exact path='/updateProduct/:slug' element={<UpdateProductPage />} />
        </Routes>
     </Router>
  );
}

export default App;
