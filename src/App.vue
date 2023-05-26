<template>
  <ul>
    <DisplayImage
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<script>
import DisplayImage from "./components/DisplayImage.vue";

export default {
  components: {
    DisplayImage,
  },
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
