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
function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1>App</h1>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route element={<Inicio></Inicio>} path="/"></Route>
          <Route element={<Contacto></Contacto>} path="/contacto"></Route>
          <Route element={<Blog></Blog>} path="/blog"></Route>
          <Route element={<NotFound></NotFound>} path="*"></Route>
          <Route element={<BlogCharacter></BlogCharacter>}path='/blog/:id'></Route>
        </Route>
      </Routes>
    </>
  );

}

export default App;
