<template>
    <div>
        <UnidadeForm></UnidadeForm>
        <UnidadesList></UnidadesList>
    </div>
</template>

<script>

    import UnidadesList from '@/components/UnidadesList.vue';
    import UnidadeForm from '@/components/UnidadeForm.vue';

    export default {
        components: { UnidadesList, UnidadeForm }
    }
</script>

<style scoped>

</style>