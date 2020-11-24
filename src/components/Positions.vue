<template>
  <div class="positions">
    <div class="btn btn-close" @click="closeModal"></div>
    <div class="title">Купить координаты сбыта</div>
    <div class="total-price">
      <div class="total-price__value"><span class="cost">${{cost}}</span> / <span class="count">{{count}}шт.</span></div>
      <div class="total-price__desc">Стоимость</div>
    </div>
    <div class="btn btn-buy" @click="buyProduct(count)">Оплатить наличными</div>
    <div class="btn btn-cancel">Отмена</div>
  </div>
</template>

<script>
export default {
  name: 'Positions',
  props: {
    closeModal: Function,
    cost: Number,
    count: Number
  },
  
  methods: {
    buyProduct: function(count) {
      // mp.trigger( "UI.DrugSeller.BuyPositions" )
      console.log('mp.trigger( "UI.DrugSeller.BuyPositions")', count)
    }
  }
}
</script>

<style lang="scss" scoped>
.positions{
  width: 535px;
  height: 318px;
  padding: 32px;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  .title{
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #E1E7EE;
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
  .total-price{
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    &__desc{
      font-size: 14px;
      line-height: 17px;
      margin-top: 3px;
      text-transform: uppercase;
      color: #8E99A6;
    }
    &__value{
      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
      .cost{
        color: #22D981;   
      }
      .count{
        color: rgba(89,175,255,1)
      }
    }
  }
  .btn-buy, .btn-cancel{
    width: 100%;
    height: 40px;
    min-height: 40px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.02em;
    border-radius: 40px;
  }
  .btn-buy{
    background: linear-gradient(180deg, #28CA5F 0%, #188B3F 100%);
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
  .btn-cancel{
    border: 1px solid rgba(255, 255, 255, .15);
    background: rgba(255, 255, 255, 0);
    &:hover{
      background: rgba(255, 255, 255, 0.05);
    }
    &:active{
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
}
</style> 
