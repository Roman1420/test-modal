<template>
  <div class="products">
    <div class="btn btn-close" @click="closeModal"></div>
    <div class="header">
      <div class="header__img" :style="{backgroundImage: 'url(/img/icon-' + product_type + '.svg)'}"></div>
      <div class="header__info">
        <div class="title" v-if="product_type === 1">Марихуана</div>
        <div class="title" v-if="product_type === 2">Кокаин</div>
        <div class="title" v-if="product_type === 3">Метамфитамин</div>
        <div class="desc">Покупка свертков</div>
      </div>
    </div>
    <div class="input-wrap">
      <range-slider
        class="slider"
        :min="min_count"
        :max="max_count"
        step="1"
        v-model.number="current_count">
      </range-slider>
      <div class="input-wrap__info">
        <div class="value">{{min_count}} шт.</div>
        <div class="value">{{max_count}} шт.</div>
      </div>
    </div>
    <div class="total-price">
      <div class="total-price__desc">Общая стоимость</div>
      <div class="total-price__value">${{cost*current_count}}</div>
    </div>
    <div class="btn btn-buy" @click="buyProduct(current_count)">Купить</div>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
export default {
  name: 'Products',
  props: {
    closeModal: Function,
    cost: Number,
    min_count: Number,
    max_count: Number,
    product_type: Number

  },
  components: {
    RangeSlider
  },
  data: function() {
    return{
      current_count: 1
    }
  },
  methods: {
    buyProduct: function(count) {
      // mp.trigger( "UI.DrugSeller.BuyProducts", count )
      console.log('mp.trigger( "UI.DrugSeller.BuyProducts")', count)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vue-range-slider/dist/vue-range-slider.scss';
.products{
  width: 424px;
  height: 345px;
  padding: 32px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  background: linear-gradient(264.63deg, rgba(21, 28, 38, .9) 0%, rgba(9, 13, 17, .9) 100%);
  color: #fff;
  border-top: 1px solid #59AFFF;
  box-sizing: border-box;
  &>div{
    z-index: 2;
  }
  &:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #59AFFF 0%, rgba(89, 175, 255, 0) 100%);
    opacity: 0.2;
    z-index: 1;
  }
  .btn-close{
    position: absolute;
    width: 10px;
    height: 10px;
    right: 32px;
    top: 40px;
    background-image: url('/img/close-modal.svg');
    background-size: contain;
    background-position: center;
    justify-content: center;
    z-index: 3;
    opacity: .5;
    &:hover{
      opacity: 1;
    }
  }
  .header{
    display: flex;
    align-items: center;
    &__img{
      width: 26px;
      height: 26px;
      margin-right: 22px;
      background-size: contain;
      background-position: center;
      justify-content: center;
    }
    &__info{
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      .title{
        font-size: 20px;
        line-height: 24px;
      }
      .desc{
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #A8BDD5;
      }
    }
  }
  .input-wrap{
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    .slider {
      width: 100%;
      height: 16px;
    }
    &__info{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .value{
        font-size: 14px;
        line-height: 17px;
        color: #8E99A6;
      }
    }
  }
  .total-price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &__desc{
      font-size: 18px;
    }
    &__value{
      font-size: 24px;
      color: #22D981;
      font-weight: bold;
    }
  }
  .btn-buy{
    width: 100%;
    height: 40px;
    min-height: 40px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.02em;
    background: linear-gradient(180deg, #28CA5F 0%, #188B3F 100%);
    border-radius: 40px;
    &:before{
      content: '';
      width: 16px;
      height: 16px;
      margin-right: 10px;
      background-image: url('/img/icon.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &:hover{
      background: linear-gradient(180deg, #3DE476 0%, #22AD51 100%);
    }
    &:active{
      background: linear-gradient(180deg, #147635 0%, #22AF52 100%);
    }
  }
}
</style> 

<style lang="scss">
.input-wrap{
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  .slider {
    width: 100%;
    height: 16px;
    .range-slider-rail, .range-slider-fill{
      box-sizing: border-box;
      border-radius: 16px;
    }
    .range-slider-rail{
      border: 1px solid rgba(255, 255, 255, .15);
      background: transparent;
      padding: 3px;
      height: 100%;
    }
    .range-slider-fill{
      left: 3px;
      height: calc(100% - 6px);
      background: linear-gradient(180deg, #59AFFF 0%, #3F88CC 100%);
    }
    .range-slider-knob{
      background: #59AFFF;
      box-shadow: 0px 0px 25px rgba(89, 175, 255, 0.75);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: none;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &:active{
        background: #7ABFFF;
      }
      &:before{
        content: '';
        width: 40px;
        height: 40px;
        position: absolute;
        border: 1px solid  rgba(255, 255, 255, .15);
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
