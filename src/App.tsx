import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import UnauthorizedPage from './components/context/UnauthorizedPage';
import PurchaserContainer from './containers/purchaser/PurchaserContainer';
import { makeRequest } from './services/api';
import { useDispatch } from 'react-redux';
import { items } from './store/slice/products.Slice';
import InventoryContainer from './containers/inventory/InventoryContainer';
import ProductsContainer from './containers/products/ProductsContainer';
import { Layout } from './components/layout';
import LoginContainer from './containers/Login/LoginContainer';
import AdminContainer from './containers/admin/AdminContainer';

function App() {
  console.log('entrooo');
  const dispatch = useDispatch();
  makeRequest('http://localhost:3000/api/marketplace/products', 'GET')
    .then((item) => {
      dispatch(items(item));
    })
    .catch((error) => console.error('Error:', error));
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/inventory" element={<InventoryContainer />} />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/buy" element={<PurchaserContainer />} />

            <Route path="/login" element={<LoginContainer />} />
            <Route path="/admin" element={<AdminContainer />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
