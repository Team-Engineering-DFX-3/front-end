import '../src/Component/css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Component/Home';
import Header from './Component/Header/Header';
import Industry from './Component/Industry';
import IndustryProfile from './Component/IndustryProfile';
import IndustryProfileEdit from './Component/IndustryProfileEdit';
import Vacancies from './Component/Vacancies';
import UserProfile from './Component/UserProfile';
import UserProfileEdit from './Component/UserProfileEdit';

function App() {
 
  
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/industry/:id" element={<IndustryProfile />} />
        <Route path="/editIndustry" element={<IndustryProfileEdit />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/user" element={<UserProfile /> } />
        <Route path="/UserEdit" element={<UserProfileEdit />} />
      </Routes>
    </div>
  )
}

export default App;
