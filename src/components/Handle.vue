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
              <span class="font-bold text-[#34559D]"
                >線上訂購校服(超商繳費)</span
              >
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a
                  href="http://35.194.183.170/Schoolfhsh/Landing"
                  target="_blank"
                  ><li class="underline">
                    新生線上訂購校服(7/14鏈結飛宇系統)
                  </li></a
                >
                <a><li>新生線上訂購校服流程說明</li></a>
                <a><li>復興高中新生校服介紹</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="font-bold text-[#34559D]">校務系統新生填寫資料</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a
                  class="underline"
                  href="https://sschool.tp.edu.tw/newreg.action"
                  target="_blank"
                  ><li>新生填寫資料(7/14鏈結校務系統)</li></a
                >
                <a><li>校務系統新生填寫應備資料說明</li></a>
                <a><li>數位學生證整合服務說明</li></a>
                <a><li>教育部12年國教免學費補助查調說明</li></a>
                <a><li>學雜費減免申請說明</li></a>
                <a><li>學生受款帳戶登記說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="font-bold text-[#34559D]"
                >校務系統多元選修選課(普體)</span
              >
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a
                  href="http://35.194.183.170/Schoolfhsh/Landing"
                  target="_blank"
                  class="underline"
                  ><li>多元選修選課(7/14鏈結校務系統-新生選課)</li></a
                >
                <a><li>校務系統高一多元選修選課說明(普體)</li></a>
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
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-r-xl bg-white py-6 pl-8 pr-12"
          >
            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-12"
            >
              <span class="font-bold text-[#9D3434]">語文競賽增額報名</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>語文競賽增額報名鏈結表單</li></a>
                <a><li>語文競賽增額報名說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-20"
            >
              <span class="font-bold text-[#9D3434]">就學貸款申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a
                  href="https://forms.gle/M72x1waUKi2x3yUcA"
                  target="_blank"
                  class="underline"
                  ><li>就學貸款申請鏈結表單</li></a
                >
                <a><li>就學貸款申請說明</li></a>
              </ul>
            </div>
            <br />

            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-20"
            >
              <span class="font-bold text-[#9D3434]">學生住宿申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdnNQlQUDzkNbcak0iH-lEZZmtapva5_oFg_J5gVhm7BlK9xA/viewform?vc=0&c=0&w=1&flr=0"
                  target="_blank"
                  class="underline"
                  ><li>學生住宿申請鏈結表單</li></a
                >
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
    <div class="flex flex-col items-center justify-center md:flex-row md:gap-3">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#34559D] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 應 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-5 md:py-8">
          <div class="hidden p-1 md:block lg:hidden"></div>
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-10">
              <a
                href="http://35.194.183.170/Schoolfhsh/Landing"
                target="_blank"
                class="underline"
                ><li>新生線上訂購校服(7/14鏈結飛宇系統)</li></a
              >
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />

          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a
                class="underline"
                href="https://sschool.tp.edu.tw/newreg.action"
                target="_blank"
                ><li>新生填寫資料(7/14鏈結校務系統)</li></a
              >
              <a><li>校務系統新生填寫應備資料說明</li></a>
              <a><li>數位學生證整合服務說明</li></a>
              <a><li>教育部12年國教免學費補助查調說明</li></a>
              <a><li>學雜費減免申請說明</li></a>
              <a><li>學生受款帳戶登記說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]"
              >校務系統多元選修選課(普體)</span
            >
            <ul class="list-disc pl-4 pt-2 text-sm leading-10">
              <a
                href="http://35.194.183.170/Schoolfhsh/Landing"
                target="_blank"
                class="underline"
                ><li>多元選修選課(7/14鏈結校務系統-新生選課)</li></a
              >
              <a><li>校務系統高一多元選修選課說明(普體)</li></a>
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
        <div class="rounded-r-xl bg-white p-6 md:py-11">
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">語文競賽增額報名</span>
            <ul class="list-disc pl-3 pt-2 text-sm leading-8">
              <a><li>語文競賽增額報名鏈結表單</li></a>
              <a><li>語文競賽增額報名說明</li></a>
            </ul>
          </div>
          <div class="hidden p-6 md:block lg:hidden"></div>
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a
                href="https://forms.gle/M72x1waUKi2x3yUcA"
                target="_blank"
                class="underline"
                ><li>就學貸款申請鏈結表單</li></a
              >
              <a
                href="https://drive.google.com/file/d/1_CHoivZu3_4fcxoarj5DMR8hvTad2uzB/view?usp=sharing"
                target="_blank"
                class="underline"
                ><li>就學貸款申請說明</li></a
              >
            </ul>
          </div>
          <div class="hidden p-6 md:block lg:hidden"></div>
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnNQlQUDzkNbcak0iH-lEZZmtapva5_oFg_J5gVhm7BlK9xA/viewform?vc=0&c=0&w=1&flr=0"
                target="_blank"
                class="underline"
                ><li>學生住宿申請鏈結表單</li></a
              >
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
          <div class="hidden p-2 md:block lg:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</template>
