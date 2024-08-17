import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Inventory } from './components/inventory';
import { Purchaser } from './components/purchaser';
import { AuthProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoute';
import UnauthorizedPage from './components/context/UnauthorizedPage';
import AuthContainer from './containers/Auth/AuthContainer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthContainer />}>
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route
              path="/inventory"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Inventory />
                </ProtectedRoute>
              }
            />
            <Route path="/buy" element={<Purchaser />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
