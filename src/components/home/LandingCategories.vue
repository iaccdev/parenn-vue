<template>
    <div class="sec-banner bg0 p-t-80 p-b-50">
        <div class="container-fluid">
            <div class="p-b-32">
                <h3 class="ltext-105 cl5 txt-center respon1">
                    Categories
                </h3>
            </div>
            <div class="row">
                <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <!-- Block1 -->
                    <div class="block1 wrap-pic-w" @click="updateNav()">
                        <img src="@/assets/images/banner-01.jpg" alt="IMG-BANNER">
                        <router-link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div class="block1-txt-child1 flex-col-l">
                                <span class="block1-name ltext-102 trans-04 p-b-8">
                                    Women
                                </span>
                                <span class="block1-info stext-102 trans-04">
                                    Spring 2018
                                </span>
                            </div>
                            <div class="block1-txt-child2 p-b-4 trans-05">
                                <div class="block1-link stext-101 cl0 trans-09">
                                    Shop Now
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <!-- Block1 -->
                    <div class="block1 wrap-pic-w" @click="updateNav()">
                        <img src="@/assets/images/banner-02.jpg" alt="IMG-BANNER">
                        <router-link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div class="block1-txt-child1 flex-col-l">
                                <span class="block1-name ltext-102 trans-04 p-b-8">
                                    Men
                                </span>
                                <span class="block1-info stext-102 trans-04">
                                    Spring 2018
                                </span>
                            </div>
                            <div class="block1-txt-child2 p-b-4 trans-05">
                                <div class="block1-link stext-101 cl0 trans-09">
                                    Shop Now
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                    <!-- Block1 -->
                    <div class="block1 wrap-pic-w" @click="updateNav()">
                        <img src="@/assets/images/banner-03.jpg" alt="IMG-BANNER">
                        <router-link to="/shop" class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                            <div class="block1-txt-child1 flex-col-l">
                                <span class="block1-name ltext-102 trans-04 p-b-8">
                                    Accessories
                                </span>
                                <span class="block1-info stext-102 trans-04">
                                    New Trend
                                </span>
                            </div>
                            <div class="block1-txt-child2 p-b-4 trans-05">
                                <div class="block1-link stext-101 cl0 trans-09">
                                    Shop Now
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LandingCategories",
    methods: {
        updateNav() {
            this.$store.commit('SET_PATHNAME', 'shop');
        }
    }
};
</script>