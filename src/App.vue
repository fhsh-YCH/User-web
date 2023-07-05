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
</script>

<template>
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
