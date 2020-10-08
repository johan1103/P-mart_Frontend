<template>
  <div class="Home">
    <SlideBanner />
    <BestProductList />
    <FeaturedProductList /> 
  </div>
</template>

<script>
import SlideBanner from '@/components/home/SlideBanner.vue';
import BestProductList from '@/components/home/BestProductList.vue';
import FeaturedProductList from '@/components/home/FeaturedProductList';


export default {
  name: 'home',
  components: {
    SlideBanner,
    BestProductList,
    FeaturedProductList
  }
}
</script>
