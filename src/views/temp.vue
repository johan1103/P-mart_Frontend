<template>
    <div>
        <span>
        {{products[0]}}
        </span>
        <div>
            
        </div>
        <span>
        {{products[1]}}
        </span>
    </div>
</template>

<script>
export default{
    name: 'App',
    data(){
        return{
            products : ['역삼동 원룸','천호동원룸','마포구원룸']
        }
    }
}
</script>
