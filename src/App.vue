<script setup>
import NavBar from "./components/NavBar.vue";
import TimeTable from "./components/TimeTable.vue";
import ReportOnline from "./components/ReportOnline.vue";
import Handbook from "./components/CourseHandbook.vue";
import Presentation from "./components/Presentation.vue";
import HomeWork from "./components/HomeWork.vue";
import Handle from "./components/Handle.vue";
import Date from "./components/Date.vue";
import Profile from "./components/SchoolProfile.vue";
import Line from "./components/Line.vue";
import Precautions from "./components/OtherPrecautions.vue";
import Foooter from "./components/Footer.vue";

import { req, data_arrive_model_control } from "./utils.js";

req();
</script>

<template>
  <div
    class="h-mobile-screen fixed inset-0 flex w-screen items-center justify-center bg-black/60"
    v-if="data_arrive_model_control.is_open"
  >
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div
    class="h-mobile-screen w-screen overflow-x-hidden bg-[#FAF7EF] lg:h-screen"
  >
    <!-- nav bar -->
    <NavBar />
    <!-- 新生入學時程表 -->
    <TimeTable />
    <!-- 新生線上報到 -->
    <ReportOnline />
    <!-- 入學說明簡報 -->
    <Presentation />
    <!-- 新生暑假作業 -->
    <HomeWork />
    <!-- 新生應辦＆選辦事項 -->
    <Handle />
    <!-- 新生實體到校日期 -->
    <Date />
    <!-- 其他注意事項 -->
    <Precautions />
    <!-- 學校簡介 -->
    <Profile />
    <div class="grid md:grid-cols-2 lg:grid-cols-2">
      <!-- 高一line家長群 -->
      <Line />
      <!-- 選課輔導手冊 -->
      <Handbook />
    </div>
    <!-- Footer -->
    <Foooter />
  </div>
</template>

<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
