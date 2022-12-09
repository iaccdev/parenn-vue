<template>
    <slick :ref="currentTabData.tabName" class="wrap-slick2" :options="slickOptions">
        <div v-for="(item,index) in productData" v-bind:key="index" class="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
            <div class="block2">
                <div class="block2-pic hov-img0">
                    <img v-bind:src="getImgPath(item.productImg)" v-bind:alt="item.productName">
                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bgViolet bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                        Quick View
                    </a>
                </div>
                <div class="block2-txt flex-w flex-t p-t-14">
                    <div class="block2-txt-child1 flex-col-l ">
                        <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            {{item.productName}}
                        </a>
                        <span class="stext-105 cl3">
                            {{item.productCost}}
                        </span>
                    </div>
                    <div class="block2-txt-child2 flex-r p-t-3">
                        <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                            <img class="icon-heart1 dis-block trans-04" src="@/assets/images/icons/icon-heart-01.png" alt="ICON">
                            <img class="icon-heart2 dis-block trans-04 ab-t-l" src="@/assets/images/icons/icon-heart-02.png" alt="ICON">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slick>
</template>
<script>
import '@/../node_modules/slick-carousel/slick/slick.css';
import Slick from 'vue-slick';

export default {
    name: "StoreOverviewCarousel",
    components: { Slick },
    data() {
        return {
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 6000,
                arrows: true,
                prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            },
            productData: this.currentTabData.product
        };
    },
    // All slick methods can be used too, example here
    methods: {
        getImgPath(imgName) {
            return imgName ? require('@/assets/images/'+imgName) : '';
        }
    },
    props: ["currentTabData"]
};
</script>