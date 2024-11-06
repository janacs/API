import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Adicione isso

function App() {
  return (
    <Router> {/* Usando Router, renomeado de BrowserRouter */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loja">API Loja</Link>
          </li>
          <li>
            <Link to="/serie">API Serie Rick e Morty</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/serie" element={<Serie />} />
      </Routes>
    </Router>
  );
}
