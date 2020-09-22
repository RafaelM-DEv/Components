<template>
<!-- TODO criar um formulário -->
  <div>
    <q-btn :label="label" :icon="icon" :color="color" flat dense round @click="onSubmit"/>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: Number
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'delete_outline'
    },
    color: {
      type: String,
      default: 'white'
    }
  },

  data () {
    return {
    }
  },

  methods: {
    ...mapActions([
      'DELETE_TODO'
    ]),

    async onSubmit (id) {
      try {
        await this.DELETE_TODO(this.id)
        // const response =
        // this.$emit('success', response)
      } catch (error) {
        console.log(error)
      }
    },

    onReset () {
      this.todo.Text = null
    }
  }
}
</script>
