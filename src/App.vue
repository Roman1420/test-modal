<template>
  <div id="app">
    <products 
      v-if="products.show"
      :closeModal="closeModal"
      :product_type="products.product_type"
      :cost="products.cost"
      :min_count="products.min_count"
      :max_count="products.max_count"
    />
    <positions 
      v-if="positions.show"
      :closeModal="closeModal"
      :cost="positions.cost"
      :count="positions.count"
    />
  </div>
</template>

<script>
import Products from './components/Products.vue'
import Positions from './components/Positions.vue'
import Vue from 'vue'
const bus = new Vue()
window.$bus = bus
export default {
  name: 'App',
  components: {
    Products,
    Positions
  },
  data: function() {
    return {
      products: {
        show: false,
        product_type: null,
        cost: null,
        min_count: null,
        max_count: null
      },
      positions: {
        show: false,
        cost: null,
        count: null,
      }
    }
  },
  methods: {
    ShowProducts: function( show, product_type, cost, min_count, max_count) {
      this.products.show = show
      this.products.product_type = product_type
      this.products.cost = cost
      this.products.min_count = min_count
      this.products.max_count = max_count
      return
    },
    ShowPositions: function( show, cost, count ) {
      this.positions.show = show
      this.positions.cost = cost
      this.positions.count = count
    },
    closeModal: function() {
      // window.mp.trigger( "UI.DrugSeller.Close" )
      console.log('window.mp.trigger( "UI.DrugSeller.Close" )')
    },
  },
  created() {
    bus.$on("ShowProducts", this.ShowProducts);
  },
  destroyed() {
    bus.$off("ShowProducts", this.ShowProducts);
  },
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
