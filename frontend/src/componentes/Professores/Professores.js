import React from "react"
import './Professores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaProfessores";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Professores() {
  const [professores, setProfessores] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('professores')
      .then(response => setProfessores(response.data));
  }, []
  )

  return (
    <>
        <div id="idProfessores" className="professores">
          <div id="corpo_rel">
            <legend> Registros de Professores Cadastrados</legend>
            <Link to="/professores/0" value={'I'}>incluir Novo Professor</Link>

            <div>

              <Tabela
                items={professores}
                chave={'/professores/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Professores;

