<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div id="linegroup" class="flex justify-center md:py-12">
    <a
      v-for="data in datas.line"
      :content="data.title"
      :key="data.title"
      :href="data.link"
    >
      <button
        class="rounded-xl bg-[#009A35] px-14 py-3 text-center text-xl font-semibold text-white shadow-md md:py-4 md:text-2xl lg:px-32 lg:py-6 lg:text-3xl"
      >
        {{ data.title }}
      </button>
    </a>
  </div>
</template>
