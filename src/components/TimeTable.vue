<template>
  <div class="lg:p-9"></div>
  <nav
    class="hidden w-full rounded-b-xl bg-[#FAF7EF] p-6 text-center drop-shadow-md md:hidden lg:block"
  >
    <div class="flex items-center justify-center">
      <a
        href="http://www.fhsh.tp.edu.tw/"
        target="_blank"
        class="absolute left-12"
      >
        <img src="../assets/FHSH-logo.png" class="h-12 w-16" />
      </a>
      <p class="pt-1 text-3xl font-bold text-[#34559D]">復興高中新生網頁</p>
    </div>
  </nav>
  <div id="timeline" class="lg:h-12"></div>

  <section class="pt-20 md:pt-20 lg:pt-10"></section>
  <div class="flex justify-center">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生入學時程表
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div
      class="rounded-lg border border-[#34559D] bg-white p-3 shadow-md md:hidden lg:hidden"
    >
      <img src="../assets/time_line.png" class="w-[300px]" />
    </div>
    <div
      class="hidden rounded-lg border border-[#34559D] bg-white shadow-md md:block md:p-4 lg:block lg:p-14"
    >
      <img src="../assets/time_table.png" class="md:w-[550px] lg:w-[820px]" />
    </div>
  </div>
</template>
