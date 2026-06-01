<script setup>
import { computed, ref } from 'vue';

const a=ref([1,2,3,4,5,6,7,8,9]);
const ar=computed(()=>{

  return a.value.filter(item=>item>2)
})
</script>

<template>
  <div>
           {{ a }}
  </div>
  <div>
    {{ ar }}
  </div>
</template>