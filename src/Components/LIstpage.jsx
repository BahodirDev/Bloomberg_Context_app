import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { MoneyContext } from '../context/context';
import Detail from '../Page/Detail';
import ItemList from '../Page/ItemList';
import Stories from '../Page/Stories'
import Tags from '../Page/Tags';
function LIstpage(props) {

  

    return (
        <div>
            <Navbar />
            <div>
               <Routes>
                <Route  path='/' element={<Stories />} />
                <Route  path='/detail/:postId' element={<Detail />} />
                <Route  path='/detail/more/:id' element={<Tags />} />
                <Route  path='/detail/items/:id' element={<ItemList />} />
               </Routes>
            </div>
        </div>
    );
}

export default LIstpage;