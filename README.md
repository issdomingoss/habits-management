# Estrutura do projeto

## src:

- #### assets

Contém todas as imagens utilizadas no projeto.

- #### Components

Contém os componentes utilizados no projeto.

- #### Pages

Contém as páginas utilizadas no projeto (home,login,dashboard...).

- #### Services

Responsável pela criação de uma instância da api.

- #### Sytles

Armazena o arquivo global.js que contém a estilização global (reset, cores utilizadas ...).

- #### Routes

Contém o arquivo que faz o gerenciamento das rotas entre as páginas.

- #### Porviders

Contém as variáveis e funções globais.

## Bibliotecas adicionadas

- #### `styled-components`

- #### `axios`

- #### `yup`

- #### `react-hook-form`

- #### `@hookform/resolvers`

- #### `react-router-dom`

- #### `react-toastify`

- #### `react-icons`

- #### `jwt-decode`

# Documentação

Acesse: [link](https://www.notion.so/Gerenciador-de-H-bitos-d31174c9b1cf434fa45b7fd8ab6ae539)

## Porviders

#### `HabitsProvider`:

- **getToken(token)**: pega o token e adciona ao estado token por setToken(token)

- **habits**: um array com todos os hábitos do usuário.

- **createHabit(habit)**: recebe um objeto como parâmetro e cria um novo hábito a partir deste objeto.

```
//Exemplo:

const habit = {
    title: "Calistenia tarde (15 minutos)",
    category: "Sáude",
    difficulty: "díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
  };

  createHabit(habit)
```

_Essa função atualiza o **habits**_

- **updateHabit(id, updatedItens)**: recebe o id do habito que será atualizado e um objeto com os campos que serão alterados.

```
//Exemplo:

const hbt = {
    frequency: "Diária",
    achieved: true,
    how_much_achieved: 100,
  };

  updateHabit(649,hbt)
```

_Essa função atualiza o **habits**_

- **removeHabit(id)**: recebe o id do habito que será removido.

_Essa função atualiza o **habits**_

- **loadHabits()**: carrega os hábitos do usuário que estão na api para a variável **habits**.

#### `GoalsProvider`:

- **createGoal(goal)**: recebe um objeto como parâmeto e cria uma nova meta a partir dele.

```
//Exemplo:

const newGoal = {
  "title": "nova meta",
  "difficulty": "Díficil",
  "how_much_achieved": 100,
	"achieved": false,
  "group": 509         //id do grupo
}

  createGoal(newGoal) //é criada uma nova meta direto na api

```

- **updateGoal(goal_Id,updatedItens)**: recebe o id da meta que será atualizada e um objeto com os itens que serão alterados.

```
//Exemplo:

const newItens = {
  "difficulty": "Díficil",
  "how_much_achieved": 100,
	"achieved": true,
}

  updateGoal(1995,newItens)

```

- **removeGoal(goal_Id)**: recebe o id de uma meta e remove ela a partir deste id.

- **getGoal(goal_Id)**: pega uma meta específica a partir do id dela e armazena em **goal**.

- **goal**: State que recebe o resultado da última chamada de **getGoal(goalId)**.

**ps.**:_O valor de **goal** está com um atraso devido a espera da resposta da api. Se usar `getGoal`, verifique se o state **goal** já está com o valor atual, caso contrário, faça uma nova chamada de **goal**_.

#### `ActivitiesProvider`:

- **createActivity(newActivity)**: recebe um objeto como parâmetro e cria uma nova atividade a partir dele.

```
//Exemplo:

const ativid = {
    title: "Testar API",
    realization_time: "2021-03-10T15:00:00Z",
    group: 509,
  };

  createActivity(ativid);

```

- **updateActivity(activity_ID, updated_Item)**: recebe um id da atividade que será atualizada e um objeto com os itens que serão atualizados

```
//Exemplo:

const upd_Item = {
    title: "Crossfit Atualizado",
  };

  updateActivity(2218, upd_Item);

```

- **removeActivity(activity_ID)**: remove uma atividade especificada usando seu id.

- **getActivity(activity_ID)**: pega uma atividade específica a partir do seu id e armazena em **Activity**.

- **Activity**: State que recebe o resultado da última chamada de **getActivity(activity_ID)**.

**ps.**:_O valor de **Activity** está com um atraso devido a espera da resposta da api. Se usar `getActivity`, verifique se o state **Activity** já está com o valor atual, caso contrário, faça uma nova chamada de **Activity**_.
