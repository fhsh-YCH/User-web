<template>
  <div id="profile" class="flex justify-center pt-12">
    <div
      class="bg-[#34559D] px-5 py-1 md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-t-lg text-white flex items-center justify-center shadow-md"
    >
      學校簡介
    </div>
  </div>
  <div class="lg:hidden">
    <div class="bg-white w-full p-4 border border-[#34559D] shadow-md">
      <div class="flex overflow-x-scroll">
        <!-- 校長室 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">校</span>
              <span class="font-bold text-[#34559D] text-3xl">長</span>
              <span class="font-bold text-[#34559D] text-3xl">室</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
        <!-- 學務處 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">學</span>
              <span class="font-bold text-[#34559D] text-3xl">務</span>
              <span class="font-bold text-[#34559D] text-3xl">處</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
        <!-- 教務處 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">教</span>
              <span class="font-bold text-[#34559D] text-3xl">務</span>
              <span class="font-bold text-[#34559D] text-3xl">處</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
        <!-- 圖書館 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">圖</span>
              <span class="font-bold text-[#34559D] text-3xl">書</span>
              <span class="font-bold text-[#34559D] text-3xl">館</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
        <!-- 輔導室 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">輔</span>
              <span class="font-bold text-[#34559D] text-3xl">導</span>
              <span class="font-bold text-[#34559D] text-3xl">室</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
        <!-- 總務處 -->
        <div class="flex-none mr-4 p-4">
          <div
            class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
          >
            <div class="flex flex-col pr-4">
              <span class="font-bold text-[#34559D] text-3xl">總</span>
              <span class="font-bold text-[#34559D] text-3xl">務</span>
              <span class="font-bold text-[#34559D] text-3xl">處</span>
            </div>
            <img src="../assets/fake_pic.png" class="w-[155px]" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden md:hidden lg:flex lg:justify-center lg:items-center">
    <div
      class="bg-white w-[90vw] p-4 border-2 border-[#34559D] shadow-md flex justify-center items-center rounded-xl"
    >
      <div class="flex flex-col">
        <div class="flex">
          <!-- 校長室 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">校</span>
                <span class="font-bold text-[#34559D] text-4xl">長</span>
                <span class="font-bold text-[#34559D] text-4xl">室</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 學務處 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">學</span>
                <span class="font-bold text-[#34559D] text-4xl">務</span>
                <span class="font-bold text-[#34559D] text-4xl">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 教務處 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">教</span>
                <span class="font-bold text-[#34559D] text-4xl">務</span>
                <span class="font-bold text-[#34559D] text-4xl">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
        </div>
        <div class="flex">
          <!-- 圖書館 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">圖</span>
                <span class="font-bold text-[#34559D] text-4xl">書</span>
                <span class="font-bold text-[#34559D] text-4xl">館</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 輔導室 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">輔</span>
                <span class="font-bold text-[#34559D] text-4xl">導</span>
                <span class="font-bold text-[#34559D] text-4xl">室</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 總務處 -->
          <div class="flex-none mr-4 p-4">
            <div
              class="bg-white border-2 border-[#34559D] pl-7 pr-8 py-9 shadow-lg flex"
            >
              <div class="flex flex-col pr-4">
                <span class="font-bold text-[#34559D] text-4xl">總</span>
                <span class="font-bold text-[#34559D] text-4xl">務</span>
                <span class="font-bold text-[#34559D] text-4xl">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
