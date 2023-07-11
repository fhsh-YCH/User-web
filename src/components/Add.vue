<template>
  <a href="../assets/fhsh_poster.png" class="mx-auto w-8/12"
    ><img class="mx-auto h-auto w-8/12" /></a
  ><button
    @click="closeModel"
    class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white"
  >
    關閉
  </button>
</template>

<script setup>
import { ref } from "vue";

const isModalOpen = ref(true); // 假設模態視窗初始為打開狀態

const closeModel = () => {
  isModalOpen.value = false; // 將模態視窗狀態設為關閉
};
</script>
