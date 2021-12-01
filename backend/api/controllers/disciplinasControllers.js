const models = require('../models/disciplinasModels.js');

module.exports = {
  
    disciplinasGetAll,
    disciplinasGetById,
    disciplinasAtivoInativo,
    disciplinasNovo,
    disciplinasEditar,
}

function disciplinasMenu(req, res) {
    res.json('Rota disciplinas Encontrada!!!');
    console.log('Rota disciplinas Encontrada!!!');
}

function disciplinasGetAll(req, res) {
    console.log('Listar disciplinas {M O D E L}');
 
    models.getAllDisciplinas(function (err, resposta) {
        console.log('Retorno de Disciplinas {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function disciplinasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdDisciplinas(id, function (err, resposta) {
        console.log('Retorno de Disciplinas Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

function disciplinasAtivoInativo(req, res) {
    const id = req.params.pro_codigo
    res.json('Ativar/Inativar disciplinas { M O D E L }')
    console.log('Ativar/Inativar disciplinas { M O D E L }')
    console.log('Parametro Esperado A-I: ' + id);

    models.getByIdDisciplinas(id, function (err, resposta) {
        console.log('Retorno de Disciplinas Id {M O D E L}', resposta)
  
        

        // models.ativarInativar(id, p_ativo, function (err, result) {
        //     if (err) {
        //         throw err
        //     }
        //     console.log("Registro Atualizado!!!")
        //     //            res.redirect('/professores/consultar/' + id);
        // })
    })
}


function disciplinasNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de disciplinas...");
    console.log(req.body);
    dados.dis_codigo = null;
    console.log("Inserindo novo registro de disciplinas...");
    models.novoDisciplina(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/disciplinas');
    })
}


function disciplinasEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de disciplinas...",dados);

    models.editarDisciplinas(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/disciplinas');
    });
}


