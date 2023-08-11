<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div id="calendar" class="flex justify-center pt-4 md:py-6 md:pt-6">
    <a
      v-for="data in datas.calendar"
      :content="data.title"
      :key="data.title"
      :href="data.link"
    >
      <button
        class="max-w-12 rounded-xl bg-[#34559D] px-16 py-2 text-center text-lg font-semibold text-white shadow-md md:px-40 md:py-4 md:text-xl lg:px-80 lg:py-4 lg:text-2xl"
      >
        {{ data.title }}
      </button>
    </a>
  </div>
</template>
