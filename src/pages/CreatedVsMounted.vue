<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-8 bg-grey-1 q-px-xl shadow-9">
      <h5>created vs mounted (o que fazem e qual a diferença?)</h5>
      <div class="row">
        <div class="text-weight-bolder q-pt-md">#CREATED</div>
        <div class="text-italic q-pt-sm">
          <p> Invocado sincronicamente após a instância ser criada.
          Neste ponto, a instância finalizou o processamento das opções, o que significa que foi configurado: observação de dados, propriedades computadas, métodos, watch/event callbacks.
          Entretanto, a fase de montagem não foi iniciada, e a propriedade $el não estará disponível ainda. -Doc Vue</p>
        </div>
        <div class="q-pt-sm">
          GATILHO CREATED É UTILIZADO PARA EXECUTAR CÓDIGO LOGO APÓS A INSTÂNCIA
          SER CRIADA, E TAMBÉM CONFIGURA A OBSERVAÇÃO DE DADOS QUE É O QUE CONTEM NO DATA,
          CONFIGURA AS COMPUTADAS, METODOS E WATCH/EVENT CALLBACKS.
          NESSA ETAPA O NOSSO $el NÃO FOI RENDERIZADO AINDA SOMENTE SERA FEITO ISSO QUANDO
          TODAS AS CONFIGURAÇÕES FOREM FEITAS E ASSIM CHAMAR O MOUNTED
        </div>
         <div class=" fit bg-grey-4 q-pa-sm q-my-md">
           <pre>
             created ( ) {
               console.log(this.$el) //undefined
             }
           </pre>
        </div>
        <div>
          <p>Aqui o nosso $el tem seu valor 'undefined' pois nosso componente ainda não foi montado</p>
          <p>Faz sentido quando você deseja realizar operações antes do seu componente ser processado</p>
        </div>

        <div>
          <div class="text-weight-bolder q-py-md">#MOUNTED</div>
          <p>É CHAMADO LOGO APOS A INSTÃNCIA TER SIDO MONTADA fn $mount é chamada ONDE 'el' É  SUBSTITUIDO PELO RECÉM CRIADO 'vm.$el'.</p>
          <p>É NESSA ETAPA QUE VERIFICA SE TEM A OPÇÃO 'el' se não ele chama o $mount(el) passando o 'el'</p>
          <p>logo após verifica se tem a opção template para verificar se vai renderizar o template ou renderizar el do html como template</p>
          <div class="bg-grey-4 q-pa-sm q-my-md">
            <pre>
              mounted ( ) {
                console.log(this.$el) //elemento DOM
              }
            </pre>
          </div>
          <div>
            <p>Faz sentido usar quando você está tentando se conectar-se com o DOM e manipular o conteudo do DOM após a renderização do DOM</p>
            <p>SEGUNDO A DOC, O MOUNTED NÃO GARANTE QUE TODOS OS COMPONENTES FILHOS JÁ TENHAM SIDO MONTADOS PARA RESOLVER ISSO PODE-SE UTILIZAR A fn this.$nextTick()</p>
            <div class="bg-grey-4 q-my-md">
              <pre>
                mounted: function () {
                  this.$nextTick(function () {
                    // Código que irá rodar apenas após toda
                    // a árvore do componente ter sido renderizada
                  })
                }
              </pre>
              </div>
              <p>PODE SER UTILIZADO PARA RODAR UM CÓDIGO LOGO APÓS TODA A ÁRVORE DO COMPONENTE TER SIDO RENDERIZADA</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: 'Exemplo computada'
    }
  },

  created () {
    console.log('Metodo Created ->', this.$el)
  },

  mounted () {
    console.log('Metodo Mounted ->', this.$el)
  }
}

</script>
