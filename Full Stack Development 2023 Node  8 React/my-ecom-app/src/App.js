import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
