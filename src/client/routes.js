// containers
import Home from './containers/home/index.vue'
import Blog from './containers/blog/index.vue'
import BlogDetail from './containers/blog/detail.vue'
import ConfDockerfile from './containers/config/dockerfile.vue'
// import ConfWebpack from './containers/config/webpack.vue'
import ConfNginx from './containers/config/nginx.vue'
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
      { path: '/blog', component: Blog },
      { path: '/blog/:params_title-:params_id', props: true, component: BlogDetail },
      // conf pages
      { path: '/config/dockerfile', component: ConfDockerfile },
      // {path: '/config/webpack', component: ConfWebpack},
      // {path: '/config/gruntfile', component: ConfDockerfile},
      { path: '/config/nginx', component: ConfNginx },
      // static page
      // send props from routes, solved from : https://router.vuejs.org/en/essentials/passing-props.html
      { path: '/about', title: 'about', props: {key_content: 0}, component: StaticPage },
      { path: '/terms-and-conditions', props: {key_content: 1}, component: StaticPage },
      { path: '/privacy-policy', props: {key_content: 2}, component: StaticPage },
      { path: '/how-to-use', props: {key_content: 3}, component: StaticPage },
      // result pages
      { path: '/result/nginx', props: {type: 'nginx'}, component: Result },
      { path: '/result/dockerfile', props: {type: 'dockerfile'}, component: Result },
      // 404
      { path: '*', props: {code: '404', message: 'Page Not Found'}, component: ErrorPage }
    ]}
]
