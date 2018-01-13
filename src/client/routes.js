// containers
import Home from './containers/home/index.vue'
import Blog from './containers/home/index.vue'
import ConfDockerfile from './containers/conf/dockerfile.vue'

export default [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/blog/title', component: Blog},
    {path: '/conf/dockerfile', component: ConfDockerfile},
    {path: '/conf/gruntfile', component: ConfDockerfile}
]