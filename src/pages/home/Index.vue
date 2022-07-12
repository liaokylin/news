<template>
  <div>
    <Search/>
    <tab/>
    <TabBar :active="active"/>
  </div>
</template>

<script>

import Search from '@/pages/common/Search.vue'
import Tab from '@/pages/home/Tab.vue'
import TabBar from '@/pages/common/TabBar.vue'

export default {
  components: {
    TabBar,
    Tab,
    Search
  },
  data() {
    return {
      active:0
    };
  },
  methods: {

  }
};
</script>

<style lang="less">

</style>
