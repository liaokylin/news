<template>
<div>
  <van-tabs v-model:active="active" scrollspy sticky @change="onChange" swipeable>
    <van-tab v-for="item in cate" :title="item.name">
      内容 {{ item.name }}
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import {Tabs,Tab} from 'vant'
export default {
  name: 'Tab',
  components: {
    [Tabs.name]:Tabs,
    [Tab.name]: Tab
  },
  data() {
    return {
      active: 0,
      cate: [
        {
          name:'推荐',
          id: 1,
        },
        {
          name:'热榜',
          id: 1,
        },
        {
          name:'小说',
          id: 1,
        },
        {
          name:'视频',
          id: 1,
        },
        {
          name:'抗疫',
          id: 1,
        },
        {
          name:'问答',
          id: 1,
        },
        {
          name:'音乐',
          id: 1,
        },
        {
          name:'娱乐',
          id: 1,
        },
        {
          name:'问答',
          id: 1,
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
