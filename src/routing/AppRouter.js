import React, { useContext } from 'react'
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

    const {usuario, setUsuario} = useContext(PruebaContext);

  return (

    <BrowserRouter>
        <header className='header'>
            {/*Menu de navegación */}
            <nav>
                <div className="logo">
                    <h2>Aprendiendo react context</h2>

                </div>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articulos">Articulos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/acerca-de">Acerca de</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    
                    {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                        <>
                            <li>
                                <NavLink to="/">{usuario.nick}</NavLink>    
                            </li>
                            <li>
                                <a href="#" onClick={ e => {
                                    e.preventDefault();
                                    setUsuario({});
                                }}>Cerrar sesión</a>    
                            </li>
                            </>
                    ):(
                        <li>
                            <NavLink to="/login">Identificate</NavLink>
                        </li>
                    )}
                        
                    

                </ul>
            </nav>
        </header>
        <section className='content'>
            {/*Configurar rutas */}
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/acerca-de' element={<Acerca />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/login' element={<Login />} />

                <Route path='/*' element={(<div>
                    <h1>ERROR ESTA PÁGINA NO EXISTE</h1>
                    </div>)} />
            </Routes>
        </section>
    </BrowserRouter>
    
  )
}
