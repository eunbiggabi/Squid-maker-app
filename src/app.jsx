import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/navbar/navbar'
import Home from './pages/home/home'
import Maker from './pages/maker/maker'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/maker" element={<Maker />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
