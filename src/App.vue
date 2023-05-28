<template>
  <div>
    <h1>Images Gallery</h1>
    <display-image></display-image>
  </div>
  <!-- <ul>
    <DisplayImage
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul> -->
</template>

<script>
import DisplayImage from "./components/DisplayImage.vue";

export default {
  components: {
    DisplayImage,
  },
  data() {
    return {
      images: [],
      page: 1,
      pageSize: 20,
      hasMoreImages: true,

      // storedResources: [
      //   {
      //     id: "place1",
      //     title: "suuuper",
      //     description: "guide",
      //     link: "google.pl",
      //   },
      //   {
      //     id: "place2",
      //     title: "suuupe2",
      //     description: "guide2",
      //     link: "google.pl2",
      //   },
      // ],
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    async loadImages() {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      this.images.push(data);
      console.log(data);
    },
  },
};
</script>
