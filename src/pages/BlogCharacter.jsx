import React, { useContext } from 'react'
import { Link, useParams, NavLink } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { CharacterContext } from '../App';


const BlogCharacter = () => {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`
    const { data, error, loading } = useFetch(url);
    const { CharacterList } = useContext(CharacterContext);
    if (loading) return (<h1>Cargando...</h1>);
    if (error) return (<h1>Ha ocurrido un error inesperado.</h1>);
    return (
        <>
            <NavLink className="btn btn-primary" to={'/blog'}>Volver al Blog</NavLink >
            <div className='card'>
                <img
                    src={data.image} alt="..." className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{CharacterList[params.id].name}</h5>
                    <p className='card-text'>{CharacterList[params.id].species}</p>
                    <link to={`/blog`} className="btn btn-primary">Vuelve</link>
                </div>

            </div>
        </>
    )
}

export default BlogCharacter