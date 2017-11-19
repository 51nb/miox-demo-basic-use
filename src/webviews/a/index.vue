<template>
  <div class="example-page">
    <h1>A Page</h1>
    <a href="javascript:void(0);" v-go="'/b'">进入B页面</a>
  </div>
</template>
<script>
import { Component } from "miox-vue2x-classify";
@Component
export default class APage {}
</script>