<script setup>
import { ref } from "vue";
const ppt = ref("https://www.example.com");
</script>
<template>
  <div id="presentation" class="pt-8"></div>
  <div class="flex justify-center">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      入學說明簡報
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div
      class="rounded-lg border border-[#34559D] bg-white px-11 py-6 shadow-md md:px-16 md:py-10 lg:px-20 lg:py-10"
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
