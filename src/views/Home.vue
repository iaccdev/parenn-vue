<template>
    <div class="home">
    	<!-- Landing Carousel -->
        <LandingCarousel />
        <!-- Categories -->
        <LandingCategories />
        <!-- Store Overview -->
        <StoreOverview />
    </div>
</template>
<script>
// @ is an alias to /src
import LandingCarousel from "@/components/home/LandingCarousel.vue";
import LandingCategories from "@/components/home/LandingCategories.vue";
import StoreOverview from "@/components/home/StoreOverview.vue";

export default {
    name: "home",
    components: {
        LandingCarousel,
        LandingCategories,
        StoreOverview
    }
};
</script>