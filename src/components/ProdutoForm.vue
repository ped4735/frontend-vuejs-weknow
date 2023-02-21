<template>
    <div class="container card my-3">
        <div class="card-body p-1">
            <b-form inline class="my-3">
                <b-form-input id="input-1" class="mr-1 col-5" placeholder="Nome do Produto" v-model="form.descricao"></b-form-input>
                <b-button v-if="salvar" @click="save()" variant="success"> <b-icon icon="save" aria-hidden="true"></b-icon> Save</b-button>
                <b-button v-if="!salvar" @click="update()" variant="success"> <b-icon icon="save" aria-hidden="true"></b-icon> Update</b-button>
                <b-button @click="limparCampos()" variant="dark mx-1">Limpar</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
import backend_config from '@/configs/backend_config'
import eventBus from '@/eventBus'
import axios from 'axios'

    export default {
        data() {
            return {
                form: {},
                groups: [],
                salvar: true
            }
        },
        mounted () {
            eventBus.$on('populaCamposFormProdutos', (obj) => {
                this.populaCampos(obj)
            });
        },
        methods: {
            async save(){
                console.log(JSON.stringify(this.form))
                await axios.post(`http://${backend_config.ip}:${backend_config.port}/api/produtos`,this.form)
                this.limparCampos()
                eventBus.$emit('atualizarGridProdutos')
            },
            async update(){
                await axios.put(`http://${backend_config.ip}:${backend_config.port}/api/produtos/${this.form.id}`, this.form)
                this.limparCampos()
                eventBus.$emit('atualizarGridProdutos')
            },
            limparCampos(){
                this.salvar = true
                this.form = {}
            },
            populaCampos(obj){
                this.form = new Object({id: obj._id, descricao: obj.descricao})
                this.salvar = false
            },
        },
    }
</script>

<style scoped>

</style>