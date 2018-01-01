<template>
  <div>
      <div><button @click="inc">+</button></div>
    <div><button @click="dec">-</button></div>
    <h3>{{num}}</h3>
  </div>
</template>
<script>
export default {
  data(){
      return {
          msg:'hello vue'
      }},
      methods:{
          inc(){
              this.$emit('inc');
          },
          dec(){
              this.$emit('dec');
          }
      },
      props:["num"]
  }

</script>

<style>

</style>

