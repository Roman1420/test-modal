<template>
  <div id="app">
    <component 
      :is="currentPage"
      :closeModal="closeModal"
    />
  </div>
</template>

<script>
import Products from './components/Products.vue'
import Positions from './components/Positions.vue'

export default {
  name: 'App',
  components: {
    Products,
    Positions
  },
  data: function() {
    return {
      currentPage: 'Products'
    }
  },
  methods: {
    setCurrentPage: function(page) {
      this.currentPage = page
    },
    closeModal: function() {
      // window.mp.trigger( "UI.DrugSeller.Close" )
      console.log('window.mp.trigger( "UI.DrugSeller.Close" )')
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #3F4048;
}
</style>

<style lang="scss">
@font-face {
  font-family: Rubik-Regular;
  src: url(../fonts/Rubik-Regular.ttf);
}
#app {
  font-family: Rubik-Regular;
  div{
    box-sizing: border-box;
  }
  .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    &:hover{
      transition: .2s;
    }
  }
}
</style>
