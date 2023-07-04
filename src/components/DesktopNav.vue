<template>
  <nav
    class="bg-[#34559D] px-1 py-6 w-full items-center justify-center fixed top-0 left-0 right-0 z-50 shadow-md hidden md:hidden lg:block"
  >
    <div class="flex justify-center items-center">
      <div
        v-for="(item, index) in navItems"
        :key="index"
        class="px-4 text-white"
      >
        <a
          @click="handleItemClick(index)"
          :href="`#${item.target}`"
          class="flex flex-col justify-center items-center pl-4 scroll"
        >
          <p class="font-bold">{{ item.label }}</p>
          <div
            :class="{
              'bg-[#EBE7DB] py-1 px-16 fixed top-16 rounded-full':
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
  { label: "新生線上報到", target: "register" },
  { label: "輔導選課手冊", target: "handbook" },
  { label: "入學說明簡報", target: "presentation" },
  { label: "暑假作業", target: "homework" },
  { label: "應辦＆選辦事項", target: "handlee" },
  { label: "實體到校日期", target: "date" },
  { label: "其他宣導事項", target: "otherprecautions" },
  { label: "學校簡介", target: "profile" },
  { label: "高一LINE家長群", target: "linegroup" },
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
