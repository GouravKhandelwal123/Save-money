import './App.css';
import Home from './components/home/Index'
import Navbar from './components/navbar/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/Index';
import Accounts from './components/accounts/Index';
import Transfer from './components/transfer/Index';
import Transactions from './components/transactions/Index';
import Contact from './components/contact/Index';
import AddUser from './components/addUser/Index';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/addUser' element={<AddUser />} />
        <Route exact path='/accounts' element={<Accounts />} />
        <Route exact path='/transactions' element={<Transactions />} />
        <Route exact path='/transfer' element={<Transfer />} />
      </Routes>
    </Router>
  );
}

export default App;
