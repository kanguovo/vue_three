<script setup>
import { ref, watch } from 'vue';

const a=ref(0);
const A=()=>{
  a.value++;

}
const b=ref(0);
const B=()=>{
  b.value++;

}
const c=ref(0);
const C=()=>{
  b.value++;

}

// watch([a,b],
// (
//   [new_a,old_a], 
//   [new_b,old_b] ;
// )=> {
// console.log("回调函数"，[new_a,ole_a];  
//   [new_b,old_b]; )
// }
//注释第三四行错了应该是[new_a,new_b],[old_a,old_b] 并且第四行不要用分号
 watch([a,b],
(
  [new_a,new_b], 
  [old_a,old_b]
)=> {
console.log("回调函数",
  [new_a,new_b], 
  [old_a,old_b])
})//watch函数第二个参数是一个函数，})在最后不要写错，另外注意打印格式，写数组的时候不要写错
watch(c,(new_c,old_c)=>{
console.log("回调",new_c,old_c)
},{
immediate:true
}


)
</script>

<template>
  <div>
    <button @click="A">{{ a }}</button>
    <button @click="B">{{ b}}</button>
    <button @click="C">{{ c}}</button>
   
  </div>
</template>

