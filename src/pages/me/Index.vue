<template>
<div class="container">
  <div class="top">
    <van-icon name="scan" class="scan"/>
    <van-icon name="setting-o" class="setting"/>
  </div>
  <div class="login-panel">
    <div class="login-btn">
      <span>登陆</span>
    </div>
  </div>
  <div class="user-record">
    <div class="icon-box">
      <van-icon name="volume-o" class="icon"/>
      <span class="icon-text">消息通知</span>
    </div>
    <div class="icon-box">
      <van-icon name="like-o" class="icon"/>
      <span class="icon-text">收藏</span>
    </div>
    <div class="icon-box">
      <van-icon name="clock-o" class="icon"/>
      <span class="icon-text">浏览历史</span>
    </div>
    <div class="icon-box">
      <van-icon name="down" class="icon"/>
      <span class="icon-text">下载管理</span>
    </div>
  </div>
  <div class="post">
    <span class="slogan">记录新鲜事</span>
    <van-button plain hairline round icon="plus" type="primary" size="mini" color="red" class="post-btn">发布</van-button>
  </div>
  <div class="services">
    <div class="service-top">
      <span class="more-services">更多服务</span>
      <span class="all-service">全部<van-icon name="arrow"/></span>
    </div>
    <div class="service-items">
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">大字模式</span>
      </div>
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">客服中心</span>
      </div>
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">钱包</span>
      </div>
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">广告推广</span>
      </div>
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">免流量服务</span>
      </div>
      <div class="service-item">
        <van-icon name="like-o" class="icon-service"/>
        <span class="icon-text">安全中心</span>
      </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">隐私设置</span>
        </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">头条公益</span>
        </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">评论</span>
        </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">点赞</span>
        </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">借钱</span>
        </div>
        <div class="service-item">
          <van-icon name="like-o" class="icon-service"/>
          <span class="icon-text">夜间模式</span>
        </div>
    </div>
  </div>

  <TabBar :active="active"/>
</div>
</template>

<script>
import TabBar from '@/pages/common/TabBar.vue'
import { Icon,Button } from 'vant';
export default {
  name: "index",
  components: {
    TabBar,
    [Icon.name]:Icon,
    [Button.name]:Button,
  },
  data() {
    return {
      active:1
    };
  },
}
</script>

<style scoped lang="scss">
.top {
  font-size: 1.6rem;
}
.setting {
  float: right;
  padding: 0.6rem;
}
.scan {
  padding: 0.6rem;
}
.login-panel {
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
}
.login-btn {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: #ff4444;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-text {
  display: block;
  font-size: 0.1rem;
  margin-top: 0.4rem;
}
.user-record {
  padding: 0.8rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 3%;
}
.icon {
  color: #ff4444;
  font-size: 1.5rem;
}
.icon-service {
  color:#7B7B7B;
  font-size: 1.5rem;
}
.icon-box {
  text-align: center;
}
.post {
  padding: 0.8rem;
  margin-top: 1.4rem;
  background-color: #ffffff;
  border-radius: 3%;
}
.slogan {
  font-size: 0.6rem;
  padding-left: 1.6rem;
}
.post-btn {
  float: right;
  margin-right: 1.4rem;
  padding-right: 0.6rem;
}
.services {
  margin-top: 1.6rem;
  padding: 0.8rem;
  background: #ffffff;
  border-radius: 3%;
  margin-bottom: 5rem;
}
.service-items {
  display: flex;
  flex-wrap: wrap;
}
.service-item {
  width: 25%;
  margin-top: 1rem;
  text-align: center;
}
.more-services {
  font-size: 0.8rem;
  margin-left: 1rem;
}
.all-service {
  float: right;
  font-size: 0.1rem;
  margin-right: 1rem;
  color:#6C6C6C;
}
</style>
