<script>
import SmName from "../icons/SmName.vue";
import LgName from "../icons/LgName.vue";

export default {
  name: "App",
  components: {
    SmName,
    LgName,
  },
};
</script>
<template>
  <div class="flex flex-col justify-center items-center m-auto space-y-[5%]">
    <!-- img -->

    <img
      src="../../../public/imgs/LinXin.jpeg"
      style="width: 70%; height: auto; aspect-ratio: 1; object-fit: cover"
      alt="Professional headshot of the software engineer"
      class="flex rounded-full object-cover shadow-lg hover:scale-105 transition duration-300"
    />

    <!-- name -->
    <div>
      <a href="./"> <SmName /> </a>
      <!-- <a href="./" class="hidden 2xl:block"> <LgName /> </a> -->
    </div>

    <!-- possition and institute -->
    <div class="text-[#4b5563] flex flex-col justify-center items-center">
      <p
        class="libre-franklin text-base xl:text-xl 2xl:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
      >
        Assistant Professor
      </p>
      <p>
        <a
          href="https://www.gzhu.edu.cn/"
          target="_blank"
          class="libre-franklin text-sm xl:text-base 2xl:text-xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
          ><equal></equal>Guangzhou University<equal></equal
        ></a>
      </p>
    </div>

    <!-- options -->
    <div
      class="flex flex-col justify-center items-start space-y-1 xl:space-y-2 2xl:space-y-4"
    >
      <!-- Google Scholar -->
      <a
        href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=XpMnJ1QAAAAJ"
        target="_blank"
        class="text-gray-600 hover:text-[#333] transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
      >
        <svg
          class="w-8 h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
          <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
          <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
          <path
            fill="#76a7fa"
            d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
          />
        </svg>
        <span class="text-[#4285f4] nunito text-sm xl:text-base 2xl:text-xl"
          >Google Scholar</span
        >
      </a>

      <!-- openreview -->
      <a
        href="https://openreview.net/profile?id=~Xin_Lin2"
        target="_blank"
        class="text-gray-600 hover:text-[#333] transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
      >
        <svg
          t="1736946772680"
          class="w-7 h-7 mr-[10px] ml-[2px]"
          viewBox="0 0 1033 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6660"
        >
          <path
            d="M482.454382 628.291226a52.888612 52.888612 0 0 0 63.72122 0l439.039203-279.098942a46.51649 46.51649 0 0 0 0-68.181705L548.724451 10.832607a54.800249 54.800249 0 0 0-63.72122 0L41.503542 274.638457a46.51649 46.51649 0 0 0 0 68.181705z m-347.917859-318.606098l382.327318-231.94524 382.327318 231.94524-382.327318 246.60112z"
            fill="#8C1B13"
            p-id="6661"
          ></path>
          <path
            d="M965.461227 649.319228l-450.509023 284.19664L65.080393 649.319228a43.330429 43.330429 0 0 0-57.98631 10.832608 37.59552 37.59552 0 0 0-6.372122 29.311761 39.507156 39.507156 0 0 0 17.841942 25.488488l471.537025 298.215308A42.056005 42.056005 0 0 0 511.128931 1019.539515h12.107032a42.056005 42.056005 0 0 0 19.116366-5.73491l472.174237-298.215308a39.507156 39.507156 0 0 0 17.841942-25.488488 37.59552 37.59552 0 0 0-6.372122-29.311761 43.330429 43.330429 0 0 0-60.535159-11.46982z"
            fill="#8C1B13"
            p-id="6662"
          ></path>
          <path
            d="M19.838327 526.337274l470.262601 298.215308A41.418793 41.418793 0 0 0 511.128931 828.375856h12.744244a42.693217 42.693217 0 0 0 19.116366-5.73491l472.174237-298.215308a39.507156 39.507156 0 0 0 17.841942-26.1257 37.59552 37.59552 0 0 0-6.372122-29.311761 43.330429 43.330429 0 0 0-57.98631-10.832608l-453.695084 286.108277L65.080393 460.067206a43.967642 43.967642 0 0 0-57.98631 10.832607 37.59552 37.59552 0 0 0-6.372122 29.311761 39.507156 39.507156 0 0 0 19.116366 26.1257z"
            fill="#8C1B13"
            p-id="6663"
          ></path>
        </svg>
        <span class="text-[#8C1B13] nunito text-sm xl:text-base 2xl:text-xl"
          >OpenReview</span
        >
      </a>

      <!-- Github -->
      <a
        href="/404"
        target="_blank"
        class="text-gray-900 hover:text-[#333] transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
      >
        <svg
          class="w-8 h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            fill="#333"
          />
        </svg>
        <span class="nunito text-gray-900 text-sm xl:text-base 2xl:text-xl"
          >Github</span
        >
      </a>
    </div>

    <!-- Email -->
    <div class="flex justify-center items-center">
      <a
        href="mailto:linxin94@gzhu.edu.cn"
        class="flex justify-center items-center nunito text-sm xl:text-base 2xl:text-xl relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 focus:ring-blue-300 font-medium hover:no-underline"
      >
        <svg
          t="1737030596535"
          class="icon w-5 h-5 mb-1 mr-1 mt-[1px]"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6639"
        >
          <path
            d="M955.002556 790.966573c1.836835-5.389754 3.056616-11.0558 3.056616-17.036002L958.059172 278.446733c0-5.678326-1.13587-11.0558-2.797719-16.202007L664.164608 511.484254 955.002556 790.966573zM511.840364 571.592236l76.673264-62.379723 38.800701-31.57002 292.323788-250.218832c-4.802376-1.426489-9.779737-2.428306-15.023158-2.428306L119.108748 224.995357c-5.256724 0-10.246365 1.001817-15.053857 2.439562l292.493657 250.351861 38.812981 31.582299L511.840364 571.592236zM904.614959 827.380924c5.025457 0 9.80532-0.930185 14.425547-2.24718L625.362884 543.043017l-113.52252 92.378967-113.341395-92.234681L104.700597 825.146023c4.615111 1.303692 9.387811 2.233877 14.408151 2.233877L904.614959 827.3799zM68.461231 262.244726c-1.661849 5.14723-2.797719 10.523681-2.797719 16.202007L65.663512 773.929548c0 5.992481 1.220804 11.658528 3.056616 17.036002l290.972001-279.360546L68.461231 262.244726z"
            fill="#ffffff"
            p-id="6640"
          ></path>
        </svg>
        Email : linxin94@gzhu.edu.cn
      </a>

      <!-- <a
        href="mailto:linxin94@gzhu.edu.cn"
        class="nunito text-[#5967F2] mr-2 ml-4 text-lg 2xl:text-xl hover:text-black hover:no-underline inline-flex items-center transition-all duration-300 group"
      >
        Email: linxin94@gzhu.edu.cn
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 19l14-14m0 0v11m0-11h-11"
          />
        </svg>
      </a> -->
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Catamaran:wght@100..900&family=Kreon:wght@300..700&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Mitr:wght@200;300;400;500;600;700&family=Quando&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
.sacramento-regular {
  font-family: "Sacramento", serif;
  font-weight: 800;
  font-style: normal;
}

.libre-franklin {
  font-family: "Libre Franklin", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}
.nunito {
  font-family: "Nunito", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}
</style>
