<script setup>
import { ref } from "vue";
const ppt = ref("https://www.example.com");
</script>
<template>
  <div id="presentation" class="pt-8"></div>
  <div class="flex justify-center">
    <div
      class="bg-[#34559D] px-5 py-1 md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-t-lg text-white flex items-center justify-center shadow-md"
    >
      入學說明簡報
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div
      class="px-11 py-6 md:px-16 md:py-10 lg:px-20 lg:py-10 bg-white rounded-lg border border-[#34559D] shadow-md"
    >
      <a :href="ppt">
        <img
          src="../assets/fake_pic.png"
          class="w-[255px] md:w-[510px] lg:w-[750px]"
        />
      </a>
    </div>
  </div>
</template>
