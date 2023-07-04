<script setup>
import { ref } from "vue";
const manual = ref("https://www.example.com");
</script>
<template>
  <div id="handbook" class="flex justify-center pt-4 pb-8 md:py-12">
    <a :href="manual">
      <button
        class="py-3 px-14 lg:py-4 lg:px-24 md:py-4 md:px-16 md:text-2xl lg:text-3xl bg-[#EC6261] rounded-xl text-center font-semibold text-xl text-white flex items-center justify-center shadow-md"
      >
        選課輔導手冊(普通班)
      </button>
    </a>
  </div>
</template>
