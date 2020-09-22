<template>
<!-- TODO criar um formulário -->
 <q-form class="q-gutter-md">
    <q-input color="white" bg-color="blue-9" label-color="white" clearable standout v-model="todo.Text" label="Adicionar tarefa" >
       <template v-slot:after>
          <q-btn :disable="todo.Text === null" round dense color="white" class="bg-blue-9" @click="onSubmit()" icon="add" />
        </template>
    </q-input>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      todo: {
        Text: '',
        done: false
      }
    }
  },

  methods: {
    ...mapActions([
      'setTodo'
    ]),

    async onSubmit () {
      // TODO tratar o valor e se for nulo jogar o erro
      try {
        const response = await this.setTodo(this.todo)
        if (response !== null) {
          this.todo.Text = null
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
