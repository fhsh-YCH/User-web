<script setup>
//defineProps(["href"]);
import { ref, onMounted } from "vue";

const isModalOpen = ref(true); // 假設模態視窗初始為打開狀態

const closeModel = () => {
  isModalOpen.value = false; // 將模態視窗狀態設為關閉
};

let slideIndex = ref(1);
const slides = ref([]);

onMounted(() => {
  slides.value = document.getElementsByClassName("slide");
  showSlide(slideIndex.value);
});

function moveSlide(moveStep) {
  showSlide((slideIndex.value += moveStep));
}

function showSlide(n) {
  const slidesList = slides.value;

  if (n > slidesList.length) {
    slideIndex.value = 1;
  }
  if (n < 1) {
    slideIndex.value = slidesList.length;
  }

  // hide all slides
  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].classList.add("hidden");
  }

  // show the active slide
  slidesList[slideIndex.value - 1].classList.remove("hidden");
}
</script>
<template>
  <!-- <div 
    v-if="isModalOpen"
    @click="closeModel"
    class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
  >
    <div
      class="flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#34559D] bg-[#FAF7EF] px-10 py-5 md:max-w-xl"
    >
      <a href="https://forms.gle/MqyJwotKKT6qthH36" class=""
        ><img src="../assets/fhsh_poster.png" class=""
      /></a>
      <div class="flex gap-8">
        <button
          @click="closeModel"
          class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
        >
          關閉
        </button>
        <a
          href="https://forms.gle/MqyJwotKKT6qthH36"
          class="rounded-md bg-[#34559D] px-3 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >查看更多營隊內容</a
        >
      </div>
    </div>
  </div> -->
  <div v-if="isModalOpen">
    <div
      class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
    >
      <div
        class="mb-28 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#FAF7EF] bg-[#FAF7EF] p-0 sm:left-5 sm:top-5 md:left-0 md:top-0 md:mb-16 md:max-w-xl lg:mb-0 lg:border-[#34559D] lg:px-10 lg:py-8"
      >
        <!-- Implement the carousel -->
        <div class="relative">
          <div class="slide relative">
            <a href="https://forms.gle/MqyJwotKKT6qthH36"
              ><img
                class="lg:-webkit-500 w-full lg:h-[500px]"
                src="../assets/fhsh_freshman_112.png"
            /></a>
          </div>

          <div class="slide relative">
            <a href="https://forms.gle/MqyJwotKKT6qthH36"
              ><img
                class="lg:-webkit-500 w-full lg:h-[500px]"
                src="../assets/fhsh_poster.png"
            /></a>
          </div>
          <div class="flex items-center justify-center py-2 lg:hidden">
            <button
              @click="closeModel"
              class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
            >
              關閉
            </button>
          </div>

          <!-- The previous button -->
          <a
            class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="() => moveSlide(-1)"
            >❮</a
          >

          <!-- The next button -->
          <a
            class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="() => moveSlide(1)"
            >❯</a
          >
        </div>
        <div class="hidden md:hidden lg:flex lg:items-center lg:justify-center">
          <button
            @click="closeModel"
            class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
