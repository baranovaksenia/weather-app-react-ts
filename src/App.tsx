import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStatistic } from './pages/MonthStatistic/MonthStatistic';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/month-statistic'
          element={<MonthStatistic />}
        />
      </Routes>
    </div>
  );
}

export default App;
