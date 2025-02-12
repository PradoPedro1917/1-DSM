const client = require('./db');  // Importa a conexão do banco de dados
const bcrypt = require('bcrypt');

// Função para inserir um usuário
async function insertUser(req, res) {
    const {name, password, mail} = req.body;

    // Gerar o hash da senha com bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 é o fator de salting

    const query = {
        text: 'INSERT INTO users (name, password, mail) VALUES ($1, $2, $3) RETURNING id, name, mail',
        values: [name, hashedPassword, mail],
    };

    try {
        const result = await client.query(query);  // Executa a query
        res.json(result.rows[0]);
    } catch (err) {
        res.json({message: err.message});
    }
}

// Função para validar o login
async function loginUser(req, res) {
    const { mail, password } = req.body;

    // Recuperar o usuário do banco de dados pelo e-mail
    const query = {
        text: 'SELECT id, name, mail, password FROM users WHERE mail = $1',
        values: [mail],
    };

    try {
        const result = await client.query(query);

        // Se o usuário não existir, retornamos um erro
        if (result.rows.length === 0) {
            res.status(400).json({ message: 'E-mail ou senha inválidos' });
        } else {
            const user = result.rows[0];
            // Comparar a senha fornecida com a senha armazenada (utilizando bcrypt)
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                res.status(400).json({ message: 'E-mail ou senha inválidos' });
            } else {
                res.json({
                    id: user.id,
                    name: user.name,
                    mail: user.mail
                });
            }
        }
        
    } catch (err) {
        res.json({ message: err.message });
    }
}

module.exports = { insertUser, loginUser };