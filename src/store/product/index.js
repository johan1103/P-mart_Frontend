import productApi from '@/api/product';

export default {
    namespaced: true,
    state: {
        bestProducts: [],
        featuredProducts: [],
        products:[],
        totalProducts: 0,
        page: 0
    },
    mutations: {
        setBestProducts(state, products){
            state.bestProducts = [].concat(products);
        },
        setFeaturedProducts(state, products){
            state.featuredProducts=[].concat(products);
        },
        setProducts(state, products){
            state.products=[].concat(products);
        },
        setTotalProducts(state, totalCount){
            state.totalProducts= totalCount;
        },
        setPage(state, page){
            state.page= page;
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
        },
        async setProducts({commit}, page=0){
            const response = await productApi.getProducts(page);

            commit('setProducts',response.data.products);
            commit('setTotalProducts',response.data.total);
            commit('setPage',page);
        }
    }
}