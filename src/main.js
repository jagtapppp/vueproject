// import vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomeBoard from './components/HomeBoard.vue'
import MyBoard from './components/MyBoard.vue'
import ServicePage from './components/ServicePage.vue'
import LifeAtYash from './components/LifeAtYash.vue'
import OrganisationChart from './components/OrganisationChart.vue'



// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(fas);
// vue.component('font-awesome-icon', FontAwesomeIcon);


const router = createRouter({
    history: createWebHistory(),
        routes:[
            {path:'/', component:HomeBoard,name:'home'},
            {path:'/home', component:HomeBoard},
            {path:'/board', component:MyBoard},
            {path:'/lifeatyash', component:LifeAtYash},
            {path:'/service', component:ServicePage},
            {path:'/organisation', component:OrganisationChart}

        ]
});



const app = createApp(App)
app.use(router);

app.mount('#app'); 