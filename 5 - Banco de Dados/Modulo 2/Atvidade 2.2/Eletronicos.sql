-- Inserts
INSERT INTO Produtos (ProdutoID, NomedoProduto, Preço, QuantidadeemEstoque) VALUES (1, "Smartphone", 799.99, 20)

INSERT INTO Produtos (ProdutoID, NomedoProduto, Preço, QuantidadeemEstoque) VALUES (2, "Tablet",349.99, 10)

INSERT INTO Produtos (ProdutoID, NomedoProduto, Preço, QuantidadeemEstoque) VALUES (3, "Fone de Ouvido", 49.99, 50)

-- Update
UPDATE Produtos SET QuantidadeemEstoque, Preço = 849,99 = 25 WHERE ProdutoID = 1 

UPDATE Produtos SET QuantidadeemEstoque = QuantidadeemEstoque - 5 WHERE ProdutoID = 2;

UPDATE Produtos SET QuantidadeemEstoque =  QuantidadeemEstoque - 10 WHERE ProdutoID = 3;
