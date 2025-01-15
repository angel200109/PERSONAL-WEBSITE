<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
      currentLanguage: "en",
      showBackToTop: false,
      isSearchActive: false,
      skills: [
        {
          name: "JavaScript",
          icon: "fab fa-js-square",
          color: "text-yellow-500",
        },
        { name: "React", icon: "fab fa-react", color: "text-blue-500" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
        { name: "AWS", icon: "fab fa-aws", color: "text-orange-500" },
        { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
        { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
        { name: "Sass", icon: "fab fa-sass", color: "text-pink-500" },
        // Add more skills as needed
      ],
      scrollPosition: 0,
      scrollInterval: null,
      jobs: [
        {
          company: { en: "Future Tech Innovations", zh: "未来科技创新" },
          role: { en: "Senior Software Architect", zh: "高级软件架构师" },
          duration: "2020 - Present",
          responsibilities: {
            en: [
              "Spearheaded the design and implementation of a cloud-native microservices architecture",
              "Led a team of 15 developers in delivering high-impact projects for Fortune 500 clients",
              "Pioneered the adoption of AI and machine learning technologies in core products",
            ],
            zh: [
              "带头设计和实施云原生微服务架构",
              "领导15人的开发团队为财富500强客户交付高影响力项目",
              "在核心产品中率先采用人工智能和机器学习技术",
            ],
          },
        },
        {
          company: { en: "Global Systems Corp", zh: "全球系统公司" },
          role: { en: "Full Stack Developer", zh: "全栈开发工程师" },
          duration: "2017 - 2020",
          responsibilities: {
            en: [
              "Developed and maintained multiple mission-critical web applications",
              "Implemented responsive designs and improved overall UX, increasing user engagement by 40%",
              "Optimized database queries and application performance, reducing load times by 60%",
            ],
            zh: [
              "开发和维护多个关键任务的Web应用程序",
              "实施响应式设计并改善整体用户体验，使用户参与度提高40%",
              "优化数据库查询和应用程序性能，将加载时间减少60%",
            ],
          },
        },
      ],
      projects: [
        {
          id: 1,
          title: {
            en: "AI-Powered Analytics Dashboard",
            zh: "AI驱动的分析仪表板",
          },
          description: {
            en: "Developed a real-time analytics dashboard using machine learning algorithms to predict market trends and provide actionable insights.",
            zh: "开发了一个使用机器学习算法预测市场趋势并提供可操作洞察的实时分析仪表板。",
          },
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
          technologies: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
          demoLink: "https://demo.example.com",
          codeLink: "https://github.com/yourusername/project-repo",
          visible: false,
        },
        {
          id: 2,
          title: {
            en: "AI-Powered Analytics Dashboard",
            zh: "AI驱动的分析仪表板",
          },
          description: {
            en: "Developed a real-time analytics dashboard using machine learning algorithms to predict market trends and provide actionable insights.",
            zh: "开发了一个使用机器学习算法预测市场趋势并提供可操作洞察的实时分析仪表板。",
          },
          image: "./background/yue-ma--th4TTnX0y0-unsplash.jpg",
          technologies: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
          demoLink: "https://demo.example.com",
          codeLink: "https://github.com/yourusername/project-repo",
          visible: false,
        },
        // Add more projects here...
      ],
      projectRefs: [], // Initialize projectRefs as an empty array
      imageScale: 1,
      borderRadius: 0,
      testimonials: [
        {
          name: { en: "John Doe", zh: "约翰·多伊" },
          position: {
            en: "CEO, Future Tech Innovations",
            zh: "未来科技创新首席执行官",
          },
          content: {
            en: "Kiwi is an exceptional software architect. Their innovative approach to cloud-native microservices has transformed our product infrastructure.",
            zh: "Kiwi是一位杰出的软件架构师。他们对云原生微服务的创新方法彻底改变了我们的产品基础架构。",
          },
        },
        {
          name: { en: "Jane Smith", zh: "简·史密斯" },
          position: {
            en: "CTO, Global Systems Corp",
            zh: "全球系统公司首席技术官",
          },
          content: {
            en: "Working with Kiwi was a game-changer for our team. Their full-stack expertise and optimization skills significantly improved our application performance.",
            zh: "与Kiwi合作对我们的团队来说是一个转折点。他们的全栈专业知识和优化技能显著提高了我们的应用程序性能。",
          },
        },
      ],
      cards: [
        {
          title: "Card 1",
          content: "Content for card 1",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 2",
          content: "Content for card 2",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 3",
          content: "Content for card 3",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 4",
          content: "Content for card 4",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 5",
          content: "Content for card 5",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 6",
          content: "Content for card 6",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 7",
          content: "Content for card 7",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 8",
          content: "Content for card 8",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 9",
          content: "Content for card 9",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
        {
          title: "Card 10",
          content: "Content for card 10",
          image: "./background/yue-ma-7IO4-fLM574-unsplash.jpg",
        },
      ],
    };
  },
  computed: {
    duplicatedSkills() {
      return [...this.skills, ...this.skills, ...this.skills]; // Triple the skills for smoother looping
    },
  },
  mounted() {
    this.applyDarkMode();
    window.addEventListener("scroll", this.checkScroll);
    this.setupEventListeners();
    this.startScroll();
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // Initial call to set correct width
    this.setupIntersectionObserver();
    this.setupImageAnimation();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
    this.stopScroll();
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScroll);
    window.removeEventListener("scroll", this.updateImageAnimation);
    window.removeEventListener("resize", this.updateImageAnimation);
  },
  methods: {
    scroll(direction) {
      const container = this.$refs.scrollContainer;
      const scrollAmount = container.clientWidth * 0.8; // Approximate width of one card
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    // Add other methods here
  },
};
</script>
<template>
  <section id="skills" class="py-20 overflow-hidden">
    <h2 class="text-4xl sm:text-5xl font-extrabold text-center mb-12 px-4">
      <span class="text-gray-700"> skills </span>
    </h2>
    <div
      ref="carouselRef"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
      class="relative w-full overflow-hidden"
    >
      <div
        class="flex transition-transform duration-1000 ease-linear"
        :style="{ transform: `translateX(${-scrollPosition}px)` }"
      >
        <div
          v-for="(skill, index) in duplicatedSkills"
          :key="`${skill.name}-${index}`"
          class="flex-shrink-0 pb-10 w-48 mx-3"
        >
          <div
            class="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-center relative overflow-hidden group my-4 border border-gray-200 dark:border-gray-700"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div class="mb-4 bg-gray-100 rounded-full p-4 inline-block">
                <i :class="[skill.icon, 'text-5xl', skill.color]"></i>
              </div>
              <h3
                class="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              >
                {{ skill.name }}
              </h3>
              <div
                class="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */
</style>
