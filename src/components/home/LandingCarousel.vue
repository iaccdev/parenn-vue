<template>
  <section class="section-slide">
    <slick ref="slick" class="wrap-slick1" :options="slickOptions">
      <div class="item-slick1 slide1">
        <div class="container h-full">
          <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div class="layer-slick1">
              <span class="ltext-101 cl2 respon2">
                Nouvelle collection
              </span>
            </div>
            <div class="layer-slick1">
              <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                PARENN-HAITI
              </h2>
            </div>
            <div class="layer-slick1" v-on:click="navChange('shop')">
              <router-link
                to="/shop"
                class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >Achetez</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="item-slick1 slide2">
        <div class="container h-full">
          <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div class="layer-slick1">
              <span class="ltext-101 cl2 respon2">
                Nouvel arrivage
              </span>
            </div>
            <div class="layer-slick1">
              <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                PARENN-HAITI
              </h2>
            </div>
            <div class="layer-slick1" v-on:click="navChange('shop')">
              <router-link
                to="/shop"
                class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >Achetez</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="item-slick1 slide3">
        <div class="container h-full">
          <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
            <div class="layer-slick1">
              <span class="ltext-101 cl2 respon2">
                Nouvelle illustration
              </span>
            </div>
            <div class="layer-slick1">
              <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                PARENN HAITI
              </h2>
            </div>
            <div class="layer-slick1" v-on:click="navChange('shop')">
              <router-link
                to="/shop"
                class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                >Achetez</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </slick>
  </section>
</template>
<script>
import "@/../node_modules/slick-carousel/slick/slick.css";
import Slick from "vue-slick";

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
        prevArrow:
          '<button class="arrow-slick1 prev-slick1"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button class="arrow-slick1 next-slick1"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
        dots: false
      }
    };
  },
  methods: {
    navChange(currentNav) {
      this.$store.commit("SET_PATHNAME", currentNav);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide1 {
  background-image: url("https://img.freepik.com/free-photo/beautiful-african-female-feeling-grateful_181624-46352.jpg?w=1380&t=st=1670603728~exp=1670604328~hmac=40565a0c22d4ec32abd4c4b0402a9b6079eb2b2e1a1ad619811059c5808c59bf");
}

.slide2 {
  background-image: url("https://img.freepik.com/free-photo/african-woman-studio-white-wall-woman-white-shirt_1157-47613.jpg?w=1380&t=st=1670603788~exp=1670604388~hmac=11197be229b6aa48dc555a8720499205564d5a4e1c91c4f1c544fd11865709b1");
}

.slide3 {
  background-image: url("https://img.freepik.com/free-photo/pretty-black-woman-smiling-pointing-space-her-side_181624-34841.jpg?w=1380&t=st=1670603827~exp=1670604427~hmac=8dd0d23279e387b5fbfed21d85786e7c372adc6db9c6a620eced8e265dac1817");
}
</style>
