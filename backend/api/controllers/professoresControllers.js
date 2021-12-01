const models = require('../models/professoresModels.js');

module.exports = {
  
    professoresGetAll,
    professoresGetById,
    professoresAtivoInativo,
    professoresNovo,
    professoresEditar,
}

function professoresMenu(req, res) {
    res.json('Rota Professores Encontrada!!!');
    console.log('Rota Professores Encontrada!!!');
}

function professoresGetAll(req, res) {
    console.log('Listar Professores {M O D E L}');
 
    models.getAllProfessores(function (err, resposta) {
        console.log('Retorno de Professores {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function professoresGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdProfessores(id, function (err, resposta) {
        console.log('Retorno de Professores Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

function professoresAtivoInativo(req, res) {
    const id = req.params.pro_codigo
    res.json('Ativar/Inativar Professores { M O D E L }')
    console.log('Ativar/Inativar Professores { M O D E L }')
    console.log('Parametro Esperado A-I: ' + id);

    models.getByIdProfessores(id, function (err, resposta) {
        console.log('Retorno de Professores Id {M O D E L}', resposta)
        // let p_ativo = resposta[0].aut_ativoinativo
        // if (err) {
        //     throw err;
        // } else {
        //     if (p_ativo == 'A') {
        //         p_ativo = 'I'
        //     } else {
        //         p_ativo = 'A'
        //     }
        // }
        // console.log('A/I: ' + p_ativo);
        // models.ativarInativar(id, p_ativo, function (err, result) {
        //     if (err) {
        //         throw err
        //     }
        //     console.log("Registro Atualizado!!!")
        //     //            res.redirect('/professores/consultar/' + id);
        // })
    })
}


function professoresNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Professores...");
    console.log(req.body);
    dados.pro_codigo = null;
    console.log("Inserindo novo registro de Professores...");
    models.novoProfessor(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/professores');
    })
}


function professoresEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Professores...",dados);

    models.editarProfessores(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/professores');
    });
}


