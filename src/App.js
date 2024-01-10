import Home from './pages/dashboard/Home';
import TopBar from './pages/global/TopBar';
import Calender from './pages/dashboard/Calender';
import Team from './pages/dashboard/Team';
import Contacts from './pages/dashboard/Contacts';
import Profile from './pages/dashboard/Profile';
import FAQ from './pages/dashboard/FAQ';
import SideBar from './pages/global/SideBar';
import { Routes , Route } from 'react-router-dom';
import { useState } from "react";

import './App.css';

function App() {


  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <SideBar  isSidebar={isSidebar} />
      <main className="content">
<TopBar isSidebar={isSidebar}/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Team" element={<Team/>} />
  <Route path="/Calender" element={<Calender/>} />
  <Route path="/Contacts" element={<Contacts/>} />
  <Route path="/Profile" element={ <Profile/>} />
  <Route path="/FAQ" element={ <FAQ/>} />
</Routes>


      </main>
     
    </div>
  );
}

export default App;
