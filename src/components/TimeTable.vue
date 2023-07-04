<template>
  <div class="lg:p-9"></div>
  <nav
    class="bg-[#FAF7EF] p-6 rounded-b-xl drop-shadow-md text-center w-full hidden md:hidden lg:block"
  >
    <div class="flex justify-center items-center">
      <a
        href="http://www.fhsh.tp.edu.tw/"
        target="_blank"
        class="absolute left-12"
      >
        <img src="../assets/FHSH-logo.png" class="w-16 h-12" />
      </a>
      <p class="text-[#34559D] text-3xl font-bold pt-1">復興高中新生網頁</p>
    </div>
  </nav>

  <section id="timeline" class="pt-20 md:pt-20 lg:pt-10"></section>
  <div class="flex justify-center">
    <div
      class="bg-[#34559D] px-5 py-1 md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-t-lg text-white flex items-center justify-center shadow-md"
    >
      新生入學時程表
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div
      class="p-6 bg-white rounded-lg border border-[#34559D] shadow-md md:hidden lg:hidden"
    >
      <img src="../assets/timeline.png" class="w-[300px]" />
    </div>
    <div
      class="md:p-11 lg:p-16 bg-white rounded-lg border border-[#34559D] shadow-md md:block lg:block hidden"
    >
      <img src="../assets/timetable.png" class="md:w-[550px] lg:w-[820px]" />
    </div>
  </div>
</template>
