import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import ShopHome from "./components/shop/ShopHome.vue";
import ProductDetail from "./components/shop/ProductDetail.vue";
import ShoppingCart from "./components/shop/ShoppingCart.vue";
import WishList from "./components/shop/WishList.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/shop",
            component: Shop,
            children: [{
                path: "",
                name: "shophome",
                component: ShopHome
            },
            {
                path: "product",
                name: "productdetail",
                component: ProductDetail
            },
            {
                path: "shopping-cart",
                name: "shoppingcart",
                component: ShoppingCart
            },
            {
                path: "wishlist",
                name: "wishlist",
                component: WishList
            }]
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
});