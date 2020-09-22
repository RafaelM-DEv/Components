<template>
  <q-page class="q-pa-md fit row justify-center bg-grey-8">
    <div class="col-12 bg-grey-1 justify-center q-px-xl shadow-9">
      <h5>Sortable</h5>
      <div class="col-12 row bg-blue-2 justify-center q-px-xl shadow-9">
        <div class="q-mx-md q-mt-lg">
          <span class="bg-grey-4 q-px-sm q-py-sm"> List One</span>
          <draggable class="q-mt-md" v-model="ListOne" v-bind="dragOptions" :move="onMove">
            <transition-group type="transition">
              <div class="list-group-item" v-for="(element, index) in ListOne" :key="index">
                <div class="col-12 shadow-2 flex justify-between q-my-sm q-py-sm q-px-sm bg-yellow-9">
                {{element.name}}
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="q-mx-md q-mt-lg">
          <span class="bg-grey-4 q-px-sm q-py-sm"> List Two</span>
          <draggable class="q-mt-md" v-model="ListTwo" v-bind="dragOptions" :move="onMove" style="height: 100px">
            <transition-group>
              <div class="list-group-item bg-grey-4" v-for="(element, index) in ListTwo" :key="index">
                <div class="col-12 shadow-2 q-my-sm q-py-sm q-px-sm bg-yellow-9">
                  {{element.name}}
                </div>
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// TODO implementar do zero usando js
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },

  computed: {
    dragOptions () {
      return {
        animation: 100,
        group: 'description',
        ghostClass: 'ghost'
      }
    }
  },

  data () {
    return {
      ListOne: [{ name: 'Rafael' }, { name: 'Felipe' }],
      ListTwo: [{ name: 'Diego' }],
      isDragging: false
    }
  },

  methods: {
    // não entendi direito o retorno esse método
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  }

}
</script>
