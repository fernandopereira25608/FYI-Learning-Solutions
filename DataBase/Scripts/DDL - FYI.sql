CREATE DATABASE DBFYI;
GO

USE DATABASE DBFYI;
GO

CREATE TABLE tipoUsuario(
idTipoUsuario TINYINT PRIMARY KEY IDENTITY (1,1),
titulo VARCHAR(13) NOT NULL
);

CREATE TABLE usuario(
idUsuario SMALLINT PRIMARY KEY IDENTITY (1,1),
idTipoUsuario TINYINT FOREIGN KEY REFERENCES tipoUsuario(idTipoUsuario),
nome VARCHAR(50) NOT NULL,
empresa VARCHAR(50),
email VARCHAR(266) NOT NULL,
senha VARCHAR (70) NOT NULL
);

CREATE TABLE categoria(
idCategoria TINYINT PRIMARY KEY IDENTITY (1,1),
titulo  VARCHAR(30)
);

CREATE TABLE curso(
idCurso TINYINT PRIMARY KEY IDENTITY (1,1),
idCategoria TINYINT FOREIGN KEY REFERENCES categoria(idCategoria),
nomeCurso VARCHAR(50) NOT NULL,
descricao VARCHAR(2048) NOT NULL,
vagasDisponiveis TINYINT NOT NULL,
vagasPreenchidas TINYINT NOT NULL,
cargaHoraria TINYINT NOT NULL,
);

CREATE TABLE turma(
idTurma TINYINT PRIMARY KEY IDENTITY (1,1),
idCurso TINYINT FOREIGN KEY REFERENCES curso(idCurso),
nomeTurma VARCHAR(70) NOT NULL
);

CREATE TABLE inscricao(
idInscricao INT PRIMARY KEY IDENTITY (1,1),
idUsuario SMALLINT FOREIGN KEY REFERENCES usuario(idUsuario),
idTurma TINYINT FOREIGN KEY REFERENCES turma(idTurma),
dataInscricao DATE
);
