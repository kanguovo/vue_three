<script setup>
import { reactive, ref } from 'vue';
const deta =0;
// const D = reactive(deta);
// 错误写法是因为reactive只可以接受数组或对象
const Deta = reactive({deta})
const a =()=>{
  Deta.deta++;
}

const deta_1=ref(0);
const b =()=>{

  deta_1.value++;
}

</script>
<template>
<div>
<button @click="a">{{ Deta.deta  }}</button>
</div>
<button @click="b">{{ deta_1 }}</button>
//deta_1.value
</template>

