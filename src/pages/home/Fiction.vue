<template>
<div>
  <div class="cate">
    <div v-for="item in cate" class="cate-item">
      <img :src="item.src" :key="item.name" class="cate-image">
      <div class="cate-name">{{item.name}}</div>
    </div>
  </div>
</div>
</template>

<script>
import { Image as VanImage } from 'vant'
export default {
  name: "Fiction",
  components:{
    [VanImage.name]:VanImage,
  },
  data:function (){
    return {
      cate:[
        {name:'男频','src':'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
        {name:'女频','src':'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
        {name:'分类','src':'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
        {name:'找书','src':'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
        {name:'账户','src':'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
      ],
    }
  }
}
</script>

<style scoped>
.cate{
  margin: .6rem 0;
  display: flex;
  justify-content: space-around;
}
.cate-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.cate-item {
  padding: .4rem;
}
.cate-name {
  text-align: center;
  margin: .6rem 0;
  color: #6C6C6C;
  font-size: 1rem;
}
</style>
