<template>
  <component :is="componentTag" >
    <div class="q-pa-md">
      <div v-if="!idle" class=" q-pb-md progres no-wrap" >
         <q-linear-progress rounded reverse :value="1" class="q-pt-md Óbitos" color="warning" />
         <q-linear-progress rounded reverse :value="this.formatModifierBDecimal" class="q-pt-md Recuperados" color="positive" />
         <q-linear-progress rounded :value="this.activeCasesDecimalIsEmpty" class="q-pt-md Casos" color="primary"  />
      </div>
      <div v-if="idle" class="progres">
         <q-linear-progress size="15px" indeterminate :color="this.hex" rounded class="q-pt-md" />
      </div>
    </div>
    <div class="row items-center">
      <div class="q-pa-sm">
        <div class="q-pa-sm q-mt-sm row  items-center">
          <q-btn round size="5px" class="q-mr-sm " color="primary" @click="colorHolderPick = true" />
          {{ formatBase }}
        </div>
        <div class="q-pa-sm q-mt-sm row  items-center">
          <q-btn round size="5px" class="q-mr-sm" color="warning" />
          {{ formatModifierA }}
        </div>
        <div class="q-pa-sm q-mt-sm row  items-center">
          <q-btn round size="5px" class="q-mr-sm"  color="positive" />
         {{ modifierB }}
        </div>
      </div>
      <div class="q-pa-sm items-center">
        <div class="q-pa-sm q-mt-sm">{{ this.labels.labelHolder }}</div>
        <div class="q-pa-sm q-mt-sm">{{ this.labels.labelModifierA }}</div>
        <div class="q-pa-sm q-mt-sm">{{ this.labels.labelModifierB }}</div>
      </div>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.progres {
  position: relative;
  display: block;
}
.Casos {
  position: absolute;
}
.Recuperados {
  position: absolute;
  z-index: 2;
}
.Óbitos {
  position: absolute;
}

</style>

<script>
export default {
  props: {
    componentTag: {
      type: String,
      default: 'div'
    },
    labels: {
      type: Object,
      default: () => ({})
    },
    fields: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    idle () {
      if (this.fields.holder === '') {
        return true
      } else {
        return false
      }
    },

    baseModifierA () {
      const baseModifierA = this.values.holder - this.values.modifierA
      const percent = ((baseModifierA * 100) / this.values.holder)
      const resultFloat = parseFloat(percent.toFixed(2))
      return resultFloat
    },

    modifierA () {
      const modifierA = 100 - this.baseModifierA
      const float = parseFloat(modifierA.toFixed(2))
      return float
    },

    formatModifierA () {
      return this.modifierA ? this.modifierA + ' %' : '- - -'
    },

    modifierB () {
      const valor = this.values.holder - this.values.modifierB
      const porcent = ((valor * 100) / this.values.holder)
      const arend = 100 - porcent
      const Recuperados = parseFloat(arend.toFixed(2))
      return Recuperados ? Recuperados + ' %' : '- - -'
    },

    modifierBDecimal () {
      const CasosRecuperados = parseInt(this.modifierB) / 100
      return CasosRecuperados
    },

    formatModifierBDecimal () {
      return this.modifierBDecimal ? this.modifierBDecimal : 0
    },

    holder () {
      const soma = parseFloat(this.baseModifierA) - parseFloat(this.modifierB)
      const arend = parseFloat(soma.toFixed(2))
      return arend ? arend + ' %' : this.baseModifierA ? this.baseModifierA + ' %' : '- - -'
    },

    activeCasesDecimal () {
      const activeCasesDecimal = parseInt(this.holder) / 100
      return activeCasesDecimal
    },

    activeCasesDecimalIsEmpty () {
      if (this.base() <= 0) {
        const result = 0
        return result
      } else {
        return this.activeCasesDecimal ? this.activeCasesDecimal : 0
      }
    },

    formatBase () {
      console.log(this.base())
      if (this.base() <= 0) {
        const result = '- - -'
        return result
      } else {
        return this.base()
      }
    }

  },

  created () {
    this.values = this.fields
    this.defaultLabels = this.labels
  },

  // info ->
  // set this on data for modifications labels and Colors

  // labels: {
  //   labelHolder: 'Base',
  //   labelModifierA: 'modificador A',
  //   labelModifierB: 'modificador B'
  // },
  // colors: {
  //   colorHolder: 'info',
  //   colorsModifierA: 'positive',
  //   colorsModifierB: 'red'
  // }

  // computed: {
  //   holder () {
  //     return this.fields.holder
  //   },

  //   modifierA () {
  //     return this.fields.modifierA
  //   },

  //   modifierB () {
  //     return this.fields.modifierB
  //   }
  // },

  data () {
    return {
      values: {
        holder: '0',
        modifierA: '0',
        modifierB: '0'
      },
      defaultLabels: {
        labelHolder: 'Base',
        labelModifierA: 'modificador A',
        labelModifierB: 'modificador B'
      }
    }
  },

  methods: {
    base () {
      const result = parseFloat(this.values.modifierA) + parseFloat(this.values.modifierB)
      if (result === parseFloat(this.values.holder)) {
        const result = parseInt(this.holder) - parseInt(this.modifierB)
        return result
      } else {
        return this.holder
      }
    }
  }
}

</script>
