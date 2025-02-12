-- Exercício 2 -- 

DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS filmes;
DROP TABLE IF EXISTS assistidos;

CREATE TABLE usuarios (
  cpf BIGINT NOT NULL,
  nome VARCHAR(70) NOT NULL,
  celular VARCHAR(15) NOT NULL,
  PRIMARY KEY(cpf)
);

CREATE TABLE filmes (
  idfilmes INTEGER NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  genero VARCHAR(50) NOT NULL,
  PRIMARY KEY(idfilmes)
);

CREATE TABLE assistidos (
  usuarios_cpf BIGINT NOT NULL,
  filmes_idfilmes INTEGER NOT NULL,
  PRIMARY KEY(usuarios_cpf, filmes_idfilmes)
);

-- Exercicio 3 --

INSERT INTO usuarios (cpf, nome, celular)
VALUES 
('12345678900', 'Ana Oliveira', '(11)98765-4321'),
('98765432100', 'João Silva', '(21)91234-5678'),
('45678912300', 'Maria Santos', '(31)99876-5432'),
('65432198700', 'Pedro Costa', '(41)97654-3210');

INSERT INTO filmes (idfilmes, titulo, genero)
VALUES 
('101', 'Vingadores: Ultimato', 'Ação'),
('102', 'Interestelar', 'Ficção Científica'),
('103', 'O Senhor dos Anéis', 'Fantasia'),
('104', 'Matrix', 'Ficção Científica');

INSERT INTO assistidos (usuarios_cpf, filmes_idfilmes)
VALUES 
('12345678900', '101'),
('12345678900', '103'),
('98765432100', '102'),
('98765432100', '104'),
('45678912300', '103'),
('45678912300', '104'),
('65432198700', '101');

-- Exercicio 4 --
 
SELECT 
usuarios.cpf as "CPF",
usuarios.nome as "Nome",
usuarios.celular as "Celular",
filmes.idfilmes as "ID_Filme",
filmes.titulo as "Titulo",
filmes.genero as "Genero"
from usuarios, filmes, assistidos
where filmes.idfilmes = assistidos.filmes_idfilmes
and usuarios.cpf=assistidos.usuarios_cpf

-- Exercicio 5 --

SELECT 
	usuarios.nome as "Nome", filmes.titulo AS "Título"
FROM 
    usuarios, filmes, assistidos
WHERE 
    filmes.titulo = 'O Senhor dos Anéis'
	AND filmes.idfilmes = assistidos.filmes_idfilmes
    AND usuarios.cpf = assistidos.usuarios_cpf;
