import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
    
    

      return (
        <tr key={item.dis_codigo}>
          <td> {item.dis_codigo} </td>
          <td> {item.dis_nome} </td>
          <td> {item.dis_area} </td>
          <td> {item.dis_aulas} </td>
          <td> {item.dis_local} </td>
        
          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.dis_codigo } > Editar </a></td>
    
          <td> <Link to={props.chave + item.dis_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Codigo </th>
            <th scope="col"> Disciplina </th>
            <th scope="col"> Area </th>
            <th scope="col"> Aulas </th>
            <th scope="col"> Local </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Disciplina</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}