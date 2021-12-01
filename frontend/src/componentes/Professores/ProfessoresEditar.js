import React from "react"
import './ProfessoresEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ProfessoresEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [ativoInativo, setpro] = useState('');
    const [pro_codigo, setPro_codigo] = useState(0);

    const [pro_nome, setPro_nome] = useState('');
    const [pro_apelido, setPro_apelido] = useState('');
    const [pro_celular, setPro_celular] = useState('');
    const [pro_cpf, setPro_cpf] = useState('');
    const [pro_formacao, setPro_formacao] = useState('');
    const [pro_anonascimento, setPro_anonascimentol] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idProfessor } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Professor: ' + idProfessor + ' - ' + idBoolean)
        if (idProfessor === 0) {
            //            nomeCampo = 'Inclusão de Professor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Professor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getProfessores() {
            console.log('Professor: ' + idProfessor + ' - ' + idBoolean)
            if (idProfessor == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/professores/' + idProfessor);
                console.log(data)

                 setPro_codigo(data[0].pro_codigo);

                setPro_nome(data[0].pro_nome);
                setPro_apelido(data[0].pro_apelido);
                setPro_celular(data[0].pro_celular);
                // setPro_cpf(data[0].sexo);
                setPro_formacao(data[0].pro_formacao);
                setPro_anonascimentol(data[0].pro_anonascimento);

                console.log(data[0].pro_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getProfessores();
    }, []);


    async function handleProfessores(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.nome);

        try {
            if (pro_nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Professor: ",idProfessor)
                if (idProfessor == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('professores', data);
                } else {
                    console.log("Alteração de Registro! ",idProfessor)
                    await urlapi.put('/professores/' + idProfessor, data);
                }
                //                history.push('/professores');
            }
        } catch (error) {
            alert('Sucesso.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--professor" onSubmit={handleProfessores} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="pro_codigo"
                                value={pro_codigo}
                                onChange={e => setPro_codigo(e.target.value)}
                            />
                        </div>
                    </div>

                

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Professor </label>
                            <input type="text" className="form-control"
                                name="pro_nome"
                                value={pro_nome}
                                onChange={e => setPro_nome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="pro_apelido"
                                id="pro_apelido"
                                value={pro_apelido}
                                onChange={e => setPro_apelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label>Celular </label>
                            <input type="text" className="form-control" name="pro_celular"
                                id="pro_celular"
                                value={pro_celular}
                                onChange={e => setPro_celular(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cpf </label>
                            <input type="text" className="form-control" name="pro_cpf"
                                id="pro_cpf"
                                value={pro_cpf}
                                onChange={e => setPro_cpf(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Formacao </label>
                            <input type="text" className="form-control" name="pro_formacao"
                                id="pro_formacao"
                                value={pro_formacao}
                                onChange={e => setPro_formacao(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nascimento </label>
                            <input type="text" className="form-control" name="pro_anonascimento"
                                id="pro_anonascimento"
                                value={pro_anonascimento}
                                onChange={e => setPro_anonascimentol(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/professores" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
