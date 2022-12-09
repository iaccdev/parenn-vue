<template>
    <div class="container wish-list">
        <!-- breadcrumb -->
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link class="stext-109 cl8 hov-cl1 trans-04" to="/shop">
                Shop
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>
            <span class="stext-109 cl4">
                Wish List
            </span>
        </div>
        <!-- Shoping Cart -->
        <form class="bg0 p-t-75 p-b-45">
            <div class="row">
                <div class="col-lg-10 col-xl-10 m-b-50">
                    <div class="m-l-25 m-r--38 m-lr-0-xl">
                        <div class="wrap-table-shopping-cart">
                            <table class="table-shopping-cart">
                                <tr class="table_head">
                                    <th class="column-1">Product</th>
                                    <th class="column-2"></th>
                                    <th class="column-3">Price</th>
                                    <th class="column-5 text-center">Actions</th>
                                </tr>
                                <tr class="table_row">
                                    <td class="column-1">
                                        <div class="how-itemcart1">
                                            <img src="@/assets/images/item-cart-04.jpg" alt="IMG">
                                        </div>
                                    </td>
                                    <td class="column-2">Fresh Strawberries</td>
                                    <td class="column-3">$ 36.00</td>
                                    <td class="column-5 text-center">
                                        <button class="m-lr-10 stext-101 cl0 size-101 bg1 bor14 hov-btn1 p-lr-15 trans-04 pointer">
                                            Add to Cart
                                        </button>
                                        <button class="m-lr-10 stext-101 cl0 size-101 bg5 bor14 hov-btn1 p-lr-15 trans-04 pointer">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                                <tr class="table_row">
                                    <td class="column-1">
                                        <div class="how-itemcart1">
                                            <img src="@/assets/images/item-cart-05.jpg" alt="IMG">
                                        </div>
                                    </td>
                                    <td class="column-2">Lightweight Jacket</td>
                                    <td class="column-3">$ 16.00</td>
                                    <td class="column-5 text-center">
                                        <button class="m-lr-10 stext-101 cl0 size-101 bg1 bor14 hov-btn1 p-lr-15 trans-04 pointer">
                                            Add to Cart
                                        </button>
                                        <button class="m-lr-10 stext-101 cl0 size-101 bg5 bor14 hov-btn1 p-lr-15 trans-04 pointer">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "WishList",
    components: {},
    data() {
        return {

        }
    }
}
</script>
<style scoped>
@media (max-width: 1600px) {
    .container {
        max-width: 1200px;
    }
}
</style>