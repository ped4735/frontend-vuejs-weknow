<template>
  <div class="container">
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col">Produto</th>
                <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="item in items" :key="item.id_unidade">
                <td>{{item.descricao}}</td>
                <td class="text-center"><b-button @click="updateUnidade(item);" class="btn-dark p-1 mr-3"><b-icon icon="wrench" aria-hidden="true"></b-icon></b-button>
                <b-button v-b-modal.modal-delete @click="selected_item = item" class="btn-danger p-1"><b-icon icon="trash-fill" aria-hidden="true"></b-icon></b-button></td>
            </tr>
        </tbody>
    </table>

    <!-- modal-delete -->
    <div>
        <b-modal id="modal-delete" title="DELETE" title-class="text-white text-bold" hide-footer header-bg-variant="danger">
            <p class="my-4">Deseja excluir o produto <strong>{{selected_item.descricao}}</strong>?</p>
            <hr>
            <div class="text-right">
                <b-button @click="deleteUnidade(selected_item); $bvModal.hide('modal-delete');" class="btn-danger p-1"><b-icon icon="trash-fill" aria-hidden="true"></b-icon> Confirmar</b-button>
                <b-button class="p-1 ml-2 btn-dark" @click="$bvModal.hide('modal-delete');">Cancelar</b-button>
            </div>
        </b-modal>
    </div>

  </div>

  

</template>

<script>
    import backend_config from '@/configs/backend_config'
    import axios from 'axios'
    import eventBus from '@/eventBus'

    export default {
        data() {
            return {
                items: [],
                selected_item: {},
            }
        },
        created(){
            this.getProdutos() 
            /*
                Cria evento para ser chamado por outros componentes
                https://stackoverflow.com/questions/42990308/vue-js-how-to-call-method-from-another-component
            */
           eventBus.$on('atualizarGridProdutos', () => {
                this.getProdutos()
           })
        },
        methods:{
            async getProdutos(){
                try {
                    const response = await axios.get(`http://${backend_config.ip}:${backend_config.port}/api/produtos`)
                    this.items = response.data
                    console.log(this.items)
                } catch (error) {
                    console.log(error)
                }
            },
            showLog(obj){
                console.log(JSON.stringify(obj))
            },
            updateUnidade(obj){
                eventBus.$emit('populaCamposFormProdutos', obj)
            },
            async deleteUnidade(obj){
                try {
                    const response = await axios.delete(`http://${backend_config.ip}:${backend_config.port}/api/produtos/${obj._id}`)
                    this.items = response.data
                } catch (error) {
                    console.log(error)
                }

                this.getProdutos()
            }
        }
    }
</script>