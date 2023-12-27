-- Seleção de Dados:
SELECT * FROM transacoes;

-- Renomeando colunas:
SELECT ID_Transacao AS 'ID_Transacao', Data AS 'Data', Valor AS 'Valor' FROM transacoes;

-- Filtragem com a cláusula WHERE:
SELECT * FROM transacoes WHERE Valor > 100.00;

-- Ordenação com a cláusula ORDER BY:
SELECT * FROM transacoes ORDER BY Valor DESC;

-- Agregação com funções SQL:
SELECT AVG(Valor) AS 'Media', MAX(Valor) AS 'Valor_Maximo', MIN(Valor) AS 'Valor_Minimo', 
COUNT(*) AS 'Total_Transacoes' FROM transacoes;

-- Agrupamento com a cláusula GROUP BY:
SELECT Produto, AVG(Valor) AS 'Media_Valor' FROM transacoes GROUP BY Produto;

-- Consulta combinada:
SELECT Categoria, COUNT(*) AS 'Total_Produtos_Vendidos', SUM(Valor) AS 'Valor_Total_Vendas',
AVG(Valor) AS 'Media_Valor_Por_Transacao' FROM transacoes GROUP BY Categoria;

/*
Insights:

- A consulta combinada pode fornecer insights valiosos sobre o desempenho das categorias de 
produtos, identificando aquelas que contribuem significativamente para o valor total 
das vendas.
- A análise de agrupamento por produto permite identificar padrões nos valores médios das 
transações, o que pode ser útil para estratégias de preços e promoções.
- A filtragem por valor ajuda a focar em transações de maior valor, o que pode ser relevante 
para campanhas de marketing direcionadas.
- A ordenação por valor em ordem decrescente destaca as transações de maior impacto 
financeiro.
- As funções de agregação fornecem estatísticas úteis sobre o conjunto de dados, como média, 
máximo, mínimo e total de transações
*/