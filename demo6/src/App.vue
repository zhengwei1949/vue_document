<template>
  <div id="app">
    <img src="./assets/logo.png">
    <goods-list>
      <div slot="bbb">
        <h3>Hello world</h3>
      </div>
      
    </goods-list>
    <button @click="openPicker">click</button>
      <mt-datetime-picker
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
  ref="picker"
  >
</mt-datetime-picker>
    <router-view/>
    <a href="//cli.im/api/qrcode">生成本页二维码</a>
  </div>
</template>

<script>
import Vue from 'vue'
import GoodsList from './views/GoodsList';
import { Toast } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
export default {
  name: 'app',
  created(){
    Toast('提示信息');
    if(false){
      require.ensure('./m.js',function(require){
        var m = require('./m.js');
        console.log(m)
      })
      import('./m.js').then(function(m){
        console.log(m);
      }).catch(function(err){
        console.log('err')
      })
    }
  },
  components:{
    GoodsList
  },
  data(){
    return {
      pickerVisible:false
    }
  },
  methods:{
    openPicker() {
        this.$refs.picker.open();
      }
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
