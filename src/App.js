import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={HomePage} />
        <Route path='coins/id:' component={CoinPage}  />
      </div>
    </BrowserRouter>
  );
}

export default App;