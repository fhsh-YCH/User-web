<script setup>
defineProps(["date", "content_line1", "content_line2", "href"]);
</script>
<template>
  <div class="lg:hidden w-full">
    <div class="flex justify-center pt-4 w-full">
      <a
        :href="href"
        class="bg-white rounded-full flex items-center border border-[#34559D] w-full"
      >
        <div
          class="rounded-full bg-[#34559D] px-4 py-2 text-white font-bold text-lg"
        >
          {{ date }}<br />公告
        </div>
        <span class="font-bold pl-1 pr-2 py-0 text-lg text-center w-full">
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>

  <div class="hidden lg:block">
    <div class="flex justify-center pt-4 w-full max-w-sm">
      <a
        :href="href"
        class="bg-white rounded-full flex items-center border border-[#34559D] w-full"
      >
        <div
          class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
        >
          {{ date }}<br />公告
        </div>
        <span class="font-bold pr-12 pl-10 text-2xl text-center w-full">
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>
</template>
