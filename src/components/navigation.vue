<template>
  <a :href='url' class="nav-link"></a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      Valor: { name: ' rafael', lastname: 'Martins' }
    }
  }
}
</script>
