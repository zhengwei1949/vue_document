<template>
  <div id="app">
    <img src="./assets/logo.png">
    <goods-list>
      <div slot="bbb">
        <h3>Hello world</h3>
      </div>
      
    </goods-list>
    <router-view/>
    <a href="//cli.im/api/qrcode">生成本页二维码</a>
  </div>
</template>

<script>
import GoodsList from './views/GoodsList';
export default {
  name: 'app',
  components:{
    GoodsList
  }
}
</script>

<style>
#app {
  font-family:  'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
