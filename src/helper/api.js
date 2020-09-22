import axios from 'axios'

// definir uma URL Base

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  // GET TO-DOS
  getTodos () {
    return axios.get('/todos')
  },
  // GET TO-DO
  getTodo (id) {
    return axios.get(`todos/${id}`)
  },
  // DELETE TO-DO
  deleteTodo (id) {
    return axios.delete(`todos/${id}`)
  },
  // PUT TO-DO
  updateTodo (todo) {
    return axios.put(`todos/${todo.id}`, todo)
  },
  // POST TO-DO
  createTodo (todos) {
    return axios.post('/todos', todos)
  }
}
