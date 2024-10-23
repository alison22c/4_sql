const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'usr_edutec_22c', // Um usuário do banco. Ex: user 
    password: 'p@ssW0rd', // A senha do usuário. Ex: user123
    database: 'db_edutec_22c' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

const email = 'astro.gilda@gmail.com';

con.query('SELECT * FROM usuario WHERE email = ? AND bloqueado = ?', [email, 'N'], (err, rows) => {
    if (err) throw err

    console.log('Usuarios: ', rows, '\n\n')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})