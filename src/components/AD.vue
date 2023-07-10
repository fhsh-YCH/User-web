<script setup>
defineProps(["href"]);
import { ref } from "vue";

const isModalOpen = ref(true); // 假設模態視窗初始為打開狀態

const closeModel = () => {
  isModalOpen.value = false; // 將模態視窗狀態設為關閉
};
</script>
<template>
  <div
    v-if="isModalOpen"
    @click="closeModel"
    class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
  >
    <div
      class="flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#34559D] bg-[#FAF7EF] px-10 py-5 md:max-w-xl"
    >
      <a href="https://forms.gle/MqyJwotKKT6qthH36" class=""
        ><img src="../assets/fhsh_poster.png" class=""
      /></a>
      <div class="flex gap-8">
        <button
          @click="closeModel"
          class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
        >
          關閉
        </button>
        <a
          href="https://forms.gle/MqyJwotKKT6qthH36"
          class="rounded-md bg-[#34559D] px-3 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >查看更多相關內容</a
        >
      </div>
    </div>
  </div>
</template>
