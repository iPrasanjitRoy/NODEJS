import AddProduct from './AddProduct';
import './App.css';
import ProductList from './ProductsList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList></ProductList>,
  },
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

/* 

🖥️ CreateBrowserRouter, RouterProvider: These Are Functions Imported From React-Router-Dom. 
👉 CreateBrowserRouter Is Used To Create A Router Configuration, And RouterProvider Is Used To Wrap The Application With The Router.

🖥️ CreateBrowserRouter Is Called With An Array Of Route Objects. 
👉 Each Route Object Specifies A Path And An Element. 

🖥️ RouterProvider Is A Component From React-Router-Dom That Accepts A Router Prop, 
👉 Which Is Set To The Router Configuration Created Earlier. 

*/ 