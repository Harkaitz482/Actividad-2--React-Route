import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import BlogCharacter from './pages/BlogCharacter';
import React, { createContext, useState } from 'react';


export const CharacterContext = createContext();
function App() {

  const [characterList, setCharacterList] = useState(null);
  console.log(characterList);

  return (
    <>

      <CharacterContext.Provider value={{ characterList, setCharacterList }}>
        <Navbar />
        <h1>App</h1>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<Inicio />} path="/"></Route>
            <Route element={<Contacto />} path="/contacto"></Route>
            <Route element={<Blog />} path="/blog"></Route>
            <Route element={<NotFound />} path="*"></Route>
            <Route element={<BlogCharacter />} path='/blog/:id'></Route>
          </Route>
        </Routes>
      </CharacterContext.Provider>
    </>
  );

}

export default App;
