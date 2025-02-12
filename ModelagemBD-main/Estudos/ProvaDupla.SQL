--Felipe Ribeiro de Lima e Pedro Henrique Prado de Novaes
-- atividade 2 criando a tabela

DROP TABLE IF EXISTS Livros_has_Autores;
DROP TABLE IF EXISTS Autores, Livros;
CREATE TABLE Autores (
  idAutores INTEGER NOT NULL,
  NOME VARCHAR(30) NULL,
  NACIONALIDADE VARCHAR(30) NULL,
  PRIMARY KEY(idAutores)
);

CREATE TABLE Livros (
  ISBN BIGINT NOT NULL,
  TITULO  VARCHAR(255) NULL,
  ANODEPUBLI VARCHAR(4) NULL,
  PRIMARY KEY(ISBN)
);

CREATE TABLE Livros_has_Autores (
  Livros_ISBN BIGINT NOT NULL,
  Autores_idAutores INTEGER NOT NULL,
  PRIMARY KEY(Livros_ISBN, Autores_idAutores)
);

-- Atividade 3 Inserindo autores 

insert into autores(idautores,nome,nacionalidade)
values
(1,'George R. R. Martin', 'Americano'),
(2,'J. R. R. Tolkien', 'Britânico'),
(3,'J. K. Rowling', 'Britânico'),
(4,'Fiódor Dostoiésvski', 'Russo'),
(5,'Miguel de Cervantes', 'Espanhol'),
(6,'Jane Austen', 'Britânico'),
(7,'Gabriel García Márquez', 'Colombiano');

--Inserindo dados da tabela de livros

insert into livros(isbn,titulo,anodepubli)
values
(8556510787,'A Guerra dos Tronos', 1996),
(9788845292613,'O Senhor dos Anéis', 1954),
(8532511015,'Hary Potter e a Pedra Filosofal', 1997),
(8573266465,'Crime Castigo', 1866),
(8532287441,'Dom Quixote', 1605),
(9781428108325,'Orgulho e Preconceito', 1813),
(9788501012074,'Cem Anos de Solidão', 1967);

--Inserir dados na tabela de relacionamento

insert into Livros_has_Autores
values
(8556510787, 1),
(8556510787, 2),
(9788845292613, 2),
(8532511015, 3),
(8573266465, 4),
(8532287441, 5),
(9781428108325, 6),
(9788501012074, 7);

-- Atividade 4 Lista de todos os Registros Armazenados

SELECT 
    livros.isbn AS "ISBN", 
    livros.titulo AS "Título", 
    livros.anodepubli AS "Ano de Publicação", 
    autores.idautores AS "ID", 
    autores.nome AS "Nome", 
    autores.nacionalidade AS "Nacionalidade"
FROM livros, autores, livros_has_autores
WHERE livros.isbn = livros_has_autores.livros_isbn 
  AND autores.idautores = livros_has_autores.autores_idautores

-- Atividade 5 Consultando somente os autores da Guerra dos Tronos
SELECT 
    autores.nome AS "Nome do Autor"
FROM 
    livros, autores, livros_has_autores
WHERE 
    livros.titulo = 'A Guerra dos Tronos'
    AND livros.isbn = livros_has_autores.livros_isbn
    AND autores.idautores = livros_has_autores.autores_idautores;
