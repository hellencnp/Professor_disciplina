const mysql = require('mysql2');
const database = 'dados212d'

// instancias objeto de acesso ao banco de dados

const conexao = mysql.createConnection({
    user: 'root',
    password: '291216Ms*',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if(err) {
        console.log('Erro ao conectar no MySQL ', err)
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!');
})
console.log('\nConexão estabilizada com sucesso!!!');
module.exports = conexao;

