<template>
<div>
  <router-view/>
  <van-tabbar v-model="active" active-color="#ee0a24">
    <van-tabbar-item :to="(item.path)"   v-for="item in tabBars" :key="item.id" :icon="item.icon" @click="onClickTab(item.id)">{{item.name}}</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
export default {
  name: "TabBar",
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
  },
  props:['active'],
  data () {
    return {
      active:this.active,
      tabBars: [
        {
          path: '/',
          name: '首页',
          id: 0,
          icon: 'home-o'
        },
        {
          path: '/me',
          name: '我的',
          id: 1,
          icon: 'user-o'
        },
      ]
    }
  },
  methods:{
    onClickTab: function (index) {
      const idx = parseInt(index)
      let path = this.tabBars[idx].path
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>

</style>
