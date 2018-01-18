// containers
import Home from './containers/home/index.vue'
import ConfDockerfile from './containers/conf/dockerfile.vue'
import ErrorPage from './containers/error/index.vue'

import LayoutDefault from './layouts/default.vue'

export default [
  {path: '/', component: Home},
  {
    path: '*',
    name: 'default layout',
    // using default layout
    component: LayoutDefault,
    children: [
      {path: '/blog', component: Home},
      {path: '/blog/title', component: Home},
      {path: '/conf/dockerfile', component: ConfDockerfile},
      {path: '/conf/gruntfile', component: ConfDockerfile},
      // 404
      {path: '*', component: ErrorPage}
    ]}
]