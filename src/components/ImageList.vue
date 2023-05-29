<template>
  <div>
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
            <v-col cols="12" v-if="sortImages === 0">
              <p class="text-center">No images found.</p>
            </v-col>
            <v-col cols="12" v-else>
              <h2>{{ $store.state.page }}</h2>
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
    ...mapGetters(["sortImages"]),
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadMore() {
      this.$store.dispatch("fetchImages");
    },
  },
  mounted() {
    this.loadMore();
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

.v-card {
  box-shadow: 0 4px 6px -1px hsla(0, 87%, 34%, 0.884),
    0 2px 4px -1px rgba(76, 9, 163, 0.911);
}

.v-card-text {
  color: #555;
}

.text-center {
  text-align: center;
}
</style>
