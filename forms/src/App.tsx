import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cards } from './components/form/cards';
import HomePage from './pages/homePage';
import StateTextFields from './components/form/addCard';
import { SearchNav } from './components/form/search';
import { OneCard } from './components/form/oneCard';
import { DeleteCard } from './components/form/deleteCard';

export function App() {
  return (
    <>
      <HomePage />

      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/newSurvey" element={<StateTextFields />} />
        <Route path='/SearchNav' element={<SearchNav />}></Route>
        <Route path="/onecard" element={<OneCard />} />
        <Route path="/deleteCard" element={<DeleteCard />} />
      </Routes>
    </>
  )
}

export default App;







