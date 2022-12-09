<template>
    <div class="container shopping-cart">
        <!-- breadcrumb -->
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link class="stext-109 cl8 hov-cl1 trans-04" to="/shop">
                Shop
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>
            <span class="stext-109 cl4">
                Shoping Cart
            </span>
        </div>
        <!-- Shoping Cart -->
        <form class="bg0 p-t-75 p-b-45">
            <div class="row">
                <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                    <div class="m-l-25 m-r--38 m-lr-0-xl">
                        <div class="wrap-table-shopping-cart">
                            <table class="table-shopping-cart">
                                <tr class="table_head">
                                    <th class="column-1">Product</th>
                                    <th class="column-2"></th>
                                    <th class="column-3">Price</th>
                                    <th class="column-4">Quantity</th>
                                    <th class="column-3">Total</th>
                                    <th class="column-3 text-center">Action</th>
                                </tr>
                                <tr class="table_row">
                                    <td class="column-1">
                                        <div class="how-itemcart1">
                                            <img src="@/assets/images/item-cart-04.jpg" alt="IMG">
                                        </div>
                                    </td>
                                    <td class="column-2">Fresh Strawberries</td>
                                    <td class="column-3"><span class="rsSymbol">&#8377;</span> 3600</td>
                                    <td class="column-4">
                                        <CustomInputNumber ref="item2" :currentNumItem="1" />
                                    </td>
                                    <td class="column-3"><span class="rsSymbol">&#8377;</span> 3600</td>
                                    <td class="column-3 removeItem"><button class="cl2 hov-cl1 trans-04"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                </tr>
                                <tr class="table_row">
                                    <td class="column-1">
                                        <div class="how-itemcart1">
                                            <img src="@/assets/images/item-cart-05.jpg" alt="IMG">
                                        </div>
                                    </td>
                                    <td class="column-2">Lightweight Jacket</td>
                                    <td class="column-3"><span class="rsSymbol">&#8377;</span> 1600</td>
                                    <td class="column-4">
                                        <CustomInputNumber ref="item2" :currentNumItem="1" />
                                    </td>
                                    <td class="column-3"><span class="rsSymbol">&#8377;</span> 1600</td>
                                    <td class="column-3 removeItem"><button class="cl2 hov-cl1 trans-04"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                </tr>
                            </table>
                        </div>
                        <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                            <div class="flex-w flex-m m-r-20 m-tb-5">
                                <input class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code">
                                <button class="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                                    Apply coupon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                    <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                        <h4 class="mtext-109 cl2 p-b-30">
                            Cart Totals
                        </h4>
                        <div class="flex-w flex-t bor12 p-b-15">
                            <div class="size-208">
                                <span class="stext-110 cl2">
                                    Total Items:
                                </span>
                            </div>
                            <div class="size-209">
                                <span class="mtext-110 cl2">
                                    2
                                </span>
                            </div>
                        </div>
                        <div class="flex-w flex-t bor12 p-t-15 p-b-15">
                            <div class="size-208">
                                <span class="stext-110 cl2">
                                    Total Cost:
                                </span>
                            </div>
                            <div class="size-209">
                                <span class="mtext-110 cl2">
                                    <span class="rsSymbol">&#8377;</span> 5200
                                </span>
                            </div>
                        </div>
                        <div class="flex-w flex-t p-t-15 p-b-15">
                            <div class="row">
                                <div class="col-sm-12 p-b-20">
                                    <span class="stext-110 cl2">
                                        Shipping Address:
                                    </span>
                                </div>
                                <div class="col-sm-12">
                                    <b-form-textarea placeholder="Enter Shipping Address" rows="6"></b-form-textarea>
                                </div>
                            </div>
                        </div>
                        <button class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import CustomInputNumber from "@/components/shop/CustomInputNumber.vue";
export default {
    name: "ShoppingCart",
    components: {
    	CustomInputNumber
    },
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