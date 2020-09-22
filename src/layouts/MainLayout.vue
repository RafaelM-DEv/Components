<template>
  <q-layout view="HHH Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Central
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" :to="{ name: link.name }" />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Componente',
          icon: 'picture_in_picture',
          link: 'graphic'
        },
        {
          title: 'Hard skills',
          icon: 'school',
          link: 'hard'
        },
        {
          title: 'TODO List',
          icon: 'playlist_add_check',
          link: 'todo'
        },
        {
          title: 'ES6 Modules',
          icon: 'img:https://image.flaticon.com/icons/svg/13/13706.svg',
          link: 'java'
        },
        {
          title: 'Sortable',
          icon: 'drag_indicator',
          link: 'drag'
        },
        {
          title: 'JavaScript',
          icon: 'science',
          link: 'js'
        }
      ]
    }
  }
}
</script>
