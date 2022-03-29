import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;