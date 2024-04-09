import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import AuthorsList from './componentes/AuthorsList';
import Header from './componentes/Header';

import PgAutorInsert from './pages/insertAutores.jsx';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AuthorsList />} />
          <Route path="/insertAutores" element={<PgAutorInsert />} />
        </Routes>
      </div>
    </Router>

      
    </div>
  );
}

export default App;


