<script>
import Avatar from "../components/Home/Avatar.vue";
import authorConfig from "../config/author.config";
import apiConfig from "../config/api.config";
import User from "../components/icons/User.vue";
import Degree from "../components/icons/Degree.vue";
import Department from "../components/icons/Department.vue";
import Mail from "../components/icons/Mail.vue";
import Next from "../components/icons/Next.vue";
import AuthorItem from "../components/Home/AuthorItem.vue";
import AboutMe from "../components/Home/AboutMe.vue";
import CoAuthor from "../components/Home/CoAuthor.vue";
import Co from "../components/Home/co.vue";
import News from "../components/Home/News.vue";
import AcademicFootprint from "../components/Home/AcademicFootprint.vue";
import Publication from "../components/Home/Publication.vue";
import Visit from "../components/icons/Visit.vue";
import Discussion from "../components/Home/Discussion.vue";
import Name from "../components/icons/Name.vue";
import GoogleScholar from "../components/icons/GoogleScholar.vue";
import Github from "../components/icons/Github.vue";
import NameCopy from "../components/icons/Name copy.vue";
import fetchJSONP from "fetch-jsonp";
import Test from "../components/icons/test.vue";
import LeftPart from "../components/Home/LeftPart.vue";

export default {
  name: "App",
  components: {
    Avatar,
    User,
    Degree,
    Department,
    Mail,
    AuthorItem,
    AboutMe,
    CoAuthor,
    News,
    Co,
    AcademicFootprint,
    Next,
    Publication,
    Visit,
    Discussion,
    Name,
    NameCopy,
    GoogleScholar,
    Github,
    Test,
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
      return this.screenWidth >= 800;
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
    class="body font-sans text-gray-800 antialiased bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-colors duration-300"
    ref="body"
    :style="`--smallFont:` + this.smallFont + '; --largeFont:' + this.largeFont"
  >
    <!-- 左部分 -->
    <div class="AvatarBlock" ref="AvatarBlock">
      <LeftPart />
      <!-- <AuthorItem
        font_size="var(--largeFont)"
        font_weight="bold"
        style="margin-top: 20px"
      >
        <template v-slot:Text>
          <a href="./"> <NameCopy /> </a>
        </template>
      </AuthorItem> -->

      <!-- <div class="m-auto">
        <h1 class="text-5xl font-bold mb-2 text-gray-600">Xin Lin</h1>
      </div> -->

      <AuthorItem style="margin-top: 20px">
        <!-- <template v-slot:Icon>
          <Degree />
        </template> -->
        <template v-slot:Text>
          <p
            class="text-base mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulseSlow"
          >
            {{ authorRole }} |
          </p>
        </template>
      </AuthorItem>

      <AuthorItem>
        <!-- <template v-slot:Icon>
          <Department />
        </template> -->
        <template v-slot:Text>
          <a
            :href="authorSchool.url"
            target="_blank"
            class="hover:no-underline"
          >
            <p
              class="text-m mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-pulseSlow"
            >
              {{ authorSchool.name }}
            </p></a
          >
          <div v-if="authorCollege.name != ``" style="display: inline-block">
            <span
              >,&nbsp&nbsp<a :href="authorCollege.url" target="_blank">{{
                authorCollege.name
              }}</a></span
            >
          </div>
        </template>
      </AuthorItem>

      <div class="Options">
        <!-- <a
          v-for="(value, key, index) in authorOptions"
          :href="value"
          target="_blank"
        >
          <div
            :style="`--btn_color:` + optionColor(index)"
            class="unselect"
            v-if="key.includes('Google Scholar')"
          >
            <GoogleScholar
              style="
                height: var(--smallFont);
                vertical-align: text-bottom;
                margin-right: calc(var(--smallFont) * 0.5);
              "
            />
            <span
              style="font-weight: bold"
              v-if="
                'citedby' in googleScholarInfo &&
                googleScholarInfo['citedby'] > 0
              "
              >Citations: {{ googleScholarInfo["citedby"] }}</span
            >
            <span v-else> {{ key }} </span>
          </div>
          <div
            :style="`--btn_color:` + optionColor(index)"
            class="unselect"
            v-else-if="key.includes('GitHub')"
          >
            <Github
              style="
                height: var(--smallFont);
                vertical-align: text-bottom;
                margin-right: calc(var(--smallFont) * 0.5);
              "
            />
            <span>{{ key }}</span>
          </div>
          <div
            :style="`--btn_color:` + optionColor(index)"
            class="unselect"
            v-else
          >
            <span>{{ key }}</span>
          </div>
        </a> -->

        <!-- 讨论室 -->
        <!-- <a
          style="flex: 1"
          class="discussion_num_a"
          @click="openDiscussionRoom('Global')"
          v-if="isPC"
        >
          <div
            :style="`--btn_color:` + optionColor(3)"
            class="unselect"
            style="position: relative"
          >
            <span class="discussion_text"> Discussion Room </span>
            <span
              class="discussion_num"
              v-if="
                'Global' in this.discussions && this.discussions['Global'] > 0
              "
            >
              {{ this.discussions.Global }}
            </span>
          </div>
        </a> -->
      </div>
    </div>

    <!-- 右部分 -->
    <div class="RightBlock" ref="RightBlock">
      <div class="RightContent">
        <div class="BlockItem">
          <AboutMe largeFont="var(--largeFont)" smallFont="var(--smallFont)" />
        </div>
        <!-- <div class="BlockItem" style="margin-top: 30px; height: 400px">
          <News
            largeFont="var(--largeFont)"
            smallFont="var(--smallFont)"
            :screenWidth="screenWidth"
          />
        </div> -->
        <!-- <div class="BlockItem" style="margin-top: 30px">
          <AcademicFootprint
            largeFont="var(--largeFont)"
            smallFont="var(--smallFont)"
            :screenWidth="screenWidth"
          />
        </div> -->
        <div class="BlockItem" style="margin-top: 25px">
          <Publication
            largeFont="var(--largeFont)"
            smallFont="var(--smallFont)"
            :screenWidth="screenWidth"
            @showDR="openDiscussionRoom"
            :discussionCount="discussions"
            :googleScholarInfo="googleScholarInfo"
          />
        </div>

        <!-- 专家栏 -->
        <div class="BlockItem" style="margin-top: 30px">
          <CoAuthor
            largeFont="var(--largeFont)"
            smallFont="var(--smallFont)"
            :screenWidth="screenWidth"
          />
        </div>
        <!-- <co></co> -->
        <!-- <div class="VisitBlock" style="margin-top: 30px; width: 100%">
          <div style="display: flex; align-items: center; margin-bottom: 20px">
            //<div style="width: var(--largeFont); height: var(--largeFont); display: inline-block; padding-right: 10px; box-sizing: content-box;">
                  <Visit/>
              </div> //
            <div
              style="
                font-size: var(--largeFont);
                font-weight: bold;
                display: inline-block;
              "
              class="unselect"
            >
              👀 Recent Visitors
            </div>
          </div>
          <div class="VisitItem">
            <div class="VisitDesc">
              <marquee
                scrollamount="2"
                direction="up"
                style="
                  overflow-y: auto;
                  height: 100%;
                  padding-bottom: 10px;
                  padding-right: 10px;
                "
              >
                <li v-for="(visit, key) in visitNumber">
                  <span style="font-size: var(--smallFont)"
                    ><b>{{ visit }}</b> views from {{ key }}</span
                  >
                </li>
              </marquee>
            </div>
            <div class="VisitGlobe">
              <div
                v-is="`script`"
                id="clstr_globe"
                style="width: 100%; height: 100%"
                type="text/javascript"
                :src="`https://clustrmaps.com/globe.js?d=` + this.globe_id"
              ></div>
            </div>
          </div>
        </div> -->

        <div id="footer" class="text-center mt-3">
          <small>Updated Jan 10, 2025</small>
        </div>
      </div>
    </div>

    <Discussion
      :largeFont="largeFont"
      :smallFont="smallFont"
      :screenWidth="screenWidth"
      :channel="discussion_channel"
      :discussion_url="discussion_url"
      v-if="show_discussion && isPC"
      @close="closeDiscussion"
    />
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

.AvatarBlock {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: var(--left);
  --size: 18vw;
  height: 100vh;
  padding: 2vw;
  /* background-color: lightgray; */
  /* background-color: #e5e5e5; */
  /* background-image: radial-gradient(at top right, #b7b6bb 0%, #e8eae9 100%); */
  /* background-color: #e8eae9;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23b7b6bb' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E"); */
  /* box-shadow: 1px 0 1px lightgray; */
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
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 0vh;
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

@media screen and (max-width: 799px) {
  .body {
    flex-wrap: wrap;
  }

  .AvatarBlock {
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
    --size: 60vw;
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
</style>
