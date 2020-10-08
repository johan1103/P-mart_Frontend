import productApi from '@/api/product';

export default {
    namespaced: true,
    state: {
        bestProducts: [],
        featuredProducts: []
    },
    mutations: {
        setBestProducts(state, products){
            state.bestProducts = [].concat(products);
        },
        setFeaturedProducts(state, products){
            state.featuredProducts=[].concat(products);
        }
    },
    actions: {
        async setBestProducts({commit}){
            const response = await productApi.getBestProducts();
            commit('setBestProducts',response.data);
        },
        async setFeaturedProducts({commit}){
            const response = await productApi.getFeaturedProducts();
            commit('setFeaturedProducts',response.data);
        }
    }
}