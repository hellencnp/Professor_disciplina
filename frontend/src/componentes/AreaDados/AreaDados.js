import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Professores from '../Professores/Professores';
import ProfessoresEditar from '../Professores/ProfessoresEditar';
import Disciplinas from '../Disciplinas/Disciplinas';
import DisciplinasEditar from '../Disciplinas/DisciplinasEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/professores" component={Professores}></Route>
        <Route exact path="/professores/:idProfessor" component={ProfessoresEditar}></Route>
        <Route exact path="/disciplinas" component={Disciplinas}></Route>
        <Route exact path="/disciplinas/:idDisciplina" component={DisciplinasEditar}></Route>



      </Switch>

    </div>
  );
}

