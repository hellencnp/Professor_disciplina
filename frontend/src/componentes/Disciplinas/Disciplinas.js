import React from "react"
import './Disciplinas.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaDisciplinas";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState([])

 
  
  useEffect(() => {
    urlapi.get('disciplinas')
      .then(response => setDisciplinas(response.data));
  }, []
  )

  return (
    <>
        <div id="idDisciplinas" className="disciplinas">
          <div id="corpo_rel">
            <legend> Registros de Disciplinas Cadastrados</legend>
            <Link to="/disciplinas/0" value={'I'}>incluir Novo Disciplina</Link>

            <div>

              <Tabela
                items={disciplinas}
                chave={'/disciplinas/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Disciplinas;

