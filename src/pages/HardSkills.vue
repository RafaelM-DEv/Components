<template>
   <q-page class="q-pa-md fit row justify-center bg-grey-8">
   <div class="col-8 bg-grey-1 q-px-xl shadow-9">
    <h5>Hard Skills</h5>
    <h6>VUE</h6>
    <div>
     <p>-QUANDO UMA INSTÂNCIA DO VUE É CRIADA, ELA ADICIONA TODAS AS PROPRIEDADES ENCONTRADAS NO OBJETO 'data' AO SISTEMA DE REATIVIDADE DO VUE
       -QUANDO OS VALORES DE QUALQUER DESTAS PROPRIEDADES MUDA, A CAMADA VISUAL "REAGE", ATUALIZANDO-SE PARA CONDIZER COM OS NOVOS VALORES.</p>
      <p> PARA TER UMA ATUALIZAÇÃO REATIVA A VARIÁVEL DEVERÁ SER INICIADA COM UM VALOR PADRÃO NO 'data' PARA ASSIM SER RE-REDENRIZADA NA INTERFACE</p>
      <p>TEM COMO OPÇÃO USAR O Object.freeze(obj)</p>
      <p>QUE TEM COMO FUNÇÃO CONGELAR O OBJETO E PREVINIR ELE DE QUALQUER MUDANÇA REATIVA</p>
      <p>#CICLO DE VIDA DA INSTÂNCIA</p>
      <p>CADA INSTÂNCIA VUE PASSA POR UMA SÉRIE DE ETAPAS EM SUA INICIALIZAÇÃO</p>
      <p>É NECESSÁRIO CONFIGURAR A OBSERVAÇÃO DE DADOS, COMPILAR O TEMPLATE MONTAR A INSTÂNCIA NO DOM, ATUALIZAR O DOM QUANDO OS DADOS FOREM ALTERADOS</p>
      <p>ISSO TUDO OCORRE POIS AO LONGO DO CAMINHO SÃO ACIONADOS GATILHOS DE CICLO DE VIDA QUE OFERECEM UMA OPORTUNIDADE DE EXECUTAR LÓGICAS PERSONALIZADAS EM ETAPAS ESPECÍFICAS</p>
    </div>

    <div># Created vs Mounted (o que fazem e qual a diferença?)</div>
    <q-btn class="q-mb-lg" color="blue" label="Ver"  :to="{ name: 'created'}" />
    <div># Computed vs Watch (o que fazem e qual a diferença?)</div>
    <q-btn class="q-mb-lg" color="blue"  label="Ver" :to="{ name: 'computed'}" />
    <div># v-model (o que faz, como funciona, como criar um componente com v-model sem que seja um input, select etc?)</div>
    <q-btn class="q-mb-lg" color="blue"  label="Ver" :to="{ name: 'vmodel'}" />
    <div># $refs, $set, $delete, $emit, $attrs, $listeners (o que fazem e quando usar?)</div>
    <q-btn class="q-mb-lg" color="blue"  label="Ver" :to="{ name: 'edge'}" />
    <div># diretivas e mixing (o que são e como utilizar?)</div>
    <q-btn class="q-mb-lg" color="blue"  label="Ver" :to="{name: 'mix'}"/>
    <div># Como e quando usar um scoped slot?</div>
    <q-btn class="q-mb-lg" color="blue"  label="Ver" :to="{name: 'slot'}" />

    <div># Vuex-> Como e quando usar: getters, state, actions, mutations</div>
    <q-btn class="q-mb-lg" color="white" text-color="black" label="Exemplo" :to="{name: 'vuex'}"/>
  </div>
  </q-page>
</template>

<script>
export default {
}
</script>
