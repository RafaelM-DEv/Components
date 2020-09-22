<template>
   <q-page class="q-pa-md fit row justify-center bg-grey-8">
   <div class="col-8 bg-grey-1 q-px-xl shadow-9">
    <h5>Diretivas e Mixing</h5>
    <div>
      <h5>Diretivas</h5>
      <div>
        <p>Diretivas são basicamente como atributos HTML que são adicionados dentro de modelos. Todos começam com v-, para indicar que é um atributo especial do Vue.</p>
      </div>
      <div>
        <div class="text-weight-bolder q-mt-md ">> v-text</div>
        <div class="q-mb-sm  q-mt-md bg-grey-4" v-text="'v-text'" />
        <span v-text="text"/>
        <div class="q-mt-md bg-grey-4" v-text="'<span v-once>{{ name }}</span>'"/>
      </div>
      <div>
         <div class="text-weight-bolder q-mt-md ">> v-once</div>
         <div class="q-mt-md bg-grey-4" v-text="'v-once'"/>
         <div class="q-pt-md" v-text="onceText" />
         <div class="q-mt-md bg-grey-4" v-text="'<span v-once>{{ name }}</span>'"/>
      </div>
      <div>
        <div class="text-weight-bolder q-mt-md ">> v-html</div>
        <div class="q-mt-md bg-grey-4"/>
      </div>
    </div>
    <h5>Mixing</h5>
    <p>Visualize o console</p>
  </div>
  </q-page>
</template>

<script>
import { exampleMixin } from '../pages/Mixin/exampleMixin.js'
export default {
  mixins: [exampleMixin],
  created () {
    console.log('Eu sou dessa página')
  },

  data () {
    return {
      text: ' Em vez de usar a interpolação, você pode usar a diretiva v-text. Ele executa o mesmo trabalho:',
      onceText: 'Você sabe como o {{name}} se liga à propriedade name nos dados do componente.Qualquer mudança na propriedade name, o Vue atualizará o valor representado no navegador.A menos que você use a diretiva v-once, que é basicamente como um atributo HTML:'
    }
  }

}
</script>
