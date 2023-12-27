CREATE TABLE Autor( 
 Id_Autor INT PRIMARY KEY,  
 Nome_Autor INT,  
 DataNascimento_Autor INT 
); 

CREATE TABLE Usuário( 
 Id_Usuario INT PRIMARY KEY,  
 Nome_Usuario INT,  
 DataNascimento_Usuario INT  
); 

CREATE TABLE Livro( 
 Genero_Livro INT,  
 Nome_Livro INT,  
 Id_Livro INT PRIMARY KEY,  
 Id_Autor INT,  
 Ano_Livro DATE  
); 

CREATE TABLE Devolução( 
 Id_Devolucao INT PRIMARY KEY,  
 Id_Livro INT,  
 Id_Usuario INT,  
 Data_Emprestimo INT,  
 Id_Emprestimo INT 
); 

CREATE TABLE Empréstimo( 
 Id_Emprestimo INT PRIMARY KEY,  
 Id_Livro INT,  
 Id_Usuario INT,  
 Data_Emprestimo INT  
); 

ALTER TABLE Livro ADD FOREIGN KEY(Id_Autor) REFERENCES Autor (Id_Autor);
ALTER TABLE Devolução ADD FOREIGN KEY(Id_Livro) REFERENCES Livro (Id_Livro);
ALTER TABLE Devolução ADD FOREIGN KEY(Id_Usuario) REFERENCES Usuário (Id_Usuario);
ALTER TABLE Devolução ADD FOREIGN KEY(Id_Emprestimo) REFERENCES Empréstimo (Id_Emprestimo);
ALTER TABLE Empréstimo ADD FOREIGN KEY(Id_Livro) REFERENCES Livro (Id_Livro);
ALTER TABLE Empréstimo ADD FOREIGN KEY(Id_Usuario) REFERENCES Usuário (Id_Usuario;