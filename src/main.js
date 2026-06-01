 import { createApp } from 'vue'
//和java 里面的引入一样，这里引入核心函数
import App from './App.vue'
//将同一目录下面的app.vue文件导出并赋值为APP
createApp(App).mount('#app')
//creaatApp（根组件）创建示例，是vue3启动的入口函数
//.mount("#app")是将这里的内容挂载到id为app（index.html中div=app）的节点上