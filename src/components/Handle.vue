<template>
  <!-- Desktop -->
  <div id="handlee" class="hidden md:hidden lg:block">
    <div class="flex justify-center pt-10 pb-6">
      <div
        class="bg-[#34559D] px-3 py-2 lg:text-2xl text-white rounded-md shadow-md"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex">
        <div
          class="bg-[#34559D] py-10 px-5 flex flex-col gap-8 rounded-l-xl justify-center items-center"
        >
          <span class="text-white text-3xl font-bold"> 應 </span>
          <span class="text-white text-3xl font-bold"> 辦 </span>
        </div>
        <div class="bg-white rounded-r-xl p-6">
          <div class="border-dashed border-2 border-black rounded-xl px-8 py-4">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pt-4 pl-6 leading-10">
              <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />
          <div class="border-dashed border-2 border-black rounded-xl px-8 py-4">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pt-4 pl-6 leading-10">
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
      <div class="flex">
        <div
          class="bg-[#9D3434] py-10 px-5 flex flex-col gap-8 rounded-l-xl justify-center items-center"
        >
          <span class="text-white text-3xl font-bold"> 選 </span>
          <span class="text-white text-3xl font-bold"> 辦 </span>
        </div>
        <div class="bg-white rounded-r-xl p-6">
          <div class="border-dashed border-2 border-black rounded-xl px-8 py-4">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pt-4 pl-6 leading-10">
              <a><li>學雜費減免申請鏈結表單</li></a>
              <a><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="border-dashed border-2 border-black rounded-xl px-8 py-4">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pt-4 pl-6 leading-10">
              <a><li>就學貸款申請鏈結表單</li></a>
              <a><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="border-dashed border-2 border-black rounded-xl px-8 py-4">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pt-4 pl-6 leading-10">
              <a><li>學生住宿申請鏈結表單</li></a>
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Tablet -->
  <div id="handle" class="lg:hidden">
    <div class="flex justify-center pt-10 pb-6">
      <div
        class="bg-[#34559D] px-3 py-2 lg:text-2xl text-white rounded-md shadow-md"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex flex-col justify-center items-center md:flex-row md:gap-5">
      <div class="flex">
        <div
          class="bg-[#34559D] py-5 px-2 flex flex-col gap-4 rounded-l-xl justify-center items-center"
        >
          <span class="text-white text-md font-bold"> 應 </span>
          <span class="text-white text-md font-bold"> 辦 </span>
        </div>
        <div class="bg-white rounded-r-xl p-5 md:py-10">
          <div class="border-dashed border border-black rounded-xl p-3">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pt-2 pl-4 leading-8 text-sm">
              <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />

          <div class="border-dashed border border-black rounded-xl p-3">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pt-2 pl-4 leading-8 text-sm">
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
          class="bg-[#9D3434] py-5 px-2 flex flex-col gap-4 rounded-l-xl justify-center items-center"
        >
          <span class="text-white text-md font-bold"> 選 </span>
          <span class="text-white text-md font-bold"> 辦 </span>
        </div>
        <div class="bg-white rounded-r-xl p-6">
          <div class="border-dashed border border-black rounded-xl py-5 px-12">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pt-2 pl-3 leading-8 text-sm">
              <a><li>學雜費減免申請鏈結表單</li></a>
              <a><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="border-dashed border border-black rounded-xl py-5 px-12">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pt-2 pl-4 leading-8 text-sm">
              <a><li>就學貸款申請鏈結表單</li></a>
              <a><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="border-dashed border border-black rounded-xl py-5 px-12">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pt-2 pl-4 leading-8 text-sm">
              <a><li>學生住宿申請鏈結表單</li></a>
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
