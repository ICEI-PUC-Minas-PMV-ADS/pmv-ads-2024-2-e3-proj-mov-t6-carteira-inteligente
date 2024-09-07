# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

As especificações do projeto foram desenvolvidas através de análise detalhada das necessidades dos usuários baixo. As informações coletadas abaixo foram criadas com base em dados reais de personas previamente identificadas. Os dados foram coletados através de entrevista realizadas pelos membros da equipe de desenvolvimento.

## Personas

|NOME  | PERFIL  |OBJETIVOS | FRUSTRAÇÃO | MOTIVAÇÕES | 
| ------------ | -------------- |------------ | ------------ | -------- | 
| *Pedro Mendes* | Idade: 32 anos Ocupação: Engenheiro e microempreendedor no ramo de roupas esportivas.| Pretende se casar e construir uma família, mas reconhece a necessidade de alcançar estabilidade financeira para realizar esse plano.| Pedro desistiu da bolsa de investimentos por falta de confiança e tem dificuldades em gerenciar suas finanças devido ao uso de vários aplicativos simultaneamente, dificultando a visualização de todas suas rendas e despesas | Pedro quer se preparar financeiramente para o casamento e a família, buscando investimentos seguros e uma solução que unifique os dados de suas finanças.
| *Lucas Hipolito* | Idade: 34 anos Ocupação:Trader-Esportivo e investidor Crypto.| Busca criar fontes de renda estáveis e melhorar a administração de seu dinheiro, especialmente para garantir que seus lucros mensais sejam superiores aos seus gastos.| Lucas possui fontes de renda instáveis através das apostas esportivas e investimento em criptomoedas, dificultando o equilíbrio entre ganhos e despesas e por conta disso ficando no vermelho em alguns meses, exigindo portanto, melhor controle financeiro. | Lucas busca uma ferramenta para visualizar seus dados financeiros, gerir melhor suas finanças, identificar meses de necessidade de maior controle de gastos e melhorar seu pode de decisão nos investimento.
| *Junia Cristina* | Idade: 46 anos Ocupação: Faxineira.| Tem como sonho garantir a graduação de suas filhas, apesar das dificuldades financeiras.| Júnia sustenta a casa com uma renda modesta, sendo necessário a constribuição financeira de suas filhas, porém, tem dificuldade em organizar o orçamento mensal. | Júnia quer um futuro melhor para suas filhas e precisa de uma ferramenta simples, visto que não possui familiaridade com tecnologia, e que a ajude a organizar as finanças do mes e que os dados possam ser compartilhados com suas filhas para que juntas controlem os gastos do mês.
| *Rafael Silva Chavier* | Idade: 21 anos Ocupação: Estudante - Estagiando.|  Tornar-se um desenvolvedor e empresário.| Rafael quer investir em conhecimento, mas não sobra dinheiro ao fim do mês. Encontra dificuldades para administrar seu salário. | Rafael quer melhorar sua gestão financeira para investir em educação, e busca uma ferramenta melhor que o Excel para gerenciar os ganhos e gastos do mês.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Pedro Mendes | Unificar todas as informações bancárias em um único lugar  | Para facilitar a visualização e gestão centralizada das finanças.|
| Pedro Mendes | Organizar as finanças para garantir estabilidade | Para se preparar para o casamento futuramente família.|
| Pedro Mendes | Melhor visualização de seus investimentos em ativos | Para que se organize melhor a cada aporte |
| Lucas Hipolito | Quer uma maneira facil de acompanhar seus rendimentos mensais | Para entender melhor seu fluxo de caixa mensal.|
| Lucas Hipolito | Precisa identificar os meses em que suas despesas superam os ganhos | Para cortar o que precisa ser cortado ou diminuir em suas despesas |
| Lucas Hipolito | Quer visualizar seus investimentos em criptomoedas e futuramente ações  | Para acompanhar o desempenho e tomar decisões mais informadas. |
| Lucas Hipolito | Precisa de uma visão clara de todas as suas finanças em um único lugar | Para facilitar o controle |
| Junia Cristina | Registrar o orçamento da casa, entradas e saídas, incluindo os de suas filhas | Para no fim do mês ficar no positivo |
| Junia Cristina | Identificar onde está gastando mais e se é possível realizar cortes ou diminuições se possível | Para equilibrar as contas no fim do mês |.
| Junia Cristina | Júnia precisa de uma ferramenta que possa ser facilmente compartilhada com suas filhas | Algo que todas possam ver e se estimular na ajuda do controle das finanças |
| Junia Cristina | Júnia quer um aplicativo simples e acessível | Porque não possui experiência com tecnologia |
| Rafael Silva Chavier | Rafael precisa organizar suas despesas de forma eficiente | para garantir que sobre algum dinheiro no final do mês.|
| Rafael Silva Chavier | Rafael quer uma ferramenta mais intuitiva que o Excel | Para facilitar seu gerenciamento |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

|  INDICADOR  | OBJETIVOS | DESCRIÇÃO | CÁLCULO | FONTE DE DADOS | PERSPECTIVA | 
| ------------ | -------------- |------------ | ------------ | -------- | -------- | 
| Total de Cadastros | Avaliar a quantiade de usuários do aplicativo | Analisar o total de cadastros realizados | Crescimento do aplicativo | Plataforma em que o aplicativo foi cadastrado | Alcance e usuabilidade do aplicativo|
| Total de rendas familiares cadastradas | Analise de quão intuitivo está o processo de cadastro de dados | Verficar se os usuários estão cadastrando seus dados | crescimento mensal de cadastro | servidor do aplicativo | Melhoria na intuitividade do aplicativo e desenvolvimento de melhor instruções para o cadastro |
| Avaliação do aplicativo | Entender se o usuário está satisfeito com o aplicativo | Mede de 1 a 5 a satisfação do cliente | Quantidade de notas totais/ por quantidade de avaliações realizadas | Contador da plataforma que suporta o aplicativo | Buscar formas de melhorar o aplicativo |
| Total de Reclamações | Avaliar a quantidade de relamações | avaliar a quantidade de reclamações | Quantidade de usuários/reclamações | Reclame aqui | Compreensão e melhoria dos motivos pelos quais ocorreram as reclamações |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre e monitore todas as suas fontes de renda, incluindo trabalho, investimentos e empreendimentos.| ALTA | 
|RF-002| Permitir o registro e a categorização detalhada das despesas pessoais.| ALTA |
|RF-003| Alertar ao usuário quando os limites estabelicidos nas despesas forem ultrapassados| ALTA |
|RF-004| Permitir que o usuário faça uma Copia dos cadastros já realizados.| ALTA |
|RF-005| Permitir que o usuário faça alterações aos dados já cadastrados.| ALTA |
|RF-006| Possibilitar que os dados cadastrados sejam compartilháveis.| ALTA |
|RF-007| Alertar o usuário sobre desequilíbrios em sua carteira de investimentos com base em um planejamento pré-definido.| MÉDIA |
|RF-008| Oferecer uma funcionalidade de análise setorial para divisão de investimentos por setores econômicos.| MÉDIA |
|RF-009| Alertar o usuário sobre desequilíbrios em sua carteira de investimentos com base em um planejamento pré-definido.|MÉDIA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|--------------------------------------|----|
|RNF-001| O sistema deve ser responsivo e funcionar corretamente em dispositivos móveis (IOS E Android).| ALTA | 
|RNF-002| O sistema deve garantir a segurança dos dados financeiros do usuário.| ALTA |
|RNF-003| O sistema deve garantir a segurança dos dados financeiros do usuário.| ALTA |
|RNF-004| O sistema deve ser capaz de escalar para suportar um grande número de usuários simultâneos sem perda significativa de desempenho. | ALTA | 
|RNF-005| O sistema deve ter disponibilidade de 99,9%, com um plano de recuperação de falhas que garanta a continuidade do serviço. | ALTA |
|RNF-006| As operações do sistema, como cadastros e geração de relatórios, devem ser processadas em no máximo 3 segundos. | MEDIA |
|RNF-007| O sistema deve suportar diferentes perfis de usuário, permitindo personalização de acordo com as necessidades individuais. | MEDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

![diagrama_casos_de_uso](https://github.com/user-attachments/assets/205a1c8f-7880-41c1-84fd-0613d07746c5)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.


| Requisito                          | RF-001 | RF-002 | RF-003 | RF-004 | RF-005 | RF-006 | RF-007 | RF-008 | RF-009 | RNF-001 | RNF-002 | RNF-003 | RNF-004 | RNF-005 | RNF-006 |
|------------------------------------|--------|--------|--------|--------|--------|--------|--------|--------|--------|---------|---------|---------|---------|---------|---------|
| **RF-001** Cadastro e monitoramento de fontes de renda |        |        |        |        |        |        |        |  X     |  X     |         |         |         |         |         |         |
| **RF-002** Registro e categorização de despesas       |        |        |  X     |        |        |        |        |  X     |  X     |         |         |         |         |         |         |
| **RF-003** Alertas sobre limites de despesas          |        |  X     |        |        |        |        |        |  X     |        |         |         |         |         |         |         |
| **RF-004** Alertas sobre desequilíbrios de investimentos |        |        |        |        |  X     |  X     |        |        |        |         |         |         |         |         |         |
| **RF-005** Análise setorial de investimentos          |        |        |        |  X     |        |  X     |        |        |        |         |         |         |         |         |         |
| **RF-006** Alertas de desequilíbrios em investimentos |        |        |        |        |  X     |        |        |        |        |         |         |         |         |         |         |
| **RF-007** Cópia de cadastros                         |  X     |  X     |        |        |        |        |        |        |        |         |         |         |         |         |         |
| **RF-008** Alteração de dados                         |  X     |  X     |  X     |        |        |        |        |        |        |         |         |         |         |         |         |
| **RF-009** Compartilhamento de dados                  |  X     |  X     |        |        |        |        |        |        |        |         |         |         |         |         |         |
| **RNF-001** Responsividade do sistema                 |        |        |        |        |        |        |        |        |        |  X      |         |         |         |         |         |
| **RNF-002** Processamento rápido                      |        |        |        |        |        |        |        |        |        |         |  X      |  X      |         |         |         |
| **RNF-003** Segurança dos dados                       |        |        |        |        |        |        |        |        |        |         |         |         |  X      |         |         |
| **RNF-004** Suporte a diferentes perfis de usuário    |  X     |  X     |        |        |        |        |        |        |        |         |         |         |  X      |         |         |
| **RNF-005** Escalabilidade                            |        |        |        |        |        |        |        |        |        |         |         |         |         |  X      |         |
| **RNF-006** Alta disponibilidade                      |        |        |        |        |        |        |        |        |        |         |         |         |         |         |  X      |


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![image](https://github.com/user-attachments/assets/1aa8d608-78a7-4e17-8785-581f07de02b3)


O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

|Função |   |  |
| ------------ | -------------- |------------ |
| Produt Owner | Henrique Caramez |
| Scrum Master | Gabriel Matozinho Pereira |
| Desenvolvedores | Nico Rocha da Costa | José Lucas dos Santos |
| Realização de testes | Bernardo Alves Sirqueira | Breno Vinícius Oliva Flor |
| Correção de falhas | Guilherme Patrick Santos Alves | 

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

| Recursos Necessários | Valores  |
| ------------ | -------------- |
| Recursos Humanos | R$ 90.000,00 |
| Serviços de nuvem | R$ 5.000,00 |
| Seviços de Atendimento | R$ 8.000,00 |
| Servidor e Rede | R$ 25.000,00 |
| Aluguel de Ambiente fisico | R$ 5.000,00 |
| Despesas do Ambiente fisico | R$ 2.000,00 |
| Hardware | R$ 28.000,00 |
| Software | R$ 15.000,00 |
| TOTAL | R$ 178.000,00 |
