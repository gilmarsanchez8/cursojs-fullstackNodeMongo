import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import clienteAxios from './config/axios';
//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  //State de la app
  const [citas, guardarCitas] = useState([]);
  
  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          guardarCitas(respuesta.data);
        })
        .catch(error => {
          console.log(error)
        })
    }
    consultarAPI();
   
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact 
          patch="/"
          component={() => <Pacientes citas={citas}/>}
        />
        <Route
          exact 
          patch="/nueva"
          component={NuevaCita}
        />
        <Route
          exact 
          patch="/cita/:id"
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
