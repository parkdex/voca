import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>    
      <div>
        <Header />
        {/* 헤더는 고정 */}
        <Routes>
          <Route path='/' element= {<DayList />} />
          <Route path='/day/:day' element= {<Day />} /> 
          {/* :day 동적 주소 */}
          <Route path='/create_word' element= {<CreateWord />} />
          <Route path='/create_day' element= {<CreateDay />} />
          <Route path='*' element= {<EmptyPage />} />
        </Routes>   
        {/* 라우터 목록 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
