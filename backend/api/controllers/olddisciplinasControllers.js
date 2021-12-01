const models = require('../models/disciplinasModels.js');

module.exports = {
    disciplinasMenu,
    disciplinasGetAll,
    disciplinasGetById,
    disciplinasAtivoInativo        
}

function disciplinasMenu(req, res) {
    res.json('Rota Disciplinas Encontrada!!!');
    console.log('Rota Disciplinas Encontrada!!!');
}

function disciplinasGetAll(req, res) {
    console.log('Listar Disciplinas {M O D E L}');
    models.getAllDisciplinas(function(err, resposta) {
        console.log('Retorno de Disciplinas {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function disciplinasGetById(req, res) {
    const id = req.params.dis_codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdDisciplinas(id, function(err, resposta) {
        console.log('Retorno de Disciplinas Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function disciplinasAtivoInativo(req, res) {
    const id = req.params.dis_codigo
    res.json('Ativar/Inativar Disciplinas { M O D E L }')    
    console.log('Ativar/Inativar Disciplinas { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdDisciplinas(id, function(err, resposta) {
        console.log('Retorno de Disciplinas Id {M O D E L}', resposta)
        let p_ativo = resposta[0].edt_ativoinativo
        if(err) {
            throw err;
        } else {
            if( p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        // models.ativarInativar(id, p_ativo, function(err, result){
        //     if(err) {
        //         throw err
        //     }
        //     console.log("Registro Atualizado!!!")

        // })
    })
}

