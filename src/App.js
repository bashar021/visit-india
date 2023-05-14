
import 'react-slideshow-image/dist/styles.css'
import React, { useEffect,useState } from "react";
import Homepage from './components/Homepage.js'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import BookTicket from './components/BookTicket.js';
import Ticket from './components/Ticket.js';
import Searchplace from './components/Searchplace.js';

function App() {
  let [selected_place_data,set_selected_place_data] = useState('')
  let [persons_data , set_persons_data] = useState('')
  useEffect(() => {
  }, []);
 
  return (
    <Router>
      <Routes>
        {/* HOMEPAGE ROUTE */}
        <Route path='/' element={<Homepage></Homepage>}></Route>
         {/* ROUTE TO SEARCH THE TOURIST PLACE FOR VISITING  */}
         <Route path='/user/select place' element={<Searchplace state={{set_selected_place_data}} ></Searchplace>}></Route>
        {/* ROUTE TO BOOOK THE TICKET */}
        <Route path='/user/book your ticket' element={<BookTicket place_data={selected_place_data} set_persons_data = {set_persons_data} set_place_data = {set_selected_place_data} ></BookTicket>}></Route>
        {/* ROUTE TO DWONLOAD THE GENRATED TICKET  */}
        <Route path='/user/ticket' element={<Ticket place_data={selected_place_data} persons_data = {persons_data}  ></Ticket>} ></Route>
       
      </Routes>
    </Router>
  );
}
export default App;
 