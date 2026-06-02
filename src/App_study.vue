<script setup>

import { ref, watch } from 'vue';

const ab=ref({a:0,b:0})
const A=()=>{

//aa.a++;错了应该是aa.value.a++  ref返回的是一个对象（响应式对象）
ab.value.a++;

}
const B=()=>{


ab.value.b++;

}



// watch(ab,()=>{
// console.log("变化了")
//  },
// {deep:true }

// ）

//watch 第一个对象不用 .value

 //因为这里修改的是对象里面的属性值而非对象本身，所以要用deep

//ab无法指明是哪个属性改变引起的打印，需优化



watch(()=>ab.value.a,()=>{           //第一个参数 不可以 ab.value.a
console.log("变化了")
 },
//不用写deeple了
)


// const temp=ref(ab.value.b )   错误写法 导致 temp.value 和 ab.value.b是两个不同的个体了
// watch(temp,()=>{        
// console.log("变化了")
//  },
// {deep:true }

// )

</script>



<template>
  <div>
    <button @click="A">{{ ab.a }}</button>
    <button @click="B">{{ ab.b }}</button>
  </div>
</template>