// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/home';
import { Header } from './components/Header';
import Bollywood from './components/Bollywood';
import Hollywood from './components/Hollywood';
import Technology from './components/Technology';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Common from './components/Common';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/bollywood' element={<Bollywood/>}></Route>
      <Route path='/hollywood' element={<Hollywood/>}></Route>
      <Route path='/technology' element={<Technology/>}></Route>
      <Route path='/fitness' element={<Fitness/>}></Route>
      <Route path='/food' element={<Food/>}></Route>
      <Route path='/common' element={<Common/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
