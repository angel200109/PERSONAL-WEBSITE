<script>
import authorConfig from "../../config/author.config";

export default {
  props: ["img_src", "size", "radius"],

  data() {
    return {
      image_url: authorConfig.avatar_pic,
    };
  },

  mounted() {
    // this.$refs.Avatar.style.setProperty(
    //   '--image',
    //   "url('" + authorConfig.avatar_pic + "')"
    // );

    this.$refs.Avatar.style.setProperty("width", this.size);

    this.$refs.Avatar.style.setProperty("height", this.size);

    this.$refs.Avatar.style.setProperty("--border-radius", this.radius);
  },
};
</script>

<template>
  <div
    class="Avatar"
    ref="Avatar"
    :style="`background-image:url(` + image_url + `)`"
  ></div>
</template>

<style scoped>
.Avatar {
  background-position: center;
  /* border: 2px solid lightgray; */
  /* box-shadow: 2px 2px 2px  gray; */
  border-radius: var(--border-radius);
  transition: border-radius 1s;
  background-size: 100%;
  border-radius: 50%;
  @apply rounded-full object-cover shadow-lg hover:scale-105 transition duration-300;
}

/* .Avatar:hover {
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px gray;
} */
</style>
