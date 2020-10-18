<template>

<div>

   <ul class="p-b-54">
        <li class="p-t-4">
                <a href="#" class="s-text13 active1" @click="setCategory(0)">
                    All
                </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(1)">
                Women
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(2)">
                Men
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(3)">
                Kids
            </a>
        </li>

        <li class="p-t-4">
            <a href="#" class="s-text13" @click="setCategory(4)">
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