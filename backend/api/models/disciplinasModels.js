

const conexao = require('../../config/conexao.js');

module.exports = {
    getAllDisciplinas,
    getByIdDisciplinas,
    // ativarInativar,
    editarDisciplinas,
    novoDisciplina           
}

function getAllDisciplinas (callback) {

    conexao.query('select * from disciplina', callback)
 
}

function getByIdDisciplinas (id, callback) {
    conexao.query('select * from disciplina WHERE dis_codigo = ' + id, callback)
}

// function ativarInativar (id, ativo, callback) {
//     console.log('disciplina Ativando/Inativando Registro ' + id + " - Status: " + ativo)

//     const m_sql = "update disciplina set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

//     conexao.query( m_sql, callback );

//     console.log('Retornando { M O D E L } disciplina Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
// }

function novoDisciplina(dados, callback) {
    var msql = 'INSERT INTO disciplina SET ? ';
 	conexao.query(msql, dados, callback);
}

function editarDisciplinas(dados, callback) {
    console.log('Estou alterando o disciplina { M O D E L } .......' + dados);

    var msql = "UPDATE disciplina SET dis_nome = '" + dados.dis_nome + 
    "' , dis_area = '" + dados.dis_area +     
    "' , dis_aulas         = '" + dados.dis_aulas + 
    "' , dis_local     = '" + dados.dis_local +
    "'  WHERE dis_codigo  = '" + dados.dis_codigo + "'";
    ;


    console.log(msql);
    
    conexao.query(msql, callback);
}



