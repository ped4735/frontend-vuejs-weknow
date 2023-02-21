<template>
  <div id="app">
    <div v-if="loggin">
    <b-card-header header-bg-variant="info">
        <b-nav card-header tabs class="mt-2 ml-1">
          <b-nav-item to="/" exact exact-active-class="active">HOME</b-nav-item>
          <b-nav-item to="/unidades" exact exact-active-class="active">PRODUTOS</b-nav-item>
          <b-nav-item to="/about" exact exact-active-class="active">ABOUT</b-nav-item>
        </b-nav>
    </b-card-header>
    <div class="mt-4">
      <router-view/>
    </div>
    </div>
    <div v-else>
      <h1>FAVOR LOGAR NO SISTEMA</h1>
      <button class="btn btn-primary" @click="loggin = true">LOGAR</button>
    </div>
</div>
</template>

<script>
  export default{
    data(){
      return {
        loggin: true
      }
    }
  }
</script>

<style>
.nav a {
  font-weight: bold;
  color: var(--black);
}

.nav a.active{
  color: #17a2b8 !important;
}

.nav a:hover {
  color: #17a2b8 !important;
}

</style>
