# Definindo rotas com Angular Routing

### Criar uma aplicação angular.
    ng new segundo-programa-angular --no-standalone

### Executar a aplicação
    ng serve --open | ng s -o

### Criar componentes
    ng generate component components/view/home --skip-tests
    ng generate component components/view/login --skip-tests | ng g c
    ng g c components/shared/navbar

### ROTAS DOS FRONTEND NÃO SÃO ROTAS DO BACKEND
    [Frontend] /        |   [Backend] /
    [Frontend] /login   |   [Backend] /login-auth