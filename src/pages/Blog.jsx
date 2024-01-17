import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { CharacterContext } from '../App';



const Blog = () => {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
  const { setCharacterList } = useContext(CharacterContext);

  useEffect(() => {
    if (data) {
      setCharacterList(data.results); // Actualizando el estado global cuando los datos cambian
    }
  }, [data, setCharacterList]); // Dependencias del efecto
  const [searchTerm, setSearchTerm] = useState('');

  let [searchParams, setSearchParams] = useSearchParams();

  if (loading) return (<h1>Cargando...</h1>);
  if (error) return (<h1>Ha ocurrido un error inesperado.</h1>);

  console.log(data.results + "data.results");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchParams({ filter: e.target.value });
  };
  return (
    <>
      <h1>Blog - Elige un personaje</h1>

      <input
        type='text'
        name=''
        onChange={handleChange}
        className='form-control my-3'
        alt='Buscador'
        value={searchTerm}
      ></input>

      <ul className='list-group'>
        {data.results
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <Link
              className='list-group-item'
              key={item.id}
              to={`/blog/${item.id}`}
            >
              {item.name}
            </Link>
          ))}

      </ul>
    </>

  )
}

export default Blog