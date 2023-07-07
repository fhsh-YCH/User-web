<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div id="linegroup" class="flex justify-center pt-8 md:py-12">
    <a v-for="data in datas.line" :content="data.title" :href="data.link">
      <button
        class="rounded-xl bg-[#009A35] px-20 py-3 text-center text-xl font-semibold text-white shadow-md md:py-4 md:text-2xl lg:text-3xl"
      >
        {{ data.title }}
      </button>
    </a>
  </div>
</template>
