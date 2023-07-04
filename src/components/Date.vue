<script setup>
import DateAnnounce from "../componentss/DateAnnounce.vue";

const temp_datas = [
  {
    date: "8/16",
    content: "新生始業輔導實施計劃",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/16",
    content: "高一編班座號學號",
    href: "#",
    splitNumber: 8,
  },
  {
    date: "8/16",
    content: "新生住宿名單",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/23",
    content: "新生始業輔導手冊",
    href: "#",
    splitNumber: 8,
  },
  {
    date: "8/23",
    content: "開學日實施計畫",
    href: "#",
    splitNumber: 7,
  },
  {
    date: "8/23",
    content: "學生開學日領取教科書",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "新生開學日領取校服",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "學生信箱與單一身分帳號",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "學生家長校務行政系統說明",
    href: "#",
    splitNumber: 4,
  },
  {
    date: "8/23",
    content: "校園繳費系統親子身分綁定",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/23",
    content: "110-1學期行事曆",
    href: "#",
    splitNumber: 10,
  },
];
</script>
<template>
  <div id="date" class="flex justify-center pt-12 pb-2">
    <span
      class="bg-[#34559D] px-3 py-2 md:text-xl md:px-4 md:py-1 lg:px-6 lg:py-2 lg:text-2xl text-white rounded-md shadow-md"
    >
      新生實體到校日期
    </span>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-24 gap-x-14 gap-y-3"
  >
    <DateAnnounce
      v-for="(data, index) in temp_datas"
      :date="data.date"
      :href="data.href"
      :content_line1="data.content.slice(0, data.splitNumber)"
      :content_line2="data.content.slice(data.splitNumber)"
      :class="{
        'justify-self-end ': index % 2 === 0,
      }"
    />
  </div>
</template>
