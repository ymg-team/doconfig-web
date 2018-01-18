// containers
import Home from './containers/home/index.vue'
import ConfDockerfile from './containers/conf/dockerfile.vue'
import ErrorPage from './containers/error/index.vue'
import StaticPage from './containers/static/index.vue'

import LayoutDefault from './layouts/default.vue'

export default [
  {path: '/', component: Home},
  {
    // except homepage using template
    path: '*',
    name: 'default layout',
    // using default layout
    component: LayoutDefault,
    children: [
      {path: '/blog', component: Home},
      {path: '/blog/title', component: Home},
      {path: '/conf/dockerfile', component: ConfDockerfile},
      {path: '/conf/gruntfile', component: ConfDockerfile},
      // static page
      // send props from routes, solved from : https://router.vuejs.org/en/essentials/passing-props.html
      {path: '/about', title: 'about', props: {key_content: 0}, component: StaticPage},
      {path: '/terms-and-conditions', props: {key_content: 1}, component: StaticPage},
      {path: '/privacy-policy', props: {key_content: 2}, component: StaticPage},
      // 404
      {path: '*', component: ErrorPage}
    ]}
]
