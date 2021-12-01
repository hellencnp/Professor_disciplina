import React from "react"
import './DisciplinasEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function DisciplinasEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();
    const [ativoInativo, setAtivo] = useState('');

    const [dis_codigo, setDis_codigo] = useState(0);

    const [dis_nome, setDis_nome] = useState('');
    const [dis_area, setDis_area] = useState('');
    const [dis_aulas, setDis_aulas] = useState('');
    const [dis_local, setDis_local] = useState('');


    const [checked, setChecked] = useState(false);

    const { idDisciplina} = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Disciplina: ' + idDisciplina+ ' - ' + idBoolean)
        if (idDisciplina=== 0) {
            //            nomeCampo = 'Inclusão de Disciplina';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Disciplina';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getDisciplinas() {
            console.log('Disciplina: ' + idDisciplina + ' - ' + idBoolean)
            if (idDisciplina == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/disciplinas/' + idDisciplina);
                console.log(data)
                setDis_codigo(data[0].dis_codigo);
                setDis_nome(data[0].dis_nome);
                setDis_area(data[0].dis_area);
                setDis_aulas(data[0].dis_aulas);
                setDis_local(data[0].dis_local);
        
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getDisciplinas();
    }, []);


    async function handleDisciplinas(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.nome);

        try {
            if (dis_nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Disciplina: ",idDisciplina)
                if (idDisciplina == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('disciplinas', data);
                } else {
                    console.log("Alteração de Registro! ",idDisciplina)
                    await urlapi.put('/disciplinas/' + idDisciplina, data);
                }
               
            }
        } catch (error) {
            alert('Sucesso.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--disciplina" onSubmit={handleDisciplinas} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="dis_codigo"
                                value={dis_codigo}
                                onChange={e => setDis_codigo(e.target.value)}
                            />
                        </div>
                    </div>

                

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Disciplina </label>
                            <input type="text" className="form-control"
                                name="dis_nome"
                                value={dis_nome}
                                onChange={e => setDis_nome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Area </label>
                            <input type="text" className="form-control" name="dis_area"
                                id="dis_area"
                                value={dis_area}
                                onChange={e => setDis_area(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label>Aulas </label>
                            <input type="text" className="form-control" name="dis_aulas"
                                id="dis_aulas"
                                value={dis_aulas}
                                onChange={e => setDis_aulas(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Local </label>
                            <input type="text" className="form-control" name="dis_local"
                                id="dis_local"
                                value={dis_local}
                                onChange={e => setDis_local(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/disciplinas" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
