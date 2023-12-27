CREATE DATABASE BlogDB;

CREATE TABLE IF NOT EXISTS Autor(
    AutorID INT PRIMARY KEY,
    NomedoAutor VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Post(
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Conteudo TEXT NOT NULL,
    DatadePublicacao DATE NOT NULL,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

CREATE TABLE IF NOT EXISTS Comentario(
    ComentarioID INT PRIMARY KEY,
    TextodoComentario TEXT NOT NULL,
    DatadoComentario DATE NOT NULL,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);

/*
 Tabela "Autor"
- A coluna AutorID é a chave primária, garantindo unicidade para cada autor.
-  tabela "Post" possui uma chave estrangeira AutorID que referencia a coluna 
AutorID da tabela "Autor". Isso significa que cada autor pode ter zero ou mais posts, 
estabelecendo uma relação de "um autor para muitos posts".

Tabela "Post"
- A coluna PostID é a chave primária, garantindo unicidade para cada post.
- A coluna AutorID é uma chave estrangeira que referencia a coluna AutorID da tabela "Autor", 
estabelecendo a relação de "um post para um autor".

Tabela "Comentario"
- A coluna ComentarioID é a chave primária, garantindo unicidade para cada comentário.
- A coluna AutorID é uma chave estrangeira que referencia a coluna AutorID da tabela "Autor", 
estabelecendo a relação de "um autor para muitos comentários".
- A coluna PostID é uma chave estrangeira que referencia a coluna PostID da tabela "Post", 
estabelecendo a relação de "um post para muitos comentários".
*/