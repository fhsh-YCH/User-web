<script setup></script>
<template>
  <!-- Desktop -->
  <div id="handlee" class="hidden md:hidden lg:block">
    <div class="flex justify-center pb-6 pt-10">
      <div
        class="rounded-md bg-[#34559D] px-3 py-2 text-white shadow-md lg:text-2xl"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-10">
        <div class="flex">
          <div
            class="flex flex-col items-center justify-center gap-8 rounded-l-xl bg-[#34559D] px-5 py-10"
          >
            <span class="text-3xl font-bold text-white"> 應 </span>
            <span class="text-3xl font-bold text-white"> 辦 </span>
          </div>
          <div class="rounded-r-xl bg-white p-6">
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
                <a><li>新生線上訂購校服流程說明</li></a>
                <a><li>復興高中新生校服介紹</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="text-[#34559D]">校務系統新生填寫資料</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
                <a><li>校務系統新生填寫應備資料說明</li></a>
                <a><li>校務系統高一多元選修選課說明(普體)</li></a>
                <a><li>學生受款帳戶登記說明</li></a>
                <a><li>教育部12年國教免學費補助查調說明</li></a>
                <a><li>數位學生證整合服務說明</li></a>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex">
          <div
            class="flex flex-col items-center justify-center gap-8 rounded-l-xl bg-[#9D3434] px-5 py-10"
          >
            <span class="text-3xl font-bold text-white"> 選 </span>
            <span class="text-3xl font-bold text-white"> 辦 </span>
          </div>
          <div class="rounded-r-xl bg-white py-6 pl-10 pr-14">
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">學雜費減免申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>學雜費減免申請鏈結表單</li></a>
                <a><li>學雜費減免申請說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">就學貸款申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>就學貸款申請鏈結表單</li></a>
                <a><li>就學貸款申請說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">學生住宿申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>學生住宿申請鏈結表單</li></a>
                <a><li>學生住宿申請說明</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Tablet -->
  <div id="handle" class="lg:hidden">
    <div class="flex justify-center pb-6 pt-10">
      <div
        class="rounded-md bg-[#34559D] px-3 py-2 text-white shadow-md lg:text-2xl"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex flex-col items-center justify-center md:flex-row md:gap-5">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#34559D] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 應 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-5 md:py-8">
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-10">
              <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />

          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>學生受款帳戶登記說明</li></a>
              <a><li>校務系統新生填寫應備資料說明</li></a>
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>校務系統高一多元選修選課說明(普體)</li></a>
              <a><li>數位學生證整合服務說明</li></a>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#9D3434] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 選 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-6">
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pl-3 pt-2 text-sm leading-8">
              <a><li>學雜費減免申請鏈結表單</li></a>
              <a><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>就學貸款申請鏈結表單</li></a>
              <a><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>學生住宿申請鏈結表單</li></a>
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
