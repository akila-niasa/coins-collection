import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Coins from './Coins/Coins';
import Header from './Header/Header';
import Contract from './Contract/Contract';
import About from './About/About';
import CoinDetails from './CoinDetails/CoinDetails';
import BdAddress from './Contract/BdAddress';
import UkAdress from './Contract/UkAdress';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<HomePage></HomePage>}/>
       <Route path='/coins' element={<Coins/>}/>
         <Route path='/coindetails/:id' element={<CoinDetails></CoinDetails>}></Route>

       <Route path='/contract' element={<Contract/>}>
         <Route path='bdAddress' element={<BdAddress></BdAddress>}/>
         <Route path='ukAddress' element={<UkAdress></UkAdress>}/>
       </Route>

       <Route path='/about' element={<About/>}/>
       <Route path='*' element={<NotFound/>}/>

       
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
