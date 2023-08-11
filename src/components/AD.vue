<template>
  <div v-if="isModalOpen.value">
    <div
      class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
    >
      <div
        class="mb-20 flex flex-col items-center justify-center gap-2 lg:flex-none"
      >
        <div
          class="mb-4 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#FAF7EF] bg-[#FAF7EF] md:mb-6 md:max-w-xl lg:mb-0 lg:border-[#34559D] lg:px-6 lg:py-5"
        >
          <div class="flex flex-col items-center justify-center">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhneR1LOQqtK0Rg-4NXBfq8dmJi0_JVhyUPwXVXGWICh7LzA/viewform?usp=sf_link"
              ><img
                v-if="buttonText === '下一頁'"
                src="../assets/freshman_poster_full.png"
                class="mb-2 w-96"
            /></a>

            <img
              v-if="buttonText === '關閉'"
              src="../assets/fhsh_poster_full.png"
              class="mb-2 w-96"
            />

            <button
              v-if="buttonText === '下一頁'"
              class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
              @click="handleButtonClick"
            >
              下一頁
            </button>
            <button
              v-if="buttonText === '關閉'"
              class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
              @click="closeModel"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const isModalOpen = reactive({ value: true });
const buttonText = ref("下一頁");

const closeModel = () => {
  isModalOpen.value = false;
};

const handleButtonClick = () => {
  if (buttonText.value === "下一頁") {
    buttonText.value = "關閉";
  } else {
    buttonText.value = "下一頁";
    closeModel();
  }
};

onMounted(() => {
  // 監聽鍵盤事件，按下 Esc 鍵時關閉 Modal
  document.addEventListener("keydown", handleEscKey);
});

const handleEscKey = (event) => {
  if (event.key === "Escape") {
    closeModel();
  }
};
</script>
