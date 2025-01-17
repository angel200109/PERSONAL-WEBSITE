/** @type {import('tailwindcss').Config} */
// 这是tailwind框架的配置文件
export default {
  //content指定css框架应用到哪些文件,通配符**/*表示递归扫描src下全部匹配的文件
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  //theme 对象用于自定义Tailwind的主题，包括颜色、字体、间距等。
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "5xl": "2560px",
        "6xl": "3840px",
      },
      animation: {
        pulseSlow: "pulse 3s ease-in-out infinite", // 修改为3秒
      },
    },
  },
  //variants配置来指定哪些样式支持哪些变体
  variants: {
    extend: {},
  },
  //plugins数组用于引入自定义插件或官方插件
  plugins: [],
};
