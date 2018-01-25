// containers
import Home from './containers/home/index.vue'
import Blog from './containers/blog/index.vue'
import BlogDetail from './containers/blog/detail.vue'
import ConfDockerfile from './containers/conf/dockerfile.vue'
import ErrorPage from './containers/error/index.vue'
import StaticPage from './containers/static/index.vue'
import Result from './containers/result/index.vue'

import LayoutDefault from './layouts/default.vue'

export default [
  // homepage
  {path: '/', component: Home},
  {
    // except homepage using template
    path: '*',
    name: 'default layout',
    // using default layout
    component: LayoutDefault,
    children: [
      // blog pages
      {path: '/blog', component: Blog},
      {path: '/blog/:params_title-:params_id', props: true, component: BlogDetail},
      // conf pages
      {path: '/conf/dockerfile', component: ConfDockerfile},
      {path: '/conf/gruntfile', component: ConfDockerfile},
      // static page
      // send props from routes, solved from : https://router.vuejs.org/en/essentials/passing-props.html
      {path: '/about', title: 'about', props: {key_content: 0}, component: StaticPage},
      {path: '/terms-and-conditions', props: {key_content: 1}, component: StaticPage},
      {path: '/privacy-policy', props: {key_content: 2}, component: StaticPage},
      {path: '/how-to-use', props: {key_content: 3}, component: StaticPage},
      // result pages
      {path: '/result/:type', props: true, component: Result},
      // 404
      {path: '*', props: {code: '404', message: 'Page Not Found'}, component: ErrorPage}
    ]}
]
