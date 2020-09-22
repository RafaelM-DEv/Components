import handleApi from '../../helper/handleApi'

// o 'state' é o nosso 'data' de um componente
const state = {
  todos: [],
  todo: {}
}

// um getter é usado como uma 'computada', seu valor e armazenado em 'cache' e ele recebe o State como seu primeiro Argumento
const getters = {
  todos: state => state.todos,
  todo: state => state.todo
}

// As 'actions' são semelhantes às 'mutations', as diferenças sendo que:
// Em vez de transformar o 'state', as 'actions' cometem 'mutations'.
// As 'actions' podem conter operações assíncronas arbitrárias.
const actions = {
  // get na lista de to-do's
  // vamos usar a desestruturação do 'argumento' para simplificar um pouco o código
  // especialmente quando precisamos chamar o commit muitas vezes
  getTodos ({ commit }) {
    handleApi('getTodos', {
      onSuccess ({ data }) {
        commit('SET_TODOS', data)
        return data
      }
    })
  },

  // para incluirmos um to-do a nossa lista de to-do's precisamos passar nosso objeto(todo) no payload
  setTodo ({ commit }, payload) {
    handleApi('createTodo', {
      payload,
      onSuccess ({ data }) {
        commit('SET_TODO', data)
        return data
      },
      onError (error) {
        console.log(error)
      }
    })
  },

  // para atualizarmos um TODO passamos o objeto completo no nosso payloda para que possa ser substituido
  UPDATE_TODO ({ commit }, payload) {
    handleApi('updateTodo', {
      payload,
      onSuccess ({ data }) {
        commit('UPDATE_TODO', data)
        return data
      }
    })
  },

  DELETE_TODO ({ commit }, id) {
    const todoindex = state.todos.findIndex(todos => todos.id === id)
    handleApi('deleteTodo', {
      id,
      onSuccess ({ data }) {
        commit('DELETE_TODO', todoindex)
        return data
      }
    })
  }

}

// A única maneira de realmente mudar o 'State' em uma 'Store' Vuex é executando atravez de uma 'mutations'

const mutations = {
  // para todos os commits chamamos as 'mutations'

  // nosso mutation ira alterar o state de acordo com o nosso argumento passsado
  SET_TODOS (state, todos) {
    state.todos = todos
  },

  SET_TODO (state, todo) {
    state.todos.push(todo)
    // state.todos.splice(state.todos.lenght - 1, 0, todo)
  },

  UPDATE_TODO (state, payload) {
    const todoindex = state.todos.findIndex(todo => todo.id === payload.id)
    // tip -> O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    state.todos.splice(todoindex, 1, payload)
    // state.todo = payload
  },

  DELETE_TODO (state, todoindex) {
    state.todos.splice(todoindex, 1)
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
