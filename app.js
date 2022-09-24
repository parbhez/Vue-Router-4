const Home = {
    template: `<div class="card mt-3">
        <h4 style="margin-right:10px:">Home Componet</h4>
    <div class="card-body">
        <p> Home Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro minus beatae, commodi libero nisi molestias veritatis aliquid tempore est dignissimos sunt explicabo nobis consequuntur, accusantium, hic labore illo atque!</p>
    </div>
</div>`
}

const About = {
    template: `<div class="card mt-3">
    <div class="card-title">
        <h4>About Componet</h4>
    </div>
    <div class="card-body">
        <p> About Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro minus beatae, commodi libero nisi molestias veritatis aliquid tempore est dignissimos sunt explicabo nobis consequuntur, accusantium, hic labore illo atque!</p>
    </div>
</div>
`
}

const Services = {
    template: `<div class="card mt-3">
    <div class="card-title">
        <h4>Services Componet</h4>
    </div>
    <div class="card-body">
        <p>Services Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro minus beatae, commodi libero nisi molestias veritatis aliquid tempore est dignissimos sunt explicabo nobis consequuntur, accusantium, hic labore illo atque!</p>
    </div>
</div>`
}

const News = {
    template: ` <div class="card mt-3">
    <div class="card-title">
        <h4>News Componet</h4>
    </div>
    <div class="card-body">
        <p>News Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro minus beatae, commodi libero nisi molestias veritatis aliquid tempore est dignissimos sunt explicabo nobis consequuntur, accusantium, hic labore illo atque!</p>
    </div>
</div>`
}

const Sports = {
    template: `<div class="card mt-3">
    <div class="card-title">
        <h4>Sports Componet</h4>
    </div>
    <div class="card-body">
        <p>Sports Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia porro minus beatae, commodi libero nisi molestias veritatis aliquid tempore est dignissimos sunt explicabo nobis consequuntur, accusantium, hic labore illo atque!</p>
    </div>
</div>`
}


const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/news', component: News },
    { path: '/sports', component: Sports },
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    base: 'vuerouter',
    routes,
})

const app = Vue.createApp({})

app.use(router)

app.mount("#app")