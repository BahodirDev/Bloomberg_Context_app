
import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { MoneyContext } from './context/context';
import HomePage from './Components/HomePage';
import LIstpage from './Components/LIstpage';




function App() {

 const {setMoney} = useContext(MoneyContext)

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6a00e2d8a4msh46b0d41b6dfba00p17b76fjsnfe5f4f864379',
        'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
      }
    };
    
    fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list?template=CURRENCY&id=usdjpy', options)
      .then(response => response.json())
      .then(response => {
        setMoney(response.stories)
      })
      .catch(err => console.error(err));
  },[])




  return (
   <div className='App'>
      <div className="routes">
        <Routes>
          <Route path='/' index  element={<HomePage />}  />
          <Route path='/lists/*'  element={<LIstpage />}  />
        </Routes>
      </div>
   </div>
  );
}

export default App;
