<script>
import authorConfig from "../../config/author.config";
import Me from "../icons/Me.vue";

export default {
  props: ["largeFont", "smallFont"],

  components: {
    Me,
  },

  data() {
    return {
      content: authorConfig.aboutMe,
    };
  },
};
</script>

<template>
  <section id="about" class="flex items-center justify-center pt-3 2xl:pt-8">
    <div class="m-0 px-2 sm:px-6 lg:px-8">
      <!-- About Me -->
      <div>
        <h2
          class="catamaran text-3xl sm:text-4xl 2xl:text-[40px] font-extrabold text-center mb-6 2xl:mb-8 text-gray-700"
        >
          👨🏻‍💻 About Me
        </h2>
        <p
          class="text-center mb-11 2xl:mb-14 text-gray-500 text-base 2xl:text-2xl"
        >
          I am an Assistant Professor at the School of Artificial Intelligence,
          <a
            href="https://www.gzhu.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >Guangzhou University</a
          >, a member of Prof.
          <a
            href="https://iaib.gzhu.edu.cn/info/1232/1021.htm"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >Jin Li</a
          >
          and Prof.
          <a
            href="https://ai.gzhu.edu.cn/info/1223/1077.htm"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >Chunsheng Yang</a
          >'s Lab. I received my Ph.D. degree from
          <a
            href="https://www.scut.edu.cn/en/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >South China University of Technology</a
          >, advised by Prof.
          <a
            href="https://dr.ntu.edu.sg/cris/rp/rp02343"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >Dacheng Tao</a
          >
          and Prof.
          <a
            href="https://www2.scut.edu.cn/ft/2021/1102/c29779a449569/page.htm"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-transform duration-200"
            >Changxing Ding</a
          >. Before that, I received my M.S. degree majoring in Information and
          Communication Engineering at Shenzhen University, advised by Prof.
          <a
            href="https://ceie.szu.edu.cn/info/1014/1498.htm"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#4285f4] no-underline hover:no-underline hover:scale-110 transition-all duration-200"
            >Lei Huang</a
          >. My research interests include
          <b style="color: #ffd700"> computer vision</b>,<b
            style="color: #f75522"
          >
            multi-modality learning</b
          >, <b style="color: #55f722"> visual relationship detection</b>, and
          <b style="color: #5522f7"> multimodal LLMs</b>.
        </p>
      </div>

      <!-- Education and academic service -->
      <div class="space-y-8 2xl:space-y-10">
        <div
          class="bg-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <h3
            class="catamaran text-xl 2xl:text-3xl font-bold mb-2 text-gray-700"
          >
            🎓 Education Background
          </h3>
          <div class="flex items-center justify-between flex-wrap">
            <div class="mb-1">
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-600 font-semibold"
              >
                • Ph.D degree: Sep. 2018 - Oct. 2022
              </p>
              <p class="text-l 2xl:text-2xl text-gray-600 hover:text-blue-500">
                School of Electronic and Information Engineering, South China
                University of Technology (SCUT), Guangzhou, China
              </p>
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-400 hover:text-[#6F52EE]"
              >
                Supervisor: Prof. Dacheng Tao (IEEE Fellow) and Prof. Changxing
                Ding
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between flex-wrap">
            <div class="mb-1">
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-600 font-semibold"
              >
                • M.S degree: Sept. 2015 -Jul. 2018
              </p>
              <p class="text-l 2xl:text-2xl text-gray-600 hover:text-blue-500">
                College of Electronic and Information Engineering, Shenzhen
                University (SZU), Shenzhen, China
              </p>
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-400 hover:text-[#6F52EE]"
              >
                Supervisor: Prof. Lei Huang
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between flex-wrap">
            <div>
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-600 font-semibold"
              >
                • B.E degree: Sept. 2010 - Jul. 2014
              </p>
              <p class="text-l 2xl:text-2xl text-gray-600 hover:text-blue-500">
                School of Computer Science and Cyber Engineering, Guangzhou
                University (GZU), Guangzhou, China
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <h3
            class="catamaran text-xl 2xl:text-3xl font-bold mb-2 text-gray-700"
          >
            📑 Academic Services
          </h3>
          <div class="flex items-center justify-between flex-wrap">
            <div class="mb-1">
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-600 font-semibold"
              >
                • Journal Reviewer
              </p>
              <p class="text-l 2xl:text-2xl text-gray-600 hover:text-blue-500">
                &nbsp; &nbsp; TPAMI, TIP, TCSVT, TMLR
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between flex-wrap">
            <div>
              <p
                class="text-l 2xl:text-2xl font-medium text-gray-600 font-semibold"
              >
                • Conference Reviewer
              </p>
              <p class="text-l 2xl:text-2xl text-gray-600 hover:text-blue-500">
                &nbsp; &nbsp; ICML, ICLR, NeurIPS, ACM MM, CVPR, AAAI, ECCV,
                etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.AboutMe {
  width: 100%;
}

.title {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.title span {
  font-weight: bold;
}

.icon {
  display: inline-block;
  box-sizing: content-box;
  padding-right: 10px;
}

.icon svg {
  width: 100%;
  height: 100%;
}

/* 自定义 CSS */
.hoverLink {
  position: relative; /* 为了使 ::after 定位 */
  text-decoration: none; /* 去除默认的下划线 */
  color: #4285f4; /* 设置字体颜色为 #4285f4 */
  font-weight: 500;
  font-style: normal;
  @apply text-base 2xl:text-xl hover:scale-110 transition-transform duration-200;
}

.hoverLink::after {
  content: ""; /* 添加伪元素内容 */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* 可以自定义高度 */
  background-color: currentColor; /* 使用文本颜色 */
  transform: scaleX(0); /* 初始时伪元素缩小 */
  transform-origin: bottom right; /* 设置动画起点 */
  transition: transform 0.3s ease-out; /* 动画效果 */
}

.hoverLink:hover::after {
  transform: scaleX(1); /* 悬停时伪元素放大 */
  transform-origin: bottom left; /* 动画终点 */
}
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Quando&display=swap");
.catamaran {
  font-family: "Catamaran", serif;
  font-weight: 800;
  font-style: normal;
}
.biryani-extralight {
  font-family: "Biryani", serif;
  font-weight: 200;
  font-style: normal;
}
</style>
