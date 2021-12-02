import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Search from './views/Search';
import Repository from './views/Repository';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/:username/:repository" element={<Repository />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
