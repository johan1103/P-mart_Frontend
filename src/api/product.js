import http from './http';

export default{
    async getBestProducts(){
        return http.get('api/best-product.json');
    }
}