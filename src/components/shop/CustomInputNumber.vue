<template>
    <div class="wrap-num-product flex-w m-r-20 m-tb-10">
        <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" @click="decrementItem()">
            <i class="fa fa-minus" aria-hidden="true"></i>
        </div>
        <input class="mtext-104 cl3 txt-center num-product" type="number" v-model="numOfItems" />
        <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" @click="incrementItem()">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "CustomInputNumber",
    data() {
        return {
            numOfItems: this.currentNumItem
        }
    },
    methods: {
        incrementItem() {
            this.numOfItems++;
            this.$emit('numChange',this.numOfItems);
        },
        decrementItem() {
            this.numOfItems > 1 ? this.numOfItems-- : '';
            this.$emit('numChange',this.numOfItems);
        }
    },
    props:["currentNumItem"]
}
</script>