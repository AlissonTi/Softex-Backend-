-- 1. Inserção de Dados
--- Inserção de autores
INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES (1, 'Alisson', 'Brasileiro');
INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES (2, 'Emanuel', 'Brasileiro');
INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES (3, 'Elias', 'Italiano');

--- Inserção de livros
INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES (1, 'Dias de Luta', 2020, 1);
INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES (2, 'Um lugar silencioso', 2018, 2);
INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES (3, 'Harry Potter', 2019, 1);
INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES (4, 'The Job', 2021, 3);
INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES (5, 'Facebook', 2017, 2);

-- 2. Consulta simples:
--- Lista todos os autores e seus livros associados
SELECT Autores.Nome, Livros.Titulo FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 3. Consulta com INNER JOIN:
--- Detalhes dos livros e seus autores correspondentes usando INNER JOIN
SELECT Autores.Nome, Livros.Titulo, Livros.AnoPublicacao
FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 4. Consulta com LEFT JOIN:
--- Exibe todos os autores, independentemente de terem livros associados. Inclui informações dos livros, se disponíveis.
SELECT Autores.Nome, Livros.Titulo, Livros.AnoPublicacao
FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- 5. Consulta com filtro por nacionalidade:
--- Lista autores e seus livros, restrito a uma nacionalidade específica (ex: 'Nacionalidade2')
SELECT Autores.Nome, Livros.Titulo
FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Brasileiro';

-- 6. Consulta agregada:
--- Conta quantos livros cada autor escreveu
SELECT Autores.Nome, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;


