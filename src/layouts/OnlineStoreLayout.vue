<template>
    <section>
        <!-- Header -->
        <header>
            <!-- Header desktop -->
            <div class="wrap-menu-desktop" v-bind:class="{'fix-menu-desktop':(toggleFixedDesktopMenu || currentPage != 'home')}">
                <nav class="limiter-menu-desktop container-fluid">
                    <!-- Logo desktop -->
                    <router-link to="/" class="logo">
                        <img src="@/assets/images/icons/logo.png" alt="IMG-LOGO" @click="navChange('home')">
                    </router-link>
                    <!-- Menu desktop -->
                    <div class="menu-desktop">
                        <ul class="main-menu">
                            <li v-bind:class="{'active-menu':currentPage=='home'}" v-on:click="navChange('home')">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li v-bind:class="{'active-menu':currentPage=='shop'}" v-on:click="navChange('shop')">
                                <router-link to="/shop">Shop</router-link>
                            </li>
                            <li v-bind:class="{'active-menu':currentPage=='about'}" v-on:click="navChange('about')">
                                <router-link to="/about">About</router-link>
                            </li>
                            <li v-bind:class="{'active-menu':currentPage=='contact'}" v-on:click="navChange('contact')">
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- Icon header -->
                    <div class="wrap-icon-header flex-w flex-r-m">
                        <a href="javascript:void(0)" class="dis-block customLink cl2 hov-cl1 trans-04 p-l-22 p-r-11" v-on:click="loginModalStatus()">
                            Log In / Sign Up
                        </a>
                        <div class="displayNameMenu cl2">
                            <span class="customLink">Aravind Kumar J</span>&nbsp;<i class="fa fa-chevron-down" aria-hidden="true"></i>
                            <ul class="sub-menu">
                                <li><a href="#">My Profile</a></li>
                                <li><a href="#">My Orders</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </div>
                        <router-link to="/shop/shopping-cart" class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="2">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </router-link>
                        <router-link to="/shop/wishlist" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="2">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </nav>
            </div>
            <!-- Header Mobile -->
            <div class="wrap-header-mobile" v-if="toggleMobileMenu">
                <!-- Logo moblie -->
                <div class="logo-mobile">
                    <router-link to="/"><img src="@/assets/images/icons/logo.png" alt="IMG-LOGO" @click="navChange('home')"></router-link>
                </div>
                <!-- Icon header -->
                <div class="wrap-icon-header flex-w flex-r-m m-r-15">
                    <router-link to="/shop/shopping-cart" class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="2">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </router-link>
                    <router-link to="/shop/wishlist" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="2">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </router-link>
                </div>
                <!-- Button show menu -->
                <div class="btn-show-menu-mobile hamburger hamburger--squeeze" v-bind:class="{'is-active':hamburgerStatus}" @click="toggleHamburger()">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </div>
            </div>
            <!-- Menu Mobile -->
            <div class="menu-mobile" v-if="hamburgerStatus">
                <ul class="main-menu-m">
                    <li>
                        <span class="mobTopHeader">Welcome Aravind Kumar</span>
                    </li>
                    <li>
                        <a href="javascript:void(0)" v-on:click="loginModalStatus()">
                            Log In / Sign Up
                        </a>
                    </li>
                    <li @click="mobnavChange('home')">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li @click="mobnavChange('shop')">
                        <router-link to="/shop">Shop</router-link>
                    </li>
                    <li @click="mobnavChange('about')">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li @click="mobnavChange('contact')">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">My Orders</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </header>
        <!-- Main Content -->
        <router-view></router-view>
        <!-- Footer -->
        <footer class="bg3 p-t-75 p-b-32">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-4 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            Categories
                        </h4>
                        <ul>
                            <li class="p-b-10">
                                <router-link to="/shop" v-on:click="navChange('shop')" class="stext-107 cl7 hov-cl1 trans-04">
                                    Women
                                </router-link>
                            </li>
                            <li class="p-b-10">
                                <router-link to="/shop" v-on:click="navChange('shop')" class="stext-107 cl7 hov-cl1 trans-04">
                                    Men
                                </router-link>
                            </li>
                            <li class="p-b-10">
                                <router-link to="/shop" v-on:click="navChange('shop')" class="stext-107 cl7 hov-cl1 trans-04">
                                    Accessories
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-lg-4 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            Help
                        </h4>
                        <ul>
                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Track Order
                                </a>
                            </li>
                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Returns
                                </a>
                            </li>
                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    Shipping
                                </a>
                            </li>
                            <li class="p-b-10">
                                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-lg-4 p-b-50">
                        <h4 class="stext-301 cl0 p-b-30">
                            GET IN TOUCH
                        </h4>
                        <p class="stext-107 cl7 size-201">
                            Any questions? Let us know in Rani store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+91) 96 716 68795
                        </p>
                        <div class="p-t-27">
                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i class="fa fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="p-t-40">
                    <div class="flex-c-m flex-w p-b-18">
                        <a href="#" class="m-all-1">
                            <img src="@/assets/images/icons/icon-pay-01.png" alt="ICON-PAY">
                        </a>
                        <a href="#" class="m-all-1">
                            <img src="@/assets/images/icons/icon-pay-02.png" alt="ICON-PAY">
                        </a>
                        <a href="#" class="m-all-1">
                            <img src="@/assets/images/icons/icon-pay-03.png" alt="ICON-PAY">
                        </a>
                    </div>
                    <p class="stext-107 cl6 txt-center">
                        Copyright &copy; 2019 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
        <!-- Back to top -->
        <div class="btn-back-to-top" v-show="toggleBtnTop" @click="scrollToTop()">
            <span class="symbol-btn-back-to-top">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
        </div>
        <!-- Modal1 -->
        <div class="wrap-modal1 js-modal1 p-t-60 p-b-30" v-bind:class="{'show-modal1':loginModalToggle}">
            <div class="overlay-modal1 js-hide-modal1" v-on:click="loginModalStatus()"></div>
            <div class="container">
                <div class="bg0 p-tb-30 p-lr-15 how-pos3-parent mx-auto mod-width">
                    <button class="how-pos3 hov3 trans-04 js-hide-modal1 modalCloseBtn" v-on:click="loginModalStatus()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <b-nav pills align="center" class="userloginPills">
                                <b-nav-item :active="isLoginMode" @click="loginModeChange('login')">LOG IN</b-nav-item>
                                <b-nav-item :active="!isLoginMode" @click="loginModeChange('signup')">SIGN UP</b-nav-item>
                            </b-nav>
                            <div class="row">
                                <div class="mx-auto col-sm-9 col-md-9" v-if="isLoginMode">
                                    <b-form class="m-tb-40">
                                        <b-form-group>
                                            <b-form-input type="text" placeholder="Enter Email"></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-form-input type="password" placeholder="Enter Password"></b-form-input>
                                        </b-form-group>
                                        <div class="text-center">
                                            <button type="button" class="stext-101 cl0 size-101 bg1 bor14 hov-btn1 p-lr-15 trans-04 pointer">Submit</button>
                                            <br/>
                                            <span class="m-tb-15 cl2 frgtPasslink">FORGOT PASSWORD ?</span>
                                        </div>
                                    </b-form>
                                </div>
                                <div class="mx-auto col-sm-9 col-md-9" v-if="!isLoginMode">
                                    <b-form class="m-tb-40">
                                        <b-form-group>
                                            <b-form-input type="text" placeholder="Enter Firstname"></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-form-input type="text" placeholder="Enter Lastname"></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-form-input type="text" placeholder="Enter Email"></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-form-input type="password" placeholder="Enter Password"></b-form-input>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-form-input type="password" placeholder="Confirm Password"></b-form-input>
                                        </b-form-group>
                                        <div class="text-center">
                                            <button type="button" class="stext-101 cl0 size-101 bg1 bor14 hov-btn1 p-lr-15 trans-04 pointer">Submit</button>
                                        </div>
                                    </b-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "OnlineStoreLayout",
    data() {
        return {
            toggleBtnTop: false,
            toggleFixedDesktopMenu: false,
            toggleMobileMenu: true,
            hamburgerStatus: false,
            loginModalToggle:false,
            isLoginMode:true
        }
    },
    methods: {
        handleScroll(event) {
            let wh = window.innerHeight / 2;
            let sp = window.scrollY;
            if (sp > wh) {
                this.toggleBtnTop = true;
            } else {
                this.toggleBtnTop = false;
            }
            if (sp > 40) {
                this.toggleFixedDesktopMenu = true;
            } else {
                this.toggleFixedDesktopMenu = false;
            }
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        handleresize() {
            let winWdth = window.innerWidth;
            if (winWdth >= 992) {
                this.toggleMobileMenu = false;
                this.hamburgerStatus = false;
            } else {
                this.toggleMobileMenu = true;
            }
        },
        toggleHamburger() {
            this.hamburgerStatus = !this.hamburgerStatus;
        },
        navChange(currentNav) {
            this.$store.commit('SET_PATHNAME', currentNav);
        },
        mobnavChange(currentNav) {
            this.hamburgerStatus = !this.hamburgerStatus;
            this.$store.commit('SET_PATHNAME', currentNav);
        },
        loginModalStatus(){
            this.loginModalToggle = !this.loginModalToggle;
        },
        loginModeChange(status){
            if(status == 'login'){
                this.isLoginMode = true;
            }else{
                this.isLoginMode = false;
            }
        }
    },
    created() {
        let routeName = this.$route.name;
        if (routeName == "shophome" || routeName == "productdetail" || routeName == "shoppingcart" || routeName == "wishlist") {
            routeName = "shop"
        }
        this.$store.commit('SET_PATHNAME', routeName);
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleresize);
        this.handleScroll();
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleresize);
    },
    computed: {
        currentPage() {
            return this.$store.getters.pathname;
        }
    }
}
</script>