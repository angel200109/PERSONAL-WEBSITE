<script>
import authorConfig from "../../config/author.config";
import Me from "../icons/Me.vue";

export default {
  props: ["largeFont", "middleFont", "smallFont"],

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
  <section
    id="about"
    class="flex items-center justify-center pt-12 2xl:pt-12 2xl:mt-3"
  >
    <div class="m-0" style="width: 100%">
      <!-- Education and academic service -->
      <div class="space-y-8 2xl:space-y-10" style="width: 100%">
        <div
          class="bg-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-101"
        >
          <h3
            class="catamaran font-bold mb-2 text-gray-700"
            :style="`font-size:` + this.middleFont"
          >
            🎓 Education Background
          </h3>
          <div
            class="flex items-center justify-between flex-wrap"
            :style="`font-size:` + this.smallFont"
          >
            <div class="mb-1">
              <p class="font-medium text-gray-600 font-semibold">
                • Ph.D degree: Sep. 2018 - Oct. 2022
              </p>
              <p class="text-gray-600">
                School of Electronic and Information Engineering,
                <a
                  class="hover:text-blue-500"
                  href="https://www.scut.edu.cn/new/"
                  target="_blank"
                  >South China University of Technology (SCUT)</a
                >, Guangzhou, China
              </p>
              <p class="font-medium text-gray-600">
                Supervisor:
                <a
                  class="hover:text-blue-500"
                  href="https://dr.ntu.edu.sg/cris/rp/rp02343"
                  target="_blank"
                  >Prof. Dacheng Tao </a
                >(IEEE Fellow) and
                <a
                  class="hover:text-blue-500"
                  href="https://www2.scut.edu.cn/ft/2021/1102/c29779a449569/page.htm"
                  target="_blank"
                  >Prof. Changxing Ding</a
                >（National Young Talent）
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-between flex-wrap"
            :style="`font-size:` + this.smallFont"
          >
            <div class="mb-1">
              <p class="font-medium text-gray-600 font-semibold">
                • M.S degree: Sept. 2015 -Jul. 2018
              </p>
              <p class="text-gray-600">
                College of Electronic and Information Engineering,
                <a
                  class="hover:text-blue-500"
                  target="_blank"
                  href="https://www.szu.edu.cn/"
                  >Shenzhen University (SZU)</a
                >, Shenzhen, China
              </p>
              <p class="font-medium text-gray-600">
                Supervisor:
                <a
                  href="https://ceie.szu.edu.cn/info/1014/1498.htm"
                  target="_blank"
                  class="hover:text-blue-500"
                  >Prof. Lei Huang</a
                >（IET Fellow, Distinguished Young Scholar）
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-between flex-wrap"
            :style="`font-size:` + this.smallFont"
          >
            <div>
              <p class="font-medium text-gray-600 font-semibold">
                • B.E degree: Sept. 2010 - Jul. 2014
              </p>
              <p class="text-gray-600">
                School of Computer Science and Cyber Engineering,
                <a
                  class="hover:text-blue-500"
                  href="https://www.gzhu.edu.cn/"
                  target="_blank"
                  >Guangzhou University (GZU)</a
                >, Guangzhou, China
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-101"
        >
          <h3
            class="catamaran font-bold mb-2 text-gray-700"
            :style="`font-size:` + this.middleFont"
          >
            📑 Academic Services
          </h3>
          <div
            class="flex items-center justify-between flex-wrap"
            :style="`font-size:` + this.smallFont"
          >
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
          <div
            class="flex items-center justify-between flex-wrap"
            :style="`font-size:` + this.smallFont"
          >
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
