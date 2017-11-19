<template>
  <div class="example-page">
    <h1>使用Go方法跳转</h1>
    <ul>
      <li><a href="javascript:void(0);" v-go="-1">指令`go(-1)`返回首页</a></li>
      <li><a href="javascript:void(0);" v-go="home">指令`go('/')`返回首页</a></li>
      <li><a href="javascript:void(0);" @click="goBackWithNumber">方法`go(-1)`返回首页</a></li>
      <li><a href="javascript:void(0);" @click="goBackWithUrl">方法`go('/')`返回首页</a></li>
    </ul>
    <hr />
    <ul>
      <li><a href="javascript:void(0);" @click="alertMessage('query', 'a')">获取`query.a`</a></li>
      <li><a href="javascript:void(0);" @click="alertMessage('query', 'b')">获取`query.a`</a></li>
      <li><a href="javascript:void(0);" @click="alertMessage('params', 'a')">获取`params.a`</a></li>
      <li><a href="javascript:void(0);" @click="alertMessage('params', 'b')">获取`params.b`</a></li>
    </ul>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script>
import { Component } from "miox-vue2x-classify";
@Component({
  props: {
    query: Object,
    params: Object
  }
})
export default class goWebviewPage {
  home = '/';

  async goBackWithNumber() {
    await this.$go(-1);
  }

  async goBackWithUrl() {
    await this.$go('/');
  }

  alertMessage(type, key) {
    let value;
    switch(type) {
      case 'query': value = this.query[key]; break;
      case 'params': value = this.params[key]; break;
    }
    if (value) {
      alert(`${key}=${value}`);
    }
  }
}
</script>