<template>
  <div class="image-item">
    <p>wwwwwwww</p>
    <img :src="getImageUrl(image.id)" :alt="image.author" />
    <p class="author">{{ image.author }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("22");
  },
  props: {
    image: Object,
  },
  methods: {
    getImageUrl(id) {
      return `https://picsum.photos/id/${id}/200/200`;
    },
  },
};
</script>

<style scoped>
.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
