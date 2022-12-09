<template>
    <div class="wrap-slick3 flex-sb flex-w">
        <div class="wrap-slick3-dots">
            <ul class="slick3-dots" role="tablist">
                <li :class="{'slick-active':currentSlideIndex==index}" @click="handleDots(index)" v-for="(item,index) in productImages" :key="index">
                    <img :src="getImgPath(item)">
                    <div class="slick3-dot-overlay"></div>
                </li>
            </ul>
        </div>
        <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
        <slick ref="productViewslick" class="slick3 gallery-lb" :options="slickOptions" @beforeChange="handleBeforeChange">
            <div class="item-slick3" v-for="(item,index) in productImages" :key="index">
                <div class="wrap-pic-w pos-relative">
                    <img :src="getImgPath(item)" alt="IMG-PRODUCT">
                    <span class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04 wish-btn" :class="{'wishActive':wishActive}" @click="updateWishStatus()">
                        <i class="fa fa-heart-o"></i>
                    </span>
                </div>
            </div>
        </slick>
    </div>
</template>
<script>
import '@/../node_modules/slick-carousel/slick/slick.css';
import Slick from 'vue-slick';
export default {
    name: "ProductDetailCarousel",
    components: {
        Slick
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 6000,
                arrows: true,
                appendArrows: '.wrap-slick3>.wrap-slick3-arrows',
                prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
            },
            currentSlideIndex: "0",
            wishActive: false
        }
    },
    methods: {
        handleDots(index) {
            this.$refs.productViewslick.goTo(index);
        },
        getImgPath(imgName) {
            return imgName ? require('@/assets/images/' + imgName) : '';
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            this.currentSlideIndex = nextSlide;
        },
        updateWishStatus(){
            this.wishActive = !this.wishActive;
        }
    },
    props: ["productImages"]
}
</script>
<style scoped>
.wish-btn {
    cursor: pointer;
}
.wishActive {
    border-color: #717fe0;
    background-color: #717fe0;
    color: #fff;
}
</style>