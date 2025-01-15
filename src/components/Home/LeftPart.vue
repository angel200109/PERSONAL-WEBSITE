<script>
import NameCopy from "../icons/Name copy.vue";
import authorConfig from "../../config/author.config";
export default {
  name: "App",
  components: {
    NameCopy,
  },
  data() {
    return {
      authorName: authorConfig.name,
      authorRole: authorConfig.role,
      authorSchool: authorConfig.school,
      authorCollege: authorConfig.college,
      authorEmail: authorConfig.email,
      authorOptions: authorConfig.options,

      globe_id: authorConfig.analysis_globe_id,
    };
  },
};
</script>
<template>
  <div class="flex flex-col justify-center items-center m-auto">
    <!-- img -->
    <div class="md:mt-20 sm:mt-8 mb-0">
      <img
        src="dist\imgs\LinXi.jpeg"
        alt="Professional headshot of the software engineer"
        class="mx-auto rounded-full mb-0 w-64 h-64 object-cover shadow-lg hover:scale-105 transition duration-300"
      />
    </div>

    <!-- name -->
    <div>
      <a href="./"> <NameCopy /> </a>
    </div>

    <!-- possition -->
    <div>
      <p
        class="text-base mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
      >
        {{ authorRole }}
      </p>
    </div>
    <!-- institute -->
    <div>
      <p
        class="text-base mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
      >
        {{ authorSchool.name }}
      </p>
    </div>

    <!-- Email -->
    <div>
      <a
        :href="this.EmailHref"
        class="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-full hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 focus:ring-blue-300 font-medium text-base hover:no-underline"
      >
        Contact Me: linxin94@gzhu.edu.cn
      </a>
    </div>
    <!-- options -->
    <div>
      <div class="flex justify-center space-x-5 mt-2">
        <a
          href="#"
          class="text-gray-600 hover:text-[#333] transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
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
          <span>Github</span>
        </a>
        <a
          href="#"
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
          <span>Google Scholar</span>
        </a>
      </div>
    </div>
  </div>
</template>
