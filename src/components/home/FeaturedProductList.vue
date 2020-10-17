<template>
	<!-- New Product -->
	<section class="newproduct bgwhite p-t-45 p-b-105">
		<div class="container">
			<div class="sec-title p-b-60">
				<h3 class="m-text5 t-center">
					Featured Products
				</h3>
			</div>

			<!-- Slide2 -->
			<div class="wrap-slick2">
				<div class="slick2" ref="slick">

					<template v-for="product in products">
						<Product :product="product" />
					</template>										
				</div>
			</div>

		</div>
	</section>
</template>

<script>

import { mapState } from 'vuex';
import Product from '@/components/Product.vue';



export default {
    computed: {
        ...mapState('product',{
            products: state=>state.featuredProducts
        })
	},
	methods:{

	},
    created(){
        this.$store.dispatch('product/setFeaturedProducts').then(()=>{
			$(this.$refs.slick).slick2();

// add animation checkicon
			$('.block2-btn-addcart').each(function(){
				var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
				$(this).on('click', function(){
				swal(nameProduct, "is added to cart !", "success");
				});
			});
		
			$('.block2-btn-addwishlist').each(function(){
				var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
				$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");
				});
			});
		})
	},
	components:{
		Product
	}
}
</script>