import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
    mode: 'history', 
    routes
})

Vue.use(VueRouter)
const App = new Vue({
    base: '/',
    el: '#app',
    router,
    template: `
        <span>
            <router-view></router-view>
            <div class="container">
                <footer class="grid"> 
                    <div class="col-12">
                        <hr>
                    </div>
                    <div class="col-6">
                    <ul class="horizontal-list text-left">
                        <li style="font-size:.9em;color:#808080;">
                        DoConfig &copy; 2017 IdMore Team</li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">How to Use</a></li>
                        <li> <a href="#">Term of use</a></li>
                        <li> <a href="#">Blog</a></li>
                    </ul>
                    </div>
                    <div class="col-6"> 
                    <ul class="horizontal-list text-right">
                        <li> <a href="#">Contact</a></li>
                        <li> <a href="#">Term of use</a></li>
                        <li> <a href="https://byidmore"> <strong>Powered By IdMore</strong></a></li>
                    </ul>
                    </div>
                </footer>
            </div>
        </span>
    `
})