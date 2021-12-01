import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
    
    

      return (
        <tr key={item.pro_codigo}>
          <td> {item.pro_codigo} </td>
          <td> {item.pro_nome} </td>
          <td> {item.pro_apelido} </td>
          {/* <td> {status} </td> */}
          <td> {item.pro_celular} </td>
          <td> {item.pro_formacao} </td>
          <td> {item.pro_anonascimento} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.pro_codigo} > Editar </a></td>

          <td> <Link to={props.chave + item.pro_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

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
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Celular </th>
            <th scope="col"> Formaçao </th>
            <th scope="col"> Ano nascimento </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Professor</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}