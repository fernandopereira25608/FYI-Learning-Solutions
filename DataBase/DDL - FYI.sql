CREATE DATABASE FYI;
GO

USE DATABASE FYI;
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

CREATE TABLE curso(
idCurso TINYINT PRIMARY KEY IDENTITY (1,1),
nomeCurso VARCHAR(50) NOT NULL,
descricao VARCHAR(2048) NOT NULL,
vagasDisponiveis TINYINT NOT NULL,
vagasPreenchidas TINYINT NOT NULL,
cargaHoraria TINYINT NOT NULL,
);

CREATE TABLE inscricao(
idInscricao INT PRIMARY KEY IDENTITY (1,1),
idUsuario SMALLINT FOREIGN KEY REFERENCES usuario(idUsuario),
idCurso TINYINT FOREIGN KEY REFERENCES curso(idCurso),
dataInscricao DATE
);