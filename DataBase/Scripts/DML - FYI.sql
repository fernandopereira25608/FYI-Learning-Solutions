USE DATABASE FYI;
GO

INSERT INTO tipoUsuario (titulo)
VALUES ('Administrador'), ('Moderador'),('Cliente')

INSERT INTO usuario (idTipoUsuario,nome,empresa,email,senha)
VALUES (3,'Enivaldo Marcelino dos Santos','','enivaldo@email.com','12345678'),(1,'Peterson Martins','FYI Learning Solutions','petersondopagode@gmail.com','98765432'),(2,'Angela Costa Varej�o','FYI Learning Solutions','varejao6977@hotmail.com','2345meia78')

INSERT INTO curso (nomeCurso,descricao,vagasDisponiveis,vagasPreenchidas,cargaHoraria)
VALUES ('Microsoft Dynamics 365 Fundamentals (CRM)','Este curso fornecer� uma ampla introdu��o aos recursos de envolvimento do cliente do Dynamics 365. Voc� se familiarizar� com o conceito de envolvimento do cliente, bem como cada um dos aplicativos de envolvimento do cliente, incluindo Dynamics 365 Marketing, Dynamics 365 Sales, Dynamics 365 Atendimento ao Cliente, Dynamics 365 Field Service e recursos de gerenciamento de relacionamento com o cliente (CRM) do Dynamics 365',10,70,40),('Microsoft Power Platform Fundamentals','Aprenda o valor comercial e as capacidades do produto da Microsoft Power Platform. Crie Power Apps simples, conecte dados com o Microsoft Dataverse, crie um Power BI Dashboard, automatize processos com Power Automate e crie um chatbot com Power Virtual Agents',35,5,10),('Progamming Microsoft Dynamics For CE','Este curso oferece informa��es detalhadas e interativas sobre como desenvolver extens�es para todas as vers�es do Microsoft Dynamics, com foco em m�todos de extens�o documentados no SDK do Microsoft Dynamics. Ele fornece instru��es sobre o uso de v�rias Opera��es Comuns de Plataforma, sobre como consultar e executar essas opera��es, assim como sobre o desenvolvimento do entendimento dos fluxos de trabalho e da implementa��o do processo comercial. Al�m disso, o curso descreve como usar plug-ins, programa��o de evento de aplicativo, extens�es cliente e recursos da Web. Finalmente, ele inclui uma vis�o geral resumida da integra��o entre o Windows Azure e o Microsoft Dynamics.',30,70,16),('Microsoft Dynamics 365 For CE','Este curso fornece aos participantes o dom�nio sobre todas as funcionalidades nativas da ferramenta nos seus m�dulos de Sales e Customer Service e ainda possibilita que seus participantes conhe�am os recursos de parametriza��o nativos da ferramenta para uma implanta��o.',5,25,20)

INSERT INTO turma(idCurso,nomeTurma)
VALUES (3,'Progamming Microsoft Dynamics For CE - 02/2022 Manh�'),(1,'Microsoft Dynamics 365 Fundamentals (CRM) - 01/2022 Tarde'),(4,'Microsoft Dynamics 365 For CE - 03/2022 Noite'),(2,'Microsoft Power Platform Fundamentals - 04/2022 Pernoite')

INSERT INTO inscricao (idUsuario,idTurma,dataInscricao)
VALUES (1,4, '20210122')