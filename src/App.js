import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    // La primera vez que se carga el componente
    let usuario_local = JSON.parse(localStorage.getItem("usuario"));
    
    setUsuario(usuario_local);
  },[]);
  
  useEffect(() => {
    //Cuando se modifica el usuario
    localStorage.setItem("usuario", JSON.stringify(usuario));
    
  },[usuario]);

  const curso = {
    id:1,
    titulo :"Master en typescript",
    contenido:"muchas horas de contenido"
  }
  return (
    <div className="App">
        <PruebaContext.Provider value ={{usuario, setUsuario}}>
          <AppRouter />
        </PruebaContext.Provider>
    </div>
  );
}

export default App;
