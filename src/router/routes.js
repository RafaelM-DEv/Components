
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/graphic', name: 'graphic', component: () => import('pages/Graphic.vue') },
      { path: '/hard', name: 'hard', component: () => import('pages/HardSkills.vue') },
      { path: '/createdvsmounted', name: 'created', component: () => import('pages/CreatedVsMounted.vue') },
      { path: '/computedvswatch', name: 'computed', component: () => import('pages/ComputedVsWatch.vue') },
      { path: '/vmodel', name: 'vmodel', component: () => import('pages/Vmodel.vue') },
      { path: '/edgecases', name: 'edge', component: () => import('pages/EdgeCases.vue') },
      { path: '/todolist', name: 'todo', component: () => import('pages/TO-DO/TodoList.vue') },
      { path: '/todolist', name: 'mix', component: () => import('pages/DirectivesMixing.vue') },
      { path: '/scoped-slot', name: 'slot', component: () => import('pages/ScopedSlot.vue') },
      { path: '/vuex', name: 'vuex', component: () => import('pages/vuex.vue') },
      { path: '/javascript', name: 'java', component: () => import('pages/JavaScript.vue') },
      { path: '/drag', name: 'drag', component: () => import('pages/Draggable.vue') },
      { path: '/JS', name: 'js', component: () => import('pages/JS.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
