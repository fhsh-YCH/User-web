<script setup></script>
<template>
  <div id="report" class="h-12"></div>
  <div class="flex justify-center pt-10">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生實體報到
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div
      class="rounded-lg border border-[#34559D] bg-white p-6 shadow-md lg:px-12 lg:py-8"
    >
      <ul class="block w-72 list-disc pl-5 md:hidden lg:hidden lg:pl-12">
        <li class="pt-3 text-sm md:text-lg lg:text-xl">
          依照指定時間到校報到逾時未報到視同放棄入學
        </li>

        <li class="pt-3 text-sm md:text-lg lg:text-xl">
          報到驗證、繳畢業證書、出示本土語文選課結果、校服套量、普通班說明會
        </li>
      </ul>
      <ul class="hidden list-disc pl-5 md:hidden lg:block lg:pl-12">
        <li class="pt-3 text-sm md:text-lg lg:text-xl">
          依照指定時間到校報到逾時未報到視同放棄入學
        </li>

        <li class="pt-3 text-sm md:text-lg lg:text-xl">
          報到驗證、繳畢業證書、出示本土語文選課結果、校服套量、普通班說明會
        </li>
      </ul>

      <div class="flex items-center justify-center">
        <div
          class="grid grid-cols-1 flex-col items-center justify-center gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          <!-- 普通班 -->
          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-72"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              普通班新生報到<br />(免試/優免/安置)
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              7月14日(五) 9:00-11:00
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              *建議10:00前報到<br />以利參加10:00-11:00說明會
            </span>
          </div>

          <!-- 體育班 -->
          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-72"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              體育班及<br />運動績優生報到
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              7月14日(五) 9:00-12:00
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              *運動績優生報到後<br />參加10-11時普通班說明會
            </span>
          </div>
          <!-- 戲劇班 -->

          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-72"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              戲劇班正取生報到
            </span>
            <span class="pt-3 text-center text-[#34559D] lg:pt-4">
              7月12日9-12時
            </span>

            <span class="pt-5 text-center text-2xl font-black text-[#34559D]">
              戲劇班備取生報到
            </span>
            <span class="pt-3 text-center text-[#34559D] lg:pt-4">
              7月13日9-12時<br />遞補至16時截止
            </span>
          </div>

          <!-- 音樂班 -->

          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-56"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              音樂班新生報到
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              7月12日 9:00-12:00
            </span>
          </div>
          <!-- 美術班 -->

          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-56"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              美術班新生報到
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              7月12日 9:00-12:00
            </span>
          </div>
          <!-- 舞蹈班 -->

          <div
            class="flex h-56 w-60 flex-col items-center justify-center rounded-2xl border border-[#34559D] lg:h-56"
          >
            <span class="text-center text-2xl font-black text-[#34559D]">
              舞蹈班新生報到
            </span>
            <span class="pt-4 text-center text-[#34559D] lg:pt-4">
              7月12日 9:00-12:00
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
