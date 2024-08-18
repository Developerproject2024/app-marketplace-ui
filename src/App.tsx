import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Inventory } from './components/inventory';
import { AuthProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoute';
import UnauthorizedPage from './components/context/UnauthorizedPage';
import AuthContainer from './containers/Auth/AuthContainer';
import PurchaserContainer from './containers/purchaser/PurchaserContainer';
import { makeRequest } from './services/api';
import { useDispatch } from 'react-redux';
import { items } from './store/slice/products.Slice';

function App() {
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
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles={['comprador']}>
                <AuthContainer />
              </ProtectedRoute>
            }
          >
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route
              path="/inventory"
              element={
                <ProtectedRoute allowedRoles={['vendedor']}>
                  <Inventory />
                </ProtectedRoute>
              }
            />

            <Route path="/buy" element={<PurchaserContainer />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
