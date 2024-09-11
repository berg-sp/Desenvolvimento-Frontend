# Criando primeiro projeto com angular.

# Configurações iniciais.

### Instlação normal [Global].
    - npm install -g @angular/cli.
    - Obs: as vezes é necesário executar o seguinte comando Set-ExecutionPolicy Unrestricted -Scope CurrentUser (rodar comando pelo porwershell).

### Instalação Máquinas do Instituto Federal (IF).
    - npm install -g @angular/cli.
    - configurar variavel de ambiente.

### Criação da aplicação a angular.
    ng new primeiro-programa-angular --no-standalone.

### Execute aplicação.
    entrar na pasta da aplicação angular.
    ng serve --open [ng s - o].

### Single page application
    Uma Single page Aplication (aplicativo de página única) ( SPA ) é um aplicativo da web ou site que interage com o usuário reescrevendo dinamicamente a página da web atual com novos dados do servidor da web , em vez do método padrão de carregar páginas inteiras novas. O objetivo são transições mais rápidas que fazem o site parecer mais com um aplicativo nativo .

### O que são componentes em angular.
    No Angular, um componente é uma unidade autônoma e reutilizável de uma aplicação que encapsula o HTML, o CSS e a lógica relacionada. Cada componente representa uma parte específica da interface do usuário e interage com outros componentes para construir a aplicação como um todo.
    Referências: https://www.dio.me/articles/vantagens-de-utilizar-componentes-com-angular

    Um componente em angular sempre terá 3 arquivos sendo: html, css, ts.
    Isso pode variar mas em geral são eses 3.

### Como crir um componente.

#### Comandos usados em aula.
    ng generate component components/views/home
    ng generate component components/shared/navbar
    ng g c components/views/login


