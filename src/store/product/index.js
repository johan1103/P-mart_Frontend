import productApi from '@/api/product';

export default {
    namespaced: true,
    state: {
        bestProducts: [],
        featuredProducts: [],
        products:[],
        totalProducts: 0,
        page: 0,
        priceRange: null
    },
    mutations: {
        setBestProducts(state, product){
            state.bestProducts = [].concat(product);
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
        },
        setPriceRange(state, priceRange){
            state.priceRange= priceRange;
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
        async setProducts({commit, state}, page=0){
            const response = await productApi.getProducts(page, state.priceRange);

            commit('setProducts',response.data.products);
            commit('setTotalProducts',response.data.total);
            commit('setPage',page);
        },
        async setPriceRange({commit,dispatch}, priceRange){
            commit('setPriceRange',priceRange);

            dispatch('setProducts');
        }
    }
}