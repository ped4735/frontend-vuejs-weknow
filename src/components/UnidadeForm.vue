<!-- 
    TODO: Criar validação para as inputs.
-->
<template>
    <div class="container card my-3">
        <div class="card-body p-1">
            <b-form inline class="my-3">
                <b-form-input id="input-1" class="mr-1 col-5" placeholder="Nome da Unidade" v-model="form.nome"></b-form-input>
                <b-form-input id="input-2" class="mr-1 col-2" placeholder="Sigla da Unidade" v-model="form.sigla"></b-form-input>
                <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="groups" v-model="form.id_unidade_grupo"></b-form-select>
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
        created () {
            this.getGroups()
        },
        mounted () {
            eventBus.$on('populaCamposFormUnidade', (obj) => {
                this.populaCampos(obj)
            });
        },
        methods: {
            async getGroups() {
                const response = await axios.get(`http://${backend_config.ip}:${backend_config.port}/grupo_unidade`)
                //this.groups = response.data.map((e) => e.nome)
                this.groups = response.data.map((e) => new Object({value: e.id_unidade_grupo, text: e.nome}))
                //console.log(JSON.stringify(this.groups))
            },
            async save(){
                await axios.post(`http://${backend_config.ip}:${backend_config.port}/unidades`,this.form)
                console.log(JSON.stringify(this.form))
                this.limparCampos()
                eventBus.$emit('atualizarGridUnidades')
            },
            async update(){
                await axios.put(`http://${backend_config.ip}:${backend_config.port}/unidades/${this.form.id_unidade}`, this.form)
                this.limparCampos()
                eventBus.$emit('atualizarGridUnidades')
            },
            limparCampos(){
                this.salvar = true
                this.form = {}
                this.getGroups()
            },
            populaCampos(obj){
                this.form = new Object({id_unidade: obj.id_unidade, nome: obj.nome, sigla: obj.sigla, id_unidade_grupo: obj.id_unidade_grupo})
                this.salvar = false
                //console.log(JSON.stringify(this.form))
            },
        },
    }
</script>

<style scoped>

</style>