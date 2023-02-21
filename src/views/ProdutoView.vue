<template>
    <div>
        <ProdutoForm></ProdutoForm>
        <ProdutoList></ProdutoList>
    </div>
</template>

<script>

    import ProdutoList from '@/components/ProdutoList.vue';
    import ProdutoForm from '@/components/ProdutoForm.vue';

    export default {
        components: { ProdutoList, ProdutoForm }
    }
</script>

<style scoped>

</style>