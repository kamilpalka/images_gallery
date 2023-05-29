<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-center">Image Gallery</h1>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="image in sortImages"
            :key="image.id"
          >
            <v-card class="mb-4" variant="tonal">
              <v-img
                :src="image.download_url"
                :alt="image.author"
                height="200"
              ></v-img>
              <v-card-text class="text-center">{{ image.author }}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" v-if="sortImages === 0">
            <p class="text-center">No images found.</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn
            class="ma-3"
            rounded="lg"
            color="deep-orange-darken-3"
            elevation="10"
            variant="flat"
            size="x-large"
            max-width="300px"
            @click="fetchImages"
            >Load More
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    //paginatedImages() { return this.$store.getters.paginatedImages; },
    ...mapGetters(["sortImages"]),
  },
  methods: {
    // loadMore() { this.$store.dispatch("fetchImages"); },
    ...mapActions(["fetchImages"]),
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style>
.v-main {
  background-color: #ffccbc;
}

.v-card-text {
  color: #555;
}
</style>
