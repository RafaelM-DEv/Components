<template>
  <div>
    <q-btn v-if="!listener" v-bind="$attrs" :label="label" v-on:click="$emit('enlarge-text', 0.1) & $emit('c-clicks')" @mouseover="$emit('mouseover')" />
    <q-btn v-if="listener" v-bind="$attrs" :label="label" v-on="listeners" />
  </div>
</template>

<style lang="scss" scoped>
#color {
  color: blue
}
</style>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Aumentar fonte'
    },
    listener: {
      type: Boolean
    }
  },

  inheritAttrs: false, // faz que não adicione atributos onde você não possui configuração para eles
  computed: {
    listeners () {
      // posso criar um destruc e filtrar somente os eventes que desejo executar
      console.log(this.$listeners)
      return this.$listeners
    }, // caso eu queria somente um atributo se houver mais de um no caso eu crio um destruct
    attrs () {
      const { id, ...attrs } = this.$attrs
      return attrs
    }
  }
}
</script>
