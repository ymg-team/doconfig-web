// containers
import Home from './containers/home/index.vue'
import ConfDockerfile from './containers/conf/dockerfile.vue'

export default [
  {path: '/', component: Home},
  {path: '/blog', component: Home},
  {path: '/blog/title', component: Home},
  {path: '/conf/dockerfile', component: ConfDockerfile},
  {path: '/conf/gruntfile', component: ConfDockerfile}
]
