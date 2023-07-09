<script setup>
defineProps(["date", "title", "href"]);
</script>
<template>
  <div class="w-full lg:hidden">
    <div class="flex w-full justify-center pt-4">
      <a
        :href="href"
        class="flex w-full items-center rounded-full border border-[#34559D] bg-white"
      >
        <div
          class="rounded-full bg-[#34559D] px-4 py-2 text-lg font-bold text-white"
        >
          {{ date }}<br />公告
        </div>
        <span class="w-full py-0 pl-1 pr-2 text-center text-lg font-bold">
          {{ title }}</span
        >
      </a>
    </div>
  </div>

  <div class="hidden lg:block">
    <div class="flex w-full max-w-sm justify-center pt-4">
      <a
        :href="href"
        class="flex w-full items-center rounded-full border border-[#34559D] bg-white"
      >
        <div
          class="rounded-full bg-[#34559D] px-6 py-4 text-xl font-bold text-white"
        >
          {{ date }}<br />公告
        </div>
        <span class="w-full pl-10 pr-12 text-center text-2xl font-bold">
          {{ title }}</span
        >
      </a>
    </div>
  </div>
</template>
