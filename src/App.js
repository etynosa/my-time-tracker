import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
       
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
