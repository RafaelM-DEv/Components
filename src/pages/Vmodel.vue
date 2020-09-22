<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-8 bg-grey-1 q-px-xl shadow-9">
      <h6>v-model (o que faz, como funciona, como criar um componente com v-model sem que seja um input, select etc?)</h6>
      <div class="text-weight-bolder q-pb-md"> #V-MODEL</div>
      <p>Você pode usar a diretiva v-model para criar interligações de mão dupla (two-way binding) entre os dados e elementos input, textarea e select de formulários. A diretiva automaticamente busca a maneira correta de atualizar o elemento com base no tipo de entrada. Embora um pouco mágico, v-model é essencialmente açúcar sintático para atualização de dados através de eventos de entrada do usuário, além de cuidados especiais para alguns casos extremos.</p>
      <p>A diretiva v-model irá ignorar o estado inicial de value, checked ou selected encontrado em qualquer elemento de formulário. Sempre se tratará a instância Vue como a fonte dos dados verdadeiros. Ou seja, declare os valores iniciais no lado JavaScript, dentro da opção data de seu componente.</p>
      <p>v-model usa internamente diferentes propriedades e emite diferentes eventos para diferentes elementos input:</p>
      <p>os elementos text e textarea usam a propriedade value e o evento input; checkboxes e radiobuttons usam a propriedade checked e o evento change; campos de seleção usam value como prop e change como um evento.- doc vue</p>
      <div class="row">
        <q-input class="col-6" outlined="" v-model="mensagem" label="digite aqui" />
      </div>
      <div class="q-pt-sm">mensagem digitada -> {{ mensagem }}</div>
      <div>
        <div class="text-weight-bolder q-pt-md">Usando v-model em Componentes</div>
        <div class="q-mb-sm">component checkbox</div>
        <BaseCheckbox v-model="isCheck" />
        <div class="q-mb-sm">{{ isCheck }}</div>
        <div class="q-my-md">
          <div>Exemplo de V-model feito somente com JavaScript</div>
          <input :value="input" @input="handleInput($event.target.value)"/>
          {{ input }}
        </div>
        <p>O valor de isCheck será passado para a propriedade checked. E o isCheck será atualizado quando o 'BaseCheckbox' emitir o evento change com o novo valor.</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import BaseCheckbox from '../components/BaseCheckbox'
export default {
  components: {
    BaseCheckbox
  },

  data () {
    return {
      input: 'inicial',
      isCheck: false,
      mensagem: ''
    }
  },

  methods: {
    handleInput (value) {
      this.input = value
    }
  }
}
</script>
