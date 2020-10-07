import productApi from '@/api/product';

export default {
    namespaced: true,
    state: {
        bestProducts: []
    },
    mutations: {
        setBestProducts(state, products){
            state.bestProducts = [].concat(products);
        }
    },
    actions: {
        async setBestProducts({commit}){
            const response = await productApi.getBestProducts();
            commit('setBestProducts',response.data);
        }
    }
}