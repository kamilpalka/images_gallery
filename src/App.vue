<template>
  <ul>
    <li></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: "place1",
          title: "suuuper",
          description: "guide",
          link: "google.pl",
        },
        {
          id: "place2",
          title: "suuupe2",
          description: "guide2",
          link: "google.pl2",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
