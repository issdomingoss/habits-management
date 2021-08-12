# estrutura do projeto

## src:

### assets

Contém todas as imagens utilizadas no projeto.

### Components

Contém os componentes utilizados no projeto.

### Pages

Contém as páginas utilizadas no projeto (home,login,dashboard...).

### Services

Responsável pela criação de uma instância da api.

### Porviders

#### `HabitsProvider`:

- **habits**: um array com todos os hábitos do usuário.

- **createHabit(habit)**: recebe um objeto como parâmetro e cria um novo hábito a partir deste objeto.

_Essa função atualiza o **habits**_

- **updateHabit(id, updatedItens)**: recebe o id do habito que será atualizado e um objeto com os campos que serão alterados.

_Essa função atualiza o **habits**_

- **removeHabit(id)**: recebe o id do habito que será removido.

_Essa função atualiza o **habits**_

- **loadHabits**: carrega os hábitos do usuário que estão na api para a variável **habits**.

### Sytles

Armazena o arquivo global.js que contém a estilização global (reset, cores utilizadas ...).

### Routes

Contém o arquivo que faz o gerenciamento das rotas entre as páginas.

## Bibliotecas adicionadas

### `styled-components`

### `axios`

### `yup`

### `react-hook-form`

### `@hookform/resolvers`

### `react-router-dom`

### `react-toastify`

### `react-icons`

### `jwt-decode`

# Documentação

Acesse: [link](https://www.notion.so/Gerenciador-de-H-bitos-d31174c9b1cf434fa45b7fd8ab6ae539)
