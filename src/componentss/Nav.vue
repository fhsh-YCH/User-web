<script setup>
import { ref } from "vue";

const navItems = [
  { label: "新生入學時程表", target: "timeline" },
  { label: "公告榜單及報到編號", target: "register" },
  { label: "新生實體報到", target: "report" },
  { label: "暑假作業", target: "homework" },
  { label: "應辦＆選辦事項", target: "handlee" },
  { label: "新生始業輔導", target: "date" },
  { label: "其他注意事項", target: "otherprecautions" },
  { label: "高一LINE家長群", target: "linegroup" },
  { label: "輔導選課手冊", target: "handbook" },
];

const currentIndex = ref(null);

const handleItemClick = (index) => {
  if (currentIndex.value === index) {
    currentIndex.value = null;
  } else {
    currentIndex.value = index;
  }
};
</script>
<template>
  <nav class="absolute right-10 top-10">
    <div class="flex flex-col items-center justify-center gap-3">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        class="px-3 text-[#34559D]"
      >
        <a
          @click="handleItemClick(index)"
          :href="`#${item.target}`"
          class="flex flex-col items-center justify-center pl-4"
        >
          <div
            class="flex w-48 items-center justify-center rounded-full bg-white px-5 py-3 font-black text-[#34559D]"
          >
            <p class="font-bold">{{ item.label }}</p>
          </div>
        </a>
      </div>
    </div>
  </nav>
</template>
