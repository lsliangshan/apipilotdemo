<template>
  <div class="main">
    <div class="pdf-cover">
      <div class="pdf-cover-inner cover">
        <h1>这是封面</h1>
      </div>
      <div class="pdf-cover-inner abstract">
        <h1>这是目录页面</h1>
      </div>
    </div>
    <div class="content"></div>
    <div class="content2"></div>
  </div>
</template>

<script setup lang="ts">
import { getRadioDetail } from '../../src/test/getRadioDetail'
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await getRadioDetail()
  console.log('>>>>', res)
})
</script>

<style scoped>
.pdf-cover {
  width: 794px;
  /* height: 1123px; */
  background-color: lightcyan;

}

.pdf-cover-inner {
  width: 100%;
  height: 1124px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.cover {
  background-color: lightcyan;
}

.abstract {
  background-color: lightblue;
}

.content {
  width: 100%;
  height: 1000px;
  background-color: green;
}

.content2 {
  width: 100%;
  height: 1000px;
  background-color: lightblue;
}
</style>
