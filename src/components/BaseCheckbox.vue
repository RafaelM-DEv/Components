<template>
<!-- O valor de isCheck será passado para a propriedade checked. E o isCheck será atualizado quando o 'BaseCheckbox' emitir o evento change com o novo valor. -->
<input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)" />
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>
