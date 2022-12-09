<template>
    <div class="container ProductDetail">
        <!-- breadcrumb -->
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link class="stext-109 cl8 hov-cl1 trans-04" to="/shop">
                Shop
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>
            <span class="stext-109 cl4">
                Lightweight Jacket
            </span>
        </div>
        <!-- Product Detail -->
        <section class="sec-product-detail bg0 p-t-65 p-b-60">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-7 p-b-30">
                        <div class="p-l-25 p-r-30 p-lr-0-lg">
                            <ProductDetailCarousel v-bind:productImages="imgList" />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5 p-b-30">
                        <div class="p-r-50 p-t-5 p-lr-0-lg">
                            <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                                Lightweight Jacket
                            </h4>
                            <span class="mtext-106 cl2">
                                $58.79
                            </span>
                            <p class="stext-102 cl3 p-t-23">
                                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                            </p>
                            <!--  -->
                            <div class="p-t-33">
                                <div class="flex-w flex-r-m p-b-10">
                                    <div class="size-203 flex-c-m respon6">
                                        Size
                                    </div>
                                    <div class="size-204 respon6-next">
                                        <div class="rs1-select2 bor8 bg0">
                                            <b-form-select v-model="selectedSize" :options="sizeOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-w flex-r-m p-b-10">
                                    <div class="size-203 flex-c-m respon6">
                                        Color
                                    </div>
                                    <div class="size-204 respon6-next">
                                        <div class="rs1-select2 bor8 bg0">
                                            <b-form-select v-model="selectedColor" :options="colorOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-w flex-r-m p-b-10">
                                    <div class="size-204 flex-w flex-m respon6-next">
                                        <CustomInputNumber ref="proDetailNumItem" :currentNumItem="numOfItems" @numChange="numOfItems=$event" />
                                        <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bor10 m-t-50 p-t-43 p-b-40 prod-description">
                    <div class="tab01">
                        <b-tabs content-class="p-t-43">
                            <b-tab title="Description" active>
                                <div class="how-pos2 p-lr-15-md">
                                    <p class="stext-102 cl6">
                                        Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                                    </p>
                                </div>
                            </b-tab>
                            <b-tab title="Additional information">
                                <div class="row">
                                    <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                        <ul class="p-lr-28 p-lr-15-sm">
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Weight
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    0.79 kg
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Dimensions
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    110 x 33 x 100 cm
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Materials
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    60% cotton
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Color
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    Black, Blue, Grey, Green, Red, White
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Size
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    XL, L, M, S
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Reviews">
                                <div class="row">
                                    <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                        <div class="p-b-30 m-lr-15-sm">
                                            <!-- Review -->
                                            <div class="flex-w flex-t p-b-68">
                                                <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                    <img src="@/assets/images/avatar-01.jpg" alt="AVATAR">
                                                </div>
                                                <div class="size-207">
                                                    <div class="flex-w flex-sb-m p-b-17">
                                                        <span class="mtext-107 cl2 p-r-20">
                                                            Ariana Grande
                                                        </span>
                                                        <span class="fs-18 cl11">
                                                            <i v-for="(item,index) in ratings" class="fa" :class="{'fa-star':index<3,'fa-star-o':index>=3}"></i>
                                                        </span>
                                                    </div>
                                                    <p class="stext-102 cl6">
                                                        Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- Add review -->
                                            <form class="w-full">
                                                <h5 class="mtext-108 cl2 p-b-7">
                                                    Add a review
                                                </h5>
                                                <div class="flex-w flex-m p-t-25 p-b-23">
                                                    <span class="stext-102 cl3 m-r-16">
                                                        Your Rating
                                                    </span>
                                                    <star-rating v-model="UserRating" :star-size="18" :increment="1" :show-rating="false" :active-color="'#f9ba48'" :border-color="'#f9ba48'" :inactive-color="'#ffffff'" :border-width="2"></star-rating>
                                                </div>
                                                <div class="row p-b-25">
                                                    <div class="col-12 p-b-5">
                                                        <label class="stext-102 cl3" for="review">Your review</label>
                                                        <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review"></textarea>
                                                    </div>
                                                </div>
                                                <button class="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ProductDetailCarousel from "@/components/shop/ProductDetailCarousel.vue";
import CustomInputNumber from "@/components/shop/CustomInputNumber.vue";
import StarRating from 'vue-star-rating'
export default {
    name: "ProductDetail",
    components: {
        ProductDetailCarousel,
        CustomInputNumber,
        StarRating
    },
    data() {
        return {
            imgList: ["product-detail-01.jpg", "product-detail-02.jpg", "product-detail-03.jpg"],
            ratings:[1,2,3,4,5],
            selectedSize: null,
            selectedColor: null,
            sizeOptions: [
                { value: null, text: 'Please select a size' },
                { value: 's', text: 'Size S' },
                { value: 'm', text: 'Size M' },
                { value: 'l', text: 'Size L' },
                { value: 'xl', text: 'Size XL' }
            ],
            colorOptions: [
                { value: null, text: 'Please select a color' },
                { value: 'red', text: 'Red' },
                { value: 'blue', text: 'Blue' },
                { value: 'white', text: 'White' },
                { value: 'grey', text: 'Grey' }
            ],
            numOfItems: 2,
            UserRating:0
        }
    }
}
</script>
<style scoped>
    .tab-content > .tab-pane{
        outline:none;
    }
</style>