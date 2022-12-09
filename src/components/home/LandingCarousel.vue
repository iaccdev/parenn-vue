<template>
    <section class="section-slide">
                <slick ref="slick" class="wrap-slick1" :options="slickOptions">
                    <div class="item-slick1 slide1">
                        <div class="container h-full">
                            <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div class="layer-slick1">
                                    <span class="ltext-101 cl2 respon2">
                                        Women Collection 2018
                                    </span>
                                </div>
                                <div class="layer-slick1">
                                    <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        NEW SEASON
                                    </h2>
                                </div>
                                <div class="layer-slick1" v-on:click="navChange('shop')">
                                    <router-link to="/shop" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">Shop Now</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-slick1 slide2">
                        <div class="container h-full">
                            <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div class="layer-slick1">
                                    <span class="ltext-101 cl2 respon2">
                                        Men New-Season
                                    </span>
                                </div>
                                <div class="layer-slick1">
                                    <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        Jackets & Coats
                                    </h2>
                                </div>
                                <div class="layer-slick1" v-on:click="navChange('shop')">
                                    <router-link to="/shop" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">Shop Now</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-slick1 slide3">
                        <div class="container h-full">
                            <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                <div class="layer-slick1">
                                    <span class="ltext-101 cl2 respon2">
                                        Men Collection 2018
                                    </span>
                                </div>
                                <div class="layer-slick1">
                                    <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                        New arrivals
                                    </h2>
                                </div>
                                <div class="layer-slick1" v-on:click="navChange('shop')">
                                    <router-link to="/shop" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">Shop Now</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </slick>
    </section>
</template>
<script>
import '@/../node_modules/slick-carousel/slick/slick.css';
import Slick from 'vue-slick';

export default {
    name: "LandingCarousel",
    components: { Slick },
    data() {
        return {
            slickOptions: {
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 1000,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: true,
                prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="arrow-slick1 next-slick1"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
                dots: false
            }
        };
    },
    methods:{
        navChange(currentNav) {
            this.$store.commit('SET_PATHNAME', currentNav);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide1 {
    background-image: url(../../assets/images/slide-04.jpg);
}

.slide2 {
    background-image: url(../../assets/images/slide-01.jpg);
}

.slide3 {
    background-image: url(../../assets/images/slide-03.jpg);
}
</style>