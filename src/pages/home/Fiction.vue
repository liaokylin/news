<template>
<div>
  <van-config-provider :theme-vars="themeVars">
  <div class="cate">
    <div v-for="item in cate" class="cate-item">
      <img :src="item.src" :key="item.name" class="cate-image">
      <div class="cate-name">{{item.name}}</div>
    </div>
  </div>
  <div class="sort">
    <div class="sort-top">
      <span class="sort-name">排行榜</span>
      <span class="sort-more">更多</span>
    </div>
    <div class="sort-by">
      <van-button plain round type="default" size="small" v-for="item in sort.label" :key="item.id" @click="changeItemHandle(item.id)">{{ item.name }}</van-button>
    </div>
    <div class="sort-items">
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span class="item-index">1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
      <div class="sort-item">
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="item-content">
          <div><span>1</span><span>九龙地神</span></div>
          <div>2044万热度</div>
        </div>
      </div>
    </div>
  </div>
  </van-config-provider>
</div>
</template>

<script>
import { Image as VanImage } from 'vant'
import { Button } from 'vant'
import { ConfigProvider } from 'vant'
export default {
  name: "Fiction",
  components:{
    [VanImage.name]:VanImage,
    [Button.name]:Button,
    [ConfigProvider.name]:ConfigProvider
  },
  setup() {
    const themeVars = {
      buttonSmallFontSize: '14px',
      buttonSmallPadding: '0 15px'
    };
    return {
      themeVars
    }
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
      sort:{
        activeColor:'',
        label:[{name:'推荐榜',id:1},{name:'完结榜',id:2},{name:'热搜榜',id:3},{name:'听书榜',id:4}],
        items:{
          '1':[
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
              {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
             {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
             {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
          ],
          '2':[
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
          ],
          '3':[
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
          ],
          '4':[
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
            {name:'九龙地神',image:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg','hot':'2044万热度'},
          ],
        }
      },
    }
  },
  methods:{
    changeItemHandle(id) {
      console.log(id)
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
.sort-top {
  display: flex;
  justify-content: space-between;
}
.sort-name {
  margin-left: 1rem;
  font-size: 1.2rem;
}
.sort-more{
  margin-right: 1rem;
  color: #7B7B7B;
}

.sort-by {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}
.sort-items {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.sort-item {
  box-sizing: border-box;
  width: 50%;
  display: flex;
  padding: .2rem;
}
.item-index {
  padding: 0 .2rem;
}
.item-content {
  margin-left: .8rem;
}
</style>
