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
          <div class="relative">
            <!-- 使用 v-for 生成幻燈片 -->
            <div
              v-for="(slide, index) in slides.data"
              :key="index"
              :class="{ slide: true, hidden: index !== slideIndex - 1 }"
            >
              <a :href="slide.href">
                <img
                  :src="slide.img_src"
                  class="lg:-webkit-500 w-full lg:h-[500px]"
                />
              </a>
            </div>

            <!-- The previous button -->
            <!-- The next button -->
            <a
              class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#9D3434] px-5 py-2 text-center text-2xl font-black text-white lg:-right-5"
              @click="handleNextClick"
              >❯</a
            >
          </div>
          <div
            class="hidden md:hidden lg:flex lg:items-center lg:justify-center"
          >
            <button
              v-if="closeCounter.value >= 1"
              @click="closeModel"
              class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
            >
              關閉
            </button>
          </div>
        </div>
        <div class="lg:hidden">
          <button
            v-if="closeCounter.value >= 1"
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

<script setup>
import { reactive, onMounted } from "vue";
import TechPoster from "../assets/fhsh_freshman_112.png";
import MediaPoster from "../assets/fhsh_poster.png";

const isModalOpen = reactive({ value: true });
const closeCounter = reactive({ value: 0 });

const closeModel = () => {
  isModalOpen.value = false;
};

const slides = reactive({
  now_index: 0,
  data: [
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: TechPoster,
    },
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: MediaPoster,
    },
  ],
});

let slideIndex = 1;

onMounted(() => {
  showSlide(slideIndex);
});

function moveSlide(moveStep) {
  slideIndex =
    (slideIndex + moveStep + slides.data.length) % slides.data.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  const slidesList = document.getElementsByClassName("slide");

  if (n < 1) {
    slideIndex = slidesList.length;
  } else if (n > slidesList.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].classList.add("hidden");
  }

  slidesList[slideIndex - 1].classList.remove("hidden");
}

function handleNextClick() {
  moveSlide(1);

  if (slideIndex >= 2) {
    closeCounter.value = 1;
  }
}
</script>

<!-- <a<div class="hidden md:hidden lg:flex lg:items-center lg:justify-center">
          <button
            v-if="closeCounter.value >= 1"
            @click="closeModel"
            class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >
            關閉
          </button>
        </div>
            class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="() => moveSlide(-1)"
            >❮</a
          > -->
