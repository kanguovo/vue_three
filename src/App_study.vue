<script setup>
import { onMounted } from 'vue';

//生命周期函数
//本质上是回调函数，在特定时期下执行
onMounted(()=>{
  console.log("执行了1");
  
})
onMounted(()=>{
  console.log("执行了3");
  
})
onMounted(()=>{
  console.log("执行了2");
  
})
</script>
<template>
<div>

</div>

</template>