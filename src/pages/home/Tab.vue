<template>
<div>
  <van-tabs v-model:active="active" scrollspy sticky @change="onChange" swipeable>
    <van-tab v-for="item in cate" :title="item.name">
      <div v-if="item.id ==2"><Hot/></div>
      <div v-else-if="item.id ==1"><Recommend/></div>
      <div v-else-if="item.id ==3"><Fiction/></div>
      <div v-else>内容 {{ item.name }}</div>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import Hot from './Hot.vue'
import Recommend from './Recommend.vue'
import {Tabs,Tab} from 'vant'
import Fiction from './Fiction.vue'
export default {
  name: 'Tab',
  components: {
    Fiction,
    Hot,
    Recommend,
    [Tabs.name]:Tabs,
    [Tab.name]: Tab
  },
  watch:{
    'info.name':function (val) {
      console.log(val,this.info.name)
    }
  },
  data() {
    return {
      active: 0,
      info:{
        name:'kylin',
      },
      listData:[
          [{name:'name1'},{name: 'name2'}],
          [{name:'name3'},{name: 'name4'}],
      ],
      cate: [
        {
          name:'推荐',
          id: 1,
        },
        {
          name:'热榜',
          id: 2,
        },
        {
          name:'小说',
          id: 3,
        },
        {
          name:'视频',
          id: 4,
        },
        {
          name:'抗疫',
          id: 5,
        },
        {
          name:'问答',
          id: 6,
        },
        {
          name:'音乐',
          id: 7,
        },
        {
          name:'娱乐',
          id: 8,
        },
        {
          name:'问答',
          id: 9,
        },
      ],
      list: [],
    }
  },
  methods:{
    onChange:function (index) {
      this.active = index
    }
  }
}
</script>

<style scoped>

</style>
