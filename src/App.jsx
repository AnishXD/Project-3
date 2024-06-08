import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Department, SearchPage, Login,SignUp, Profile } from './pages';

import { Footer, Header } from './components';

const App = () => (
  <BrowserRouter>
    
    <Header/>

    {/* Main Content */}
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
        <Route path="/searchpage" element={<SearchPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </main>

    <Footer/>

  </BrowserRouter>
);

export default App;
