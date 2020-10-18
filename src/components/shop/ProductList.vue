<template>
    
    <div class="row">
        <template v-for="product in products">
            <div v-if="product.category===category" class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                <Product :product="product" />
            </div>
        </template>

    </div>




</template>

<script>

import { mapState } from 'vuex';

import Product from '@/components/Product.vue';


export default {
    props: ['category'],
    computed: {
        ...mapState('product',{
            products: state=>state.products
        })
    },

    created(){
        this.$store.dispatch('product/setProducts').then(()=>{
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
    components: {
        Product
    }
}
</script>