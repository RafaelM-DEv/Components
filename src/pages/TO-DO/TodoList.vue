<template>
  <q-page class="q-pa-md row justify-center bg-grey-9">
    <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" rel="stylesheet"/>
    <div class="column col-8 q-px-xl bg-grey-8 shadow-9">
      <div class="row justify-center">
        <h5 class="text-uppercase text-bold text-white font ">TO-DO List</h5>
      </div>
      <div class="row justify-center">
        <div class="col-12 q-mt-lg"><SetData /></div>
      </div>
      <!-- lista de tarefas -->
      <div class="q-mt-md">
        <div class="row justify-center" v-for="(item, index) in todos" :key="index">
          <div v-if="!item.done" class="col-12 shadow-2 flex justify-between q-my-sm q-py-sm bg-yellow-9 animate__animated animate__fadeInDown" style="border-radius: 5px">
            <div class="text-bold q-ml-sm text-white self-center">
            {{ item.Text }}
            </div>
            <div class="row">
              <div>
                <q-btn class="q-mr-sm q-ml-sm" color="white" flat dense round icon="done" @click="isDone(item)" />
              </div>
              <div>
                <DeleteData  class="q-mr-sm" :id="item.id"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- lista de concluidos -->
      <div >
        <div class="row justify-center " v-for="(item, index) in todos" :key="index">
          <div v-if="item.done" class="col-12 shadow-2 flex q-my-sm justify-between q-py-sm bg-grey-5  animate__animated animate__bounceIn" style="border-radius: 5px">
            <div class="text-bold text-black self-center text-strike q-ml-sm">
            {{ item.Text }}
            </div>
            <div class="row">
              <div>
                <DeleteData  class="q-mr-sm" :id="item.id"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.bgcolor {
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 17%, rgba(255,0,191,1) 100%);
}

.font {
  font-family: 'Do Hyeon', sans-serif;
}
</style>

<script>
import SetData from '../../components/SetData'
import DeleteData from '../../components/DeleteData'
import { mapActions, mapGetters } from 'vuex'

export default {

  // tip -> O mapGetters simplesmente mapeia getters de armazenamento para propriedades locais computadas
  computed: {
    ...mapGetters('todo', [
      'todos'
    ])
  },

  components: {
    SetData,
    DeleteData
  },

  data () {
    return {
      list: []
    }
  },

  created () {
    this.getTodos()
  },

  methods: {
    ...mapActions('todo', [
      'getTodos',
      'UPDATE_TODO'
    ]),

    isDone (model) {
      model.done = true
      this.UPDATE_TODO(model)
    }
  }
}
</script>
