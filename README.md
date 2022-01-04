# Instruções

- Você deve criar uma aplicação front-end utilizando angular na versão 13 ou superior;
- Utilize **boas práticas** de desenvolvimento e **componentização**. Essa é sua oportunidade de demonstrar suas habilidades;
- Não nos importamos se a solução estiver **incompleta**, estamos interessados em ver a construção da sua solução;
- Não é obrigatório seguir fielmente as cores e icones do guia (veja no final do teste), mas é importante seguir a mesma estrutura;
- Você pode utilizar qualquer framework ou componente de terceiros que desejar;

# GitHub

- Faça um *fork* do projeto no GitHub;
- Adicione @muriloecfaria como um colaborador do seu *fork*. Você pode facilmente fazer isso em https://github.com/`seu-usuario`/angular-test
/settings/collaboration;
- Quando iniciar o teste, faça um *commit* vazio com a mensagem `iniciando teste` e quando finalizar, faça um *commit* com a mensagem `finalizando teste`;
- Faça vários *commits* com o objetivo de demonstrar a construção da solução;
- Não use *branches*;
- Tente não gastar mais do que 4 horas para finalizar o teste;

-------------------------------------------------------------

# Teste

**API:** https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer


**1 - Construa uma interface que liste todos os developers e seus dados conforme a API acima;**

    
**2 - Agora você deve permitir que um novo developer seja incluído;**

**Endpoint:** /developer **(POST)**

Informações:

- O campo Id é gerado automaticamente pela API

- Exemplo Payload:
{
  "name": "Teste Gobuyer *SeuNome*",
  "avatar": "https://gobuyer.com.br/sso/assets/images/logos/logo-gobuyer.png"
}

**3 - Agora você deve criar uma nova interface para edição dos dados do developer;**

**Endpoint:** /developer/:id **(PUT)**

Informações:

- Payload igual ao de inclusão
    
**4 - Agora você deve permitir que um developer seja excluído;**

**Endpoint:** /developer/:id **(DELETE)**

Informações:

- Atualizar a tela de listagem após a exclusão



***EXTRA***

Será considerado um diferencial se você fizer tratamentos de erros, falhas de rede e indicadores de carregamento para melhorar a usabilidade do usuário.
