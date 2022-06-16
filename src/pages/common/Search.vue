<template>
<div>
  <van-search
      v-model="value"
      shape="round"
      background="red"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @focus="onFocus"
  />
</div>
</template>

<script>
import { ref } from 'vue'
import { Toast ,Search} from 'vant'
export default {
  name: "Search",
  components: {
    [Search.name]: Search
  },
  setup() {
    const value = ref('')
    const onSearch = (value) => Toast(value)
    const onFocus = ()=> {
    }
    return {
      value,
      onSearch,
      onFocus
    }
  }
}
</script>

<style scoped>

</style>
