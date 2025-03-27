import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Shop from './components/Shop';
import Login from './components/Login';
import HelpPage from './components/HelpPage';
import DetailHelp from './components/DetailHelp';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [isShowCart, setShowCart] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/shop"
          element={
            isAuthenticated ? (
              <Shop
                cart={cart}
                setCart={setCart}
                isShowCart={isShowCart}
                setShowCart={setShowCart}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/help"
          element={
            <HelpPage
              setShowCart={setShowCart}
            />
          }
        />
        <Route path="/detail-help" element={<DetailHelp />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/shop" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
