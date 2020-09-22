<template>
  <q-page class="q-pa-md">
    <GraphicView :fields="fields" :labels="labels" :holder="this.holder" :modifierA="modifierA" :modifierB="modifierB" class="q-pa-md"></GraphicView>
    <q-form class="q-gutter-md">
      <q-input filled v-model="fields.holder" :label="labels.labelHolder" />
      <q-input filled v-model="fields.modifierA" :label="labels.labelModifierA" />
      <q-input filled v-model="fields.modifierB" :label="labels.labelModifierB" />
    </q-form>
  </q-page>
</template>

<script>
import GraphicView from '../components/GraphicView'
export default {
  components: {
    GraphicView
  },

  computed: {
    holder () {
      return this.fields.holder
    },

    modifierA () {
      return this.fields.modifierA
    },

    modifierB () {
      return this.fields.modifierB
    }
  },

  data () {
    return {
      fields: {
        holder: '',
        modifierA: '',
        modifierB: ''
      },
      labels: {
        labelHolder: 'Base',
        labelModifierA: 'modificador A',
        labelModifierB: 'modificador B'
      }
    }
  }
}

</script>
