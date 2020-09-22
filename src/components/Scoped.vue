 <template>
    <div>
      <div v-if="title">
      <h5>
      <slot name="title"/>
      </h5>
      </div>
      <slot v-if="data" :user="user">
      {{ user.name }}
      </slot>
    </div>
  </template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    data: {
      type: Boolean
    },
    title: {
      type: Boolean
    }
  },

  data () {
    return {
      user: { name: ' Rafael', lastname: 'Martins' }
    }
  }
}
</script>
