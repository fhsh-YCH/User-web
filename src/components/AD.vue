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
      class="flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#34559D] bg-[#FAF7EF] p-10 md:max-w-xl"
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeF3ZQX9octr9MkVgCLG-S1LgCke_xpM9ZIOTqMRhF-QWvxTg/viewform"
        class="mx-auto w-8/12"
        ><img src="../assets/fhsh freshman 112.png" class="mx-auto h-auto" /></a
      ><button
        @click="closeModel"
        class="rounded-md bg-[#34559D] px-6 py-3 text-center text-white"
      >
        關閉
      </button>
    </div>
  </div>
</template>
