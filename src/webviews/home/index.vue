<template>
  <div class="home-page">
    <div class="logo center">
      <img src="http://7xtj22.com1.z0.glb.clouddn.com/miox-120x120.svg" width="50%" />
      <h1>Miox实战 - 基础使用</h1>
      <p class="tip">请使用chrome收集模式观看，或者手机上直接浏览。</p>
    </div>
    <section>
      <ol>
        <li>
          <div class="title">使用`Push`行为跳转页面：</div>
          <ul>
            <li><a href="javascript:void(0);" v-push="url">使用`v-push`指令跳转</a></li>
            <li><a href="javascript:void(0);" @click="vPushRedirect">使用自定义方法跳转</a></li>
            <li><a href="javascript:void(0);" v-push:push="url">使用`v-push:push`指令跳转</a></li>
            <li><a href="javascript:void(0);" @click="vPushAnimateRedirect">使用自定义方法及动画跳转</a></li>
          </ul>
        </li>
        <li>
          <div class="title">URL参数获取</div>
          <ul>
            <li><a href="javascript:void(0);" v-push="queryurl">获取query参数</a></li>
            <li><a href="javascript:void(0);" v-push="paramsurl">获取params参数</a></li>
          </ul>
        </li>
        <li>
          <div class="title">进入第三方链接</div>
          <ul>
            <li><a href="javascript:void(0);" v-link="baidu">进入baidu.com</a></li>
            <li>跳转完毕后回来，请点击其他页面的跳转查看是否不会出错</li>
          </ul>
        </li>
        <li>
          <div class="title">深入其他页面</div>
          <ul>
            <li><a href="javascript:void(0);" v-go="aurl">进入深度路由</a></li>
            <li><a href="javascript:void(0);" v-go="cd">进入路由套路由的模式，具体看源码路由设计。</a></li>
            <li><a href="javascript:void(0);" v-go="h">同一路由根据进入次数的奇偶性选择不同的页面。</a></li>
          </ul>
        </li>
      </ol>
    </section>
    <footer style="padding:2rem;">
      基本上开发所用到的路由足够了，需要用户在开发的时候酌情酌景来使用，达到解决一起路由的效果。
    </footer>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script>
import { Component } from "miox-vue2x-classify";
@Component
export default class HomePage {
  url = '/go-webview';
  queryurl = '/go-webview?a=1&b=2';
  paramsurl = '/go-webview/3/4';
  baidu = 'http://baidu.com';
  aurl = '/a';
  cd = '/c/d';
  h = '/h';

  async vPushRedirect() {
    await this.$push(this.url);
  }

  async vPushAnimateRedirect() {
    await this.$push(this.url, 'push');
  }
}
</script>