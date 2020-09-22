/* eslint-disable vue/no-parsing-error */
<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-8 bg-grey-1 q-px-xl shadow-9">
      <div class="flex column">
        <h5>Computed vs Watch (o que fazem e qual a diferença?)</h5>
        <div class="text-weight-bolder q-pt-md">#COMPUTED</div>
        <p>Os dados computados previne a repetição do código no template e se parecem efetivamente com proprieades definidas em data</p>
        <p>é praticamente uma variavel reativa salva em cache, que reage a qualquer alteração de seu valor exibindo o novo valor</p>
        <div class="text-weight-bolder">Exemplo:</div>
        <div class="row">
          <q-input class="col-3 q-mb-md" outlined v-model.number="comp" label="Computada" />
        </div>
        <p>Com esse valor posso usar uma logica personalizada para tratar o valor e retornar de acordo com a lógica</p>
        <div class=" fit bg-grey-4 q-pa-sm q-my-md">
          <pre>
            computada () {
              const soma = parseInt(this.comp) + 2
              return soma
            }
          </pre>
        </div>
        valor reativo da computada ->  {{ computada }}
      </div>

      <div class="text-weight-bolder q-pt-md">#WATCH</div>
      <p>
      O watch funciona praticamente da mesma forma porem Quando se tem alguns dados que necessitam mudar com base na alteração de outros dados o watch é usado
      pois Isto é particularmente útil quando se precisa executar <strong> operações assíncronas </strong> ou operações complexas antes de responder a uma alteração de dados.
      </p>

      <div id="watch-example">
        <div class="text-weight-bolder q-pb-md">Exemplo:</div>
        <div class="row no-wrap">
        <q-input class="col-3 q-mb-md" outlined label="Watch" v-model="watchExemple" />
        <div v-if="isTyping" class="q-ml-sm self-center">Escrevendo...</div>
        </div>
        <div class="q-pt-md">
        <p>valor antigo -> {{ oldValueInput }}</p>
        <p>novo valor -> {{ newValueInput }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>]

<script>
export default {

  computed: {
    computada () {
      const soma = parseInt(this.comp) + 2
      return soma + ' <-- sempre soma + 2'
    }
  },

  data () {
    return {
      isTyping: false,
      comp: 0,
      watchExemple: '',
      oldValueInput: '',
      newValueInput: ''

    }
  },

  watch: {
    // sempre que a variável mudar, essa função será executada
    watchExemple: function (newValue, oldValue) {
      this.isTyping = true
      setTimeout(() => {
        this.isTyping = false
      }, 3000)
      this.oldValueInput = oldValue
      this.newValueInput = newValue
    }
  }

}
</script>
