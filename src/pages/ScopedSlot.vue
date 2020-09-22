<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-8 bg-grey-1 q-px-xl shadow-9">
      <h5>Slot</h5>
      <div>
        <p class="text-weight-bolder">Conteúdo do Slot</p>
        <div v-text="text"/>
        <div class="q-my-md bg-grey-4" v-text="code"/>
        <navigation :url='url'> profile </navigation>
        <div v-text="text2"/>
      </div>
      <div>
        <h5>Conteúdo de Fallback</h5>
        <div v-text="textFallback" />
        <div class="q-my-md bg-grey-4" v-text="textFallback2"/>
        <div v-text="fallback"/>
        <div class="q-my-md bg-grey-4" v-text="fallbackCode" />
        <div v-text="fallbackc" />
      </div>
      <div>
        <h5>Slots de Escopo Definido</h5>
         Slot não passando conteúdo:
        <Scoped data />
        <div class="q-mt-md">
          Slot passando conteúdo:
        </div>
        <Scoped data v-slot="{ user }">{{ user.lastname }}</Scoped>
      </div>
      <div class="q-mt-md">
        usando o slot name:
        <Scoped v-slot:title title>Título</Scoped>
      </div>
    </div>
  </q-page>
</template>

<script>
import navigation from '../components/navigation'
import Scoped from '../components/Scoped'
export default {
  components: {
    navigation,
    Scoped
  },

  data () {
    return {
      def: '',
      url: 'www.google.com.br',
      text: 'Vue implementa uma API de distribuição de conteúdo que é modelada após o atual detalhamento da especificação dos componentes da Web, usando o elemento <slot> para servir como saída de distribuição de conteúdos.',
      code: '<navigation-link url="/profile">' + 'Seu Perfil' + '</navigation-link>',
      text2: 'Se no <navigation-link> não contém um elemento <slot>, qualquer conteúdo passado para ele simplesmente será descartado.',
      textFallback: 'Há casos em que é útil especificar o conteúdo de fallback (isto é, padrão) para um slot, a ser renderizado somente quando nenhum conteúdo é fornecido. Por exemplo, no componente <submit-button>:',
      textFallback2: '<button type="submit"><slot></slot></button>',
      fallback: 'Podemos querer que o texto “Enviar” seja renderizado dentro do <button> na maioria das vezes. para “Enviar” o conteúdo de fallback, podemos colocá-lo entre as tags <slot>:',
      fallbackCode: '<button type="submit"><slot>Enviar</slot></button>',
      fallbackc: 'se usarmos o componente e e não fornecer um conteudo ele irá renderizar o conteudo do fallback "enviar", se fornecer um conteúdo ele irá subistituir o fallback.'
    }
  }
}
</script>
