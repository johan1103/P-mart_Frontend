import http from './http';

export default{
    async getBestProducts(){
        return http.get('api/best-product.json');
    },
    async getFeaturedProducts(){
        return http.get('api/featured-product.json');
    }
}