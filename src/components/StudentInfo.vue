<script setup>
const closeModel = () => {
  isModalOpen.value = false;
};
</script>
<template>
  <div v-if="isMenuOpen">
    <div
      class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 px-4 pb-16"
    >
      <div
        class="flex flex-col items-center justify-center rounded-xl bg-[#FAF7EF] px-16 py-8"
      >
        <span class="text-xl font-bold text-[#EC6261]">注意 !!!</span>
        <div class="p-1"></div>
        <span class="text-2xl font-bold text-[#424242]">請填寫新生資訊</span>
        <div class="p-2"></div>
        <div class="flex gap-3">
          <div class="rounded-full border border-[#EC6261] px-6 py-2">
            <a @click="closeModel" class="font-bold text-[#EC6261]">關閉 </a>
          </div>
          <div class="rounded-full bg-[#EC6261] px-6 py-2">
            <a target="_blank" href="" class="font-bold text-white">連結</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
