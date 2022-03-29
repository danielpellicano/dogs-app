import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homeme />} />
        </Routes>
        <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
