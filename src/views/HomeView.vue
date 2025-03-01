<script>
import authorConfig from "../config/author.config";
import apiConfig from "../config/api.config";
import Next from "../components/icons/Next.vue";
import AuthorItem from "../components/Home/AuthorItem.vue";
import AboutMe from "../components/Home/AboutMe.vue";
import CoAuthor from "../components/Home/CoAuthor.vue";
import News from "../components/Home/News.vue";
import Publication from "../components/Home/Publication.vue";
import Discussion from "../components/Home/Discussion.vue";
import GoogleScholar from "../components/icons/GoogleScholar.vue";
import SmName from "../components/icons/SmName.vue";
import Name from "../components/icons/Name.vue";
import Github from "../components/icons/Github.vue";
import fetchJSONP from "fetch-jsonp";
import LeftPart from "../components/Home/LeftPart.vue";
import Avatar from "../components/Home/Avatar.vue";

export default {
  name: "App",
  components: {
    Avatar,
    AuthorItem,
    AboutMe,
    SmName,
    Name,
    CoAuthor,
    News,
    Next,
    Publication,
    Discussion,
    GoogleScholar,
    Github,
    LeftPart,
  },

  data() {
    return {
      // parameter
      screenWidth: -1,
      screenHeight: -1,
      smallFont: "16px",
      largeFont: "20px",

      optionColors: [
        "#4285f4",
        "#1B1F23",
        "#80261b",
        "#222255",
        "#222222",
        "#552222",
      ],

      visitNumbers: {},

      remove_href: false,
      load_globe: false,

      show_discussion: false,
      discussion_channel: "Global",
      discussion_url: "",

      discussions: {},

      googleScholarInfo: {},

      // information
      authorName: authorConfig.name,
      authorRole: authorConfig.role,
      authorSchool: authorConfig.school,
      authorCollege: authorConfig.college,
      authorEmail: authorConfig.email,
      authorOptions: authorConfig.options,

      globe_id: authorConfig.analysis_globe_id,

      t1: null,
    };
  },

  computed: {
    EmailHref() {
      return "mailto:" + authorConfig.email;
    },
    EmailShow() {
      return authorConfig.email.replace("@", " AT ");
    },
    visitNumber: {
      get() {
        return this.visitNumbers;
      },
      set(list) {
        for (let idx in list) {
          let name = list[idx]["name"];
          name = name.replace("Taiwan", "Taiwan, China");
          if (name in this.visitNumber) {
            this.visitNumbers[name] += list[idx]["v"];
          } else {
            this.visitNumbers[name] = list[idx]["v"];
          }
        }
      },
    },
    isPC() {
      return this.screenWidth >= 1280;
    },
  },

  watch: {
    screenWidth(new_val, old_val) {
      if (new_val < 800) {
        new_val = new_val / 0.3;
      } else if (0.3 * new_val < 300) {
        new_val = 300 / 0.3;
      }

      this.smallFont = new_val * 0.01 + "px";
      this.largeFont = new_val * 0.015 + "px";
    },
  },

  created() {
    window.addEventListener("resize", this.windowResize);
    let that = this;
    fetchJSONP("//clustrmaps.com/globe_call_home.js?w=180&d=" + this.globe_id)
      .then((response) => response.json())
      .then((data) => {
        data = data.replace(
          "addPoints(points, flag);",
          "that.updateVisitNumbers(points)"
        );
        console.log(that.visitNumbers == 1);
        eval(data);
      });
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResize);
  },

  beforeMount() {
    this.screenHeight = document.documentElement.clientHeight;
    this.screenWidth = document.documentElement.clientWidth;
  },

  methods: {
    windowResize(e) {
      this.screenHeight = e.target.innerHeight;
      this.screenWidth = e.target.innerWidth;
    },
    optionColor(index) {
      if (index >= this.optionColors.length) {
        return "#555555";
      } else {
        return this.optionColors[index];
      }
    },
    updateVisitNumbers(points) {
      this.visitNumber = points;
    },

    openDiscussionRoom(title, url = "") {
      this.discussion_channel = title;
      this.discussion_url = url;
      this.show_discussion = true;
    },

    closeDiscussion() {
      this.show_discussion = false;
    },

    getDiscussionCounts() {
      const response = fetch(apiConfig.baseURL + "/Discussion/Counts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      response
        .then((e) => e.json())
        .then((e) => {
          if (e["success"]) {
            this.discussions = e["counts"];
          }
        })
        .catch((e) => {
          console.log("error: " + e);
        });
    },

    getScholarInfo() {
      const response = fetch(apiConfig.baseURL + "/scholar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      response
        .then((e) => e.json())
        .then((e) => {
          if (e["result"]) {
            this.googleScholarInfo = e["data"];
          }
        })
        .catch((e) => {
          console.log("error: " + e);
        });
    },
  },
  mounted() {
    // get google scholar citation
    this.getScholarInfo();

    // document.documentElement.scrollHeight + document.documentElement.clientHeight
    if (this.isPC) {
      this.getDiscussionCounts();
      // this.t1 = setInterval(() => {
      //   if (!this.show_discussion){
      //     this.getDiscussionCounts();
      //   }
      // }, 1000 * 10);
    }

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.addEventListener("scroll", () => {
      if (
        !this.remove_href &&
        document.getElementById("clstr_a") &&
        document.getElementById("clstr_a").href != "javascript:void(0)"
      ) {
        document.getElementById("clstr_a").href = "javascript:void(0)";
        this.remove_href = true;
      }

      if (!this.load_globe) {
        let elem = $("#clstr_a");
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = elem.offset() ? $(elem).offset().top : 0;
        var elemBottom = elemTop + $(elem).height();
        this.load_globe = elemBottom <= docViewBottom && elemTop >= docViewTop;
      }
    });

    const svg_paths = document.getElementById("name").querySelectorAll("path");
    svg_paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.setProperty("--len", len + 1);
    });
  },

  beforeUnmount() {
    if (this.t1 != null) {
      clearInterval(this.t1);
    }
  },
};
</script>

<template>
  <div
    class="flex body font-sans text-gray-800 antialiased bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-colors duration-300"
    ref="body"
    :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont"
  >
    <!-- 左部分 -->
    <div
      class="LeftBlock flex flex-col justify-center items-center"
      ref="LeftBlock"
    >
      <!-- <LeftPart
        largeFont="var(--largeFont)"
        smallFont="var(--smallFont)"
        :screenWidth="screenWidth"
      /> -->
      <!-- 头像 -->
      <div class="AvatarPic">
        <Avatar size="max(var(--size), 180px)" radius="20px"></Avatar>
      </div>

      <AuthorItem
        font_size="var(--largeFont)"
        font_weight="bold"
        margin_top=" calc(var(--largeFont)*0.4)"
      >
        <template v-slot:Text>
          <a href="./"
            ><SmName
              style="
                height: calc(var(--largeFont) * 2.5);
                width: auto;
                vertical-align: bottom;
              "
              id="name"
          /></a>
        </template>
      </AuthorItem>

      <!-- 职位 -->
      <AuthorItem
        font_size="calc(var(--largeFont)*1.1)"
        margin_top=" calc(var(--largeFont)*0.5)"
      >
        <template v-slot:Text>
          <p
            class="libre-franklin bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
          >
            {{ authorRole }}
          </p>
        </template>
      </AuthorItem>

      <!-- 机构 -->
      <AuthorItem
        font_size="calc(var(--smallFont)*1.1)"
        style="margin-top: 0px"
      >
        <template v-slot:Text>
          <p>
            <a
              href="https://www.gzhu.edu.cn/"
              target="_blank"
              class="libre-franklin bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulse"
              ><equal></equal>Guangzhou University<equal></equal
            ></a>
          </p>
        </template>
      </AuthorItem>

      <AuthorItem font_size="var(--smallFont)">
        <template v-slot:Text>
          <div
            class="flex flex-col justify-start items-start space-y-1 3xl:space-y-3 6xl:space-y-8"
          >
            <!-- Google -->
            <p>
              <a
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=XpMnJ1QAAAAJ"
                target="_blank"
                class="flex flex-row justify-center items-center text-gray-600 hover:text-[#333] transition-all duration-300 transform hover:scale-110 hover:no-underline"
              >
                <svg
                  class="w-8 h-8 mr-2 3xl:w-8 3xl:h-8 3xl:mr-2 5xl:w-10 5xl:h-10 5xl:mr-3 6xl:w-12 6xl:h-12 6xl:mr-4"
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
                <span class="text-[#4285f4] nunito">Google Scholar</span>
              </a>
            </p>
            <!-- OpenReview -->
            <p>
              <a
                href="https://openreview.net/profile?id=~Xin_Lin2"
                target="_blank"
                class="flex flex-row justify-center items-center text-gray-600 hover:text-[#333] transition-all duration-300 transform hover:scale-110 hover:no-underline"
              >
                <svg
                  t="1736946772680"
                  class="w-8 h-8 mr-2 3xl:w-8 3xl:h-8 3xl:mr-2 5xl:w-10 5xl:h-10 5xl:mr-3 6xl:w-12 6xl:h-12 6xl:mr-4"
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
                <span class="text-[#8C1B13] nunito">OpenReview</span>
              </a>
            </p>
            <!-- Github -->
            <p>
              <a
                href="/404"
                target="_blank"
                class="text-gray-900 hover:text-[#333] transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
              >
                <svg
                  class="w-8 h-8 mr-2 3xl:w-8 3xl:h-8 3xl:mr-2 5xl:w-10 5xl:h-10 5xl:mr-3 6xl:w-12 6xl:h-12 6xl:mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    fill="#333"
                  />
                </svg>
                <span class="nunito text-gray-900">Github</span>
              </a>
            </p>
          </div></template
        >
      </AuthorItem>

      <AuthorItem
        font_size="var(--smallFont)"
        class="flex flex-col justify-center items-start"
        margin_top=" calc(var(--largeFont)*0.9 )"
      >
        <template v-slot:Text>
          <a
            href="mailto:linxin94@gzhu.edu.cn"
            class="flex justify-center items-center nunito relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 5xl:py-2 rounded-full hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 focus:ring-blue-300 font-medium hover:no-underline"
          >
            <svg
              t="1737030596535"
              class="w-6 h-6 mb-[2px] mr-2 3xl:w-8 3xl:h-8 3xl:mr-2 5xl:w-10 5xl:h-10 5xl:mr-3 6xl:w-12 6xl:h-12 6xl:mr-4"
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
        </template>
      </AuthorItem>
    </div>

    <!-- 右部分 -->
    <div class="RightBlock" ref="RightBlock">
      <div class="RightContent">
        <!-- Aboutme and BackGround -->
        <div class="BlockItem">
          <AboutMe
            largeFont="calc(var(--largeFont)*1.6)"
            middleFont="calc(var(--smallFont)*1.5)"
            smallFont="calc(var(--smallFont)*1.05)"
          />
        </div>

        <!-- Publication -->
        <div class="BlockItem" style="margin-top: 25px">
          <Publication
            largeFont="calc(var(--largeFont)*1.6)"
            smallFont="var(--smallFont)"
            :screenWidth="screenWidth"
            @showDR="openDiscussionRoom"
            :discussionCount="discussions"
            :googleScholarInfo="googleScholarInfo"
          />
        </div>

        <!-- coAuthor -->
        <div class="BlockItem" style="margin-top: 30px">
          <CoAuthor
            largeFont="calc(var(--largeFont)*1.6)"
            smallFont="calc(var(--smallFont)*0.9)"
            middleFont="calc(var(--smallFont)*1.0)"
            :screenWidth="screenWidth"
          />
        </div>

        <div id="footer" class="text-center mt-3">
          <small>Updated Jan 22, 2025</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Lustria&family=NTR&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Quando&display=swap");
.body {
  display: flex;
  width: 100vw;
  background: white;
  --left: max(280px, 28vw);
  @apply font-sans text-gray-800 antialiased bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-colors duration-300;
}

.LeftBlock {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: var(--left);
  --size: 15vw;
  height: 100vh;
  padding: 2vw;
  @apply bg-gradient-to-br from-blue-50 via-white to-blue-50;
}

.RightBlock {
  /* width: 100%; */
  min-width: 500px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  padding-left: var(--left);
  overflow-y: auto;
}

.RightContent {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
}

.VisitItem {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.VisitDesc {
  height: 217px;
  margin-right: 50px;
  /* width: 300px; */
  /* flex: 1 0 auto; */
}

.VisitGlobe {
  width: 200px;
  height: 200px;
}

.AvatarPic {
  flex: 0 0 auto;
  width: var(--size);
  height: var(--size);
  min-width: 180px;
  min-height: 180px;
  /* margin: auto;
  margin-top: 5vh;
  margin-bottom: 0vh; */
  animation: none;
  cursor: grab;
}

/* .AvatarPic:hover {
  animation: rotate 2s infinite;
} */

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.Options {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
}

.Options a {
  margin: 5px 3px;
  text-decoration: none;
}

.Options div {
  flex: 0 0 auto;
  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
  padding: calc(var(--smallFont) / 3) calc(var(--smallFont) / 3 * 2);
  border-radius: calc(var(--smallFont) / 3 * 2);
  color: var(--btn_color);
  border: 2px solid var(--btn_color);

  cursor: pointer;
  text-align: center;

  --fill_color: var(--btn_color);
}

.Options div span {
  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
}

.Options div:hover {
  box-shadow: 2px 2px 2px gray;
  transform: translateY(-5%);

  color: white;
  background-color: var(--btn_color);

  --fill_color: white;
}

.Options div:active {
  box-shadow: none;
  transform: translateY(0%);
}

.Options .discussion_text {
  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
}

.Options .discussion_text::after {
  content: "······";
  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
  animation: spin 2s infinite;
}

@keyframes spin {
  0% {
    content: "";
  }

  10% {
    content: "·";
  }

  20% {
    content: "··";
  }

  30% {
    content: "···";
  }

  40% {
    content: "····";
  }

  50% {
    content: "·····";
  }

  60% {
    content: "······";
  }

  70% {
    content: "·······";
  }

  80% {
    content: "········";
  }

  90% {
    content: "·········";
  }

  100% {
    content: "";
  }
}

.Options .discussion_num {
  position: absolute;
  top: -2px;
  right: -2px;
  font-size: calc(var(--smallFont) * 0.8);
  font-weight: bold;
  background: var(--btn_color);
  color: white;
  border-top-right-radius: calc(var(--smallFont) / 3 * 2);
  border-bottom-right-radius: calc(var(--smallFont) / 3 * 2);
  padding: calc(var(--smallFont) / 3 + 2px);
}

#footer {
  text-align: right;
}

@media screen and (max-width: 768px) {
  .body {
    flex-wrap: wrap;
  }

  .LeftBlock {
    width: 100vw;
    min-width: 0;
    height: auto;
    position: relative;
    padding: 30px;
    padding-top: 50px;
  }

  .RightBlock {
    width: 100vw;
    min-width: 0;
    flex: 1 0 auto;
    height: auto;
    padding-left: 0;
    overflow-y: none;
  }

  .AvatarPic {
    --size: 50vw;
    min-width: 0;
    min-height: 0;
  }

  /* .Options {
    justify-content: center;
  } */

  /* .Options div {
    color: white;
    background-color: var(--btn_color);
  } */

  .VisitGlobe {
    width: 60vw;
    height: 60vw;
  }

  .VisitItem {
    justify-content: center;
  }

  .VisitDesc {
    margin-bottom: 20px;
    height: 200px;
    width: 80vw;
    margin-right: 0;
  }

  #footer {
    text-align: center;
  }
}

.leftItemFont {
  position: relative; /* 为了使 ::after 定位 */
  text-decoration: none; /* 去除默认的下划线 */
  color: #36454f; /* 设置文本颜色 */
  font-family: "Quando", serif;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
}
.leftItemFont::after {
  content: ""; /* 创建伪元素 */
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px; /* 下划线的高度 */
  background-color: #36454f; /* 下划线的颜色 */
  transition: width 0.3s ease; /* 设置动画效果 */
}

.leftItemFont:hover::after {
  width: 100%; /* 鼠标悬停时宽度变为100%，从左到右 */
}
.leftItemFontt {
  position: relative; /* 为了使 ::after 定位 */
  text-decoration: none; /* 去除默认的下划线 */
  color: #517889; /* 设置文本颜色 */
  font-family: "Quando", serif;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
}
.leftItemFontt::after {
  content: ""; /* 创建伪元素 */
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px; /* 下划线的高度 */
  background-color: #517889; /* 下划线的颜色 */
  transition: width 0.3s ease; /* 设置动画效果 */
}

.leftItemFontt:hover::after {
  width: 100%; /* 鼠标悬停时宽度变为100%，从左到右 */
}
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
