import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact 
          patch="/"
          component={Pacientes}
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
