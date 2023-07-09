<script setup>
import { datas } from "../utils.js";
import hw from "../componentss/hw.vue";
</script>

<template>
  <div id="homework" class="flex justify-center pt-8">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生暑假作業
    </div>
  </div>
  <div class="flex justify-center">
    <div
      class="flex flex-col gap-8 rounded-lg border border-[#34559D] bg-white px-12 py-6 shadow-md md:px-20 md:py-10 lg:px-24 lg:py-10"
    >
      <hw
        v-for="data in datas.homework"
        :href="data.link"
        :content="data.title"
      />
    </div>
  </div>
</template>
