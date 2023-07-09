<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div id="handbook" class="flex justify-center pb-8 pt-4 md:py-12">
    <a
      v-for="data in datas.manual"
      :key="data.title"
      :content="data.title"
      :href="data.link"
    >
      <button
        class="flex items-center justify-center rounded-xl bg-[#EC6261] px-16 py-3 text-center text-xl font-semibold text-white shadow-md md:px-16 md:py-4 md:text-2xl lg:px-32 lg:py-6 lg:text-3xl"
      >
        {{ data.title }}
      </button>
    </a>
  </div>
</template>
