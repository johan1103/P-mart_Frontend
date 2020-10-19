<template>

<div>

   <ul class="p-b-54">
        <li class="p-t-4">
                <a href="#" class="s-text13 active1" @click="setCategory(0)" active-class="sale-noti" exact>
                    All
                </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(1)" active-class="sale-noti" exact>
                Women
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(2)" active-class="sale-noti" exact>
                Men
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(3)" active-class="sale-noti" exact>
                Kids
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(4)" active-class="sale-noti" exact>
                Accesories
            </a>
        </li>
    </ul>

</div>

</template>

<script>
export default {
    methods: {
        setCategory(category){
            this.$store.dispatch('product/setCategory',category);
        }
    }
}
</script>