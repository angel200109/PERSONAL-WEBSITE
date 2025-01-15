/** @type {import('tailwindcss').Config} */
// 这是tailwind框架的配置文件
export default {
  //content指定css框架应用到哪些文件,通配符**/*表示递归扫描src下全部匹配的文件
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  //theme 对象用于自定义Tailwind的主题，包括颜色、字体、间距等。
  theme: {
    extend: {
      fontFamily: {
        //给sans添加了新的字体定义,如果Poppins不可用，则使用系统默认的sans-serif字体
        //使用类名 font-sans，就会应用这个新的字体配置
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        //新增名为70/30的布局，第一列占70%，第二列占28%
        //使用类名 grid-cols-70/30，就可以应用到这个布局
        "70/30": "70% 28%",
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
