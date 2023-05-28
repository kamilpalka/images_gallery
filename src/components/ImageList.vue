<template>
  <div class="image-list">
    <div class="image-item" v-for="image in loadedImages" :key="image.id">
      <image-item :image="loadedImages"></image-item>
    </div>
    <button v-if="hasMore" @click="loadMore" class="load-more">
      Load More
    </button>
  </div>
</template>

<script>
import ImageItem from "./ImageItem.vue";

export default {
  components: ImageItem,
  data() {
    return {
      images: [],
      page: 1,
      pageSize: 20,
      loadedImages: [],
    };
  },
  computed: {
    paginatedImages() {
      return this.loadedImages;
    },
    hasMore() {
      return this.page * this.pageSize < this.images.length;
    },
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      fetch("https://picsum.photos/v2/list?limit=100")
        .then((response) => response.json())
        .then((data) => {
          this.images = data.sort((a, b) => a.author.localeCompare(b.author));
          this.loadMore();
          //console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    loadMore() {
      const startIndex = (this.page - 1) * this.pageSize;
      const endIndex = this.page * this.pageSize;
      this.loadedImages = [
        ...this.loadedImages,
        ...this.images.slice(startIndex, endIndex),
      ];
      this.page++;
    },
  },
};
</script>

<style scoped>
.image-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.author {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
}

.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.load-more:hover {
  background-color: #0056b3;
}
</style>
