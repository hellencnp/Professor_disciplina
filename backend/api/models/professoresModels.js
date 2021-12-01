const conexao = require('../../config/conexao.js');

module.exports = {
    getAllProfessores,
    getByIdProfessores,
    // ativarInativar,
    editarProfessores,
    novoProfessor            
}

function getAllProfessores (callback) {

    conexao.query('select * from professor', callback)
 
}

function getByIdProfessores (id, callback) {
    conexao.query('select * from professor WHERE pro_codigo = ' + id, callback)
}

// function ativarInativar (id, ativo, callback) {
//     console.log('Professores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

//     const m_sql = "update professores set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

//     conexao.query( m_sql, callback );

//     console.log('Retornando { M O D E L } Professores Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
// }

function novoProfessor(dados, callback) {
    var msql = 'INSERT INTO professor SET ? ';
     
	conexao.query(msql, dados, callback);
}

function editarProfessores(dados, callback) {
    console.log('Estou alterando o professores { M O D E L } .......' + dados);

    var msql = "UPDATE professor SET pro_nome = '" + dados.pro_nome + 
    "' , pro_apelido = '" + dados.pro_apelido +     
    "' , pro_celular      = '" + dados.pro_celular + 
    "' , pro_cpf         = '" + dados.pro_cpf + 
    "' , pro_formacao     = '" + dados.pro_formacao + 
    "' , pro_anonascimento    = '" + dados.pro_anonascimento +
    "'  WHERE pro_codigo  = '" + dados.pro_codigo + "'";
    


    console.log(msql);
    
    conexao.query(msql, callback);
}

