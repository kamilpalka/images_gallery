<template>
  <div>
    <v-app>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <h1 class="text-center">Image Gallery</h1>
              <h2>{{ $store.state.page }}</h2>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="image in paginatedImages"
              :key="image.id"
            >
              <v-card class="mb-4">
                <v-img
                  :src="image.download_url"
                  :alt="image.author"
                  height="200"
                ></v-img>
                <v-card-text class="text-center">{{
                  image.author
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" v-if="paginatedImages === 0">
              <p class="text-center">No images found.</p>
            </v-col>
            <v-col cols="12" v-else>
              <v-btn block color="primary" @click="loadMore">Load More</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    //paginatedImages() { return this.$store.getters.paginatedImages; },
    ...mapGetters(["paginatedImages"]),
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadMore() {
      this.$store.dispatch("fetchImages");
    },
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

.v-card-text {
  color: #555;
}
</style>
