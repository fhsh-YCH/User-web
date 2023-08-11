<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 hidden w-full items-center justify-center bg-[#34559D] px-1 py-6 shadow-md md:hidden lg:block"
  >
    <div class="flex items-center justify-center">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        class="text-white lg:px-1 lg:text-sm xl:px-3 xl:text-base"
      >
        <a
          @click="handleItemClick(index)"
          :href="`#${item.target}`"
          class="scroll flex flex-col items-center justify-center pl-4"
        >
          <p class="font-bold">{{ item.label }}</p>
          <div
            :class="{
              'fixed rounded-full bg-[#EBE7DB] px-16 py-1 lg:top-14 xl:top-16':
                currentIndex === index,
            }"
          ></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const navItems = [
  { label: "新生入學時程表", target: "timeline" },
  { label: "新生行事曆暨檢核表", target: "calendar" },
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
