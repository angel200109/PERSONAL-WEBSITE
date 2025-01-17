<script>
import authorConfig from "../../config/author.config";

export default {
  props: ["largeFont", "smallFont", "screenWidth"],

  components: {},

  data() {
    return {
      content: authorConfig.co_authors,
      number: {},
    };
  },

  computed: {
    isPC() {
      return this.screenWidth >= 800;
    },
    duplicatedSkills() {
      return [...this.skills, ...this.skills, ...this.skills]; // Triple the skills for smoother looping
    },
  },

  mounted() {
    for (let name in this.content) {
      this.number[name] = 0;
    }
    for (let year in authorConfig.publications) {
      for (let idx in authorConfig.publications[year]) {
        const publication = authorConfig.publications[year][idx];
        for (let name in this.number) {
          if (publication.author.search(name) >= 0) {
            this.number[name] += 1;
          }
        }
      }
    }
  },
};
</script>

<template>
  <div class="CoAuthor">
    <h2
      class="catamaran text-3xl sm:text-4xl 2xl:text-[40px] font-extrabold text-center mb-5 mt-2 text-gray-700"
    >
      🤗 Co-Authors
    </h2>

    <div class="content">
      <div class="authorList">
        <div
          class="author absolute inset-0 hover:bg-gradient-to-br from-blue-90 via-purple-50 to-pink-50 hover:bg-opacity-10"
          v-for="(author, name) in content"
          :style="[
            author.hasOwnProperty('relationship') &&
            author['relationship'] == 'Teacher'
              ? 'box-shadow: 0px 0px 7px #ffba00; border-color: rgb(255, 127, 0)'
              : '',
          ]"
        >
          <div class="count">
            {{ number[name] }}
          </div>
          <div class="head">
            <img
              :src="`./imgs/co-authors/Default.png`"
              v-if="!author.hasOwnProperty('image') || author['image'] == ''"
            />
            <img :src="author.image" v-else />
          </div>
          <div class="pt-1 text-center text-base 2xl:text-2xl 2xl:pt-2">
            <span>
              <a
                :href="author.url"
                class="text-[#4285f4] hover:transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:no-underline"
                ><b>{{ name }}</b></a
              >
            </span>
          </div>
          <div
            class="position text-m 2xl:text-[23px] mb-1 2xl:pt-1"
            style="text-align: center"
          >
            <span> {{ author.position }} </span>
          </div>
          <div
            class="institute text-xs 2xl:text-[18px] leading-[1.2] text-gray-700"
          >
            <span>
              {{ author.institute }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-link:hover {
  text-decoration: none;
}
.CoAuthor {
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

.content {
  overflow-x: auto;
  width: 100%;
  display: flex;
}

.authorList {
  display: flex;
  flex-direction: row;
  padding: 5px 0;
}

.author {
  min-width: 160px;
  min-height: 240px;

  width: 12vw;
  height: 18vw;
  flex-grow: 0;
  padding: 9px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  overflow: hidden;
  position: relative;
}

.count {
  position: absolute;
  right: 0;
  background: #f44336;
  top: 0;
  padding: 5px 10px;
  font-size: var(--smallFont);
  font-weight: bold;
  color: white;
  border-bottom-left-radius: 10px;
  box-shadow: -1px 1px 3px gray;
}

.head img {
  border-radius: 5px;
  width: calc(max(12vw, 160px) - 20px);
  height: calc(max(12vw, 160px) - 20px);
  overflow: hidden;
  object-fit: contain;
  /* object-position: top; */
}

.institute {
  flex-grow: 1;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Quando&display=swap");
.catamaran {
  font-family: "Catamaran", serif;
  font-weight: 800;
  font-style: normal;
}
</style>
