<template>
    <div class="container shopHome">
        <ShopIsotope v-bind:product-data="productlist" />
    </div>
</template>
<script>
import ShopIsotope from "@/components/shop/ShopIsotope.vue";
export default {
    name: "ShopHome",
    components: {
    	ShopIsotope
    },
    data() {
        return {
            productlist: [{
                    productImg: "product-01.jpg",
                    productName: "Esprit Ruffle Shirt",
                    productCost: "$16.64",
                    category:"women"
                },
                {
                    productImg: "product-02.jpg",
                    productName: "Herschel supply",
                    productCost: "$35.31",
                    category:"women"
                },
                {
                    productImg: "product-03.jpg",
                    productName: "Only Check Trouser",
                    productCost: "$25.50",
                    category:"men"
                },
                {
                    productImg: "product-04.jpg",
                    productName: "Classic Trench Coat",
                    productCost: "$75.00",
                    category:"women"
                },
                {
                    productImg: "product-05.jpg",
                    productName: "Front Pocket Jumper",
                    productCost: "$34.75",
                    category:"women"
                },
                {
                    productImg: "product-06.jpg",
                    productName: "Vintage Inspired Classic",
                    productCost: "$93.20",
                    category:"watch"
                },
                {
                    productImg: "product-07.jpg",
                    productName: "Shirt in Stretch Cotton",
                    productCost: "$52.66",
                    category:"women"
                },
                {
                    productImg: "product-08.jpg",
                    productName: "Pieces Metallic Printed",
                    productCost: "$18.96",
                    category:"women"
                },
                {
                    productImg: "product-09.jpg",
                    productName: "Converse All Star Hi Plimsolls",
                    productCost: "$75.00",
                    category:"shoes"
                },
                {
                    productImg: "product-10.jpg",
                    productName: "Herschel supply",
                    productCost: "$63.16",
                    category:"women"
                },
                {
                    productImg: "product-11.jpg",
                    productName: "T-Shirt with Sleeve",
                    productCost: "$18.49",
                    category:"men"
                },
                {
                    productImg: "product-12.jpg",
                    productName: "Mini Silver Mesh Watch",
                    productCost: "$86.85",
                    category:"belts"
                },
                {
                    productImg: "product-13.jpg",
                    productName: "quare Neck Back",
                    productCost: "$29.64",
                    category:"women"
                },
                {
                    productImg: "product-14.jpg",
                    productName: "Silver Mesh",
                    productCost: "$49.64",
                    category:"women"
                },
                {
                    productImg: "product-15.jpg",
                    productName: "Neck Back",
                    productCost: "$59.64",
                    category:"watch"
                },
                {
                    productImg: "product-16.jpg",
                    productName: "quare Neck",
                    productCost: "$29.64",
                    category:"women"
                }
            ]
        }
    }
}
</script>