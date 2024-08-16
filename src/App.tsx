import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Inventory } from './components/inventory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
