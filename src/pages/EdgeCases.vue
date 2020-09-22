<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-8 bg-grey-1 q-px-xl shadow-9">
      <h5>Casos Especiais</h5>

      <div class="text-weight-bolder q-pt-md q-pb-md"># $ref</div>
      <div>
        <p>Apesar da existência de propriedades e eventos, algumas vezes você ainda pode precisar acessar diretamente um componente filho em JavaScript. Para isso, você pode atribuir um identificador de referência ao componente filho, usando o atributo ref. Por exemplo:</p>
        <q-btn label="focus" @click="focus" />
        <q-input class="shadow-5 q-mt-md" ref="textarea" v-model="text" filled type="textarea" />
      </div>

      <div class="text-weight-bolder q-mt-xl q-pb-md"># $set</div>
      <div class="q-mb-md" >Array-> {{ myArr }}</div>
      <div class="q-mb-md">
        <div class="q-my-sm">Mudar João por Rafael</div>
        <q-btn label="Mudar" @click="changeName" />
        <div class="q-my-sm"> mudar Rafael por João</div>
        <q-btn label="Mudar" @click="changeName2" />
      </div>

      <div class="text-weight-bolder q-mt-xl q-pb-md"># $delete</div>
      <div class="q-mb-md" >Array-> {{ myArr }}</div>
      <div v-for="(item, index) in myArr" :key="index" class="row">
        <div>{{item}}</div>
        <button @click="del(index)" class="q-ml-sm">X</button>
      </div>

      <div class="text-weight-bolder q-mt-xl q-pb-md"># $emit</div>
      <div class="q-mb-md">Escutando Eventos de Componentes Filho</div>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <p> Aumente a fonte </p>
        <div class="row q-gutter-md">
          <FontSize :listener="false" v-on:enlarge-text="postFontSize += $event"/>
          <FontSize :listener="false" :label="'Diminuir Fonte'" v-on:enlarge-text="postFontSize -= $event"/>
        </div>
      </div>

      <div class="text-weight-bolder q-mt-xl q-pb-md"># $attrs</div>
      <P>Adicionei um atributo de cor no id</P>
      <p>se eu pasase essa propriedade para os demais botões eu terei o mesmo comportamento</p>
      <FontSize listener :id="id" blah="bla"  :label="'Diminuir Fonte'" @click="postFontSize += 0.1" />

      <div class="text-weight-bolder q-mt-xl q-pb-md"># $listeners</div>

      <FontSize listener @click="countclicks" @mouseover="countmove" :label="'Contar clicks'" />
      <div class="q-mt-md">
        clicks -> {{clicks}}
      </div>
      <div class="q-mb-xl">
        Moves -> {{move}}
      </div>

    </div>
  </q-page>
</template>

<script>

import FontSize from '../components/FontSize'
export default {

  components: {
    FontSize
  },

  data () {
    return {
      move: 0,
      clicks: 0,
      id: 'color',
      postFontSize: 1,
      text: '',
      myArr: ['João', 'Maria', 'Lucas']
    }
  },

  methods: {
    focus () {
      this.$refs.textarea.focus()
    },

    changeName () {
      this.$set(this.myArr, 0, 'Rafael')
    },
    changeName2 () {
      this.$set(this.myArr, 0, 'João')
    },

    del (index) {
      this.$delete(this.myArr, index)
    },
    countclicks () {
      this.clicks++
    },
    countmove () {
      this.move++
    }

  }
}
</script>
